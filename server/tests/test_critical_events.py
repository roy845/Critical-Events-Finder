from http import HTTPStatus

def test_valid_payload(client,base_url):
    mock_response = []
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": "accident"},
                {"intersection": "Second Ave", "event": "roadwork"}
            ],
            [
                {"intersection": "Main St", "event": "flooding"},
                {"intersection": "Park Blvd", "event": "accident"}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.OK
    assert "critical_events" in response.json
    assert response.json["critical_events"] == mock_response


def test_missing_days_list(client,base_url):
    response = client.post(base_url + "/critical-events/", json={
        "missing_days_list": [
            [
                {"intersection": "Main St", "event": "accident"}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "'days_list' is a required property" in response.get_data(as_text=True)


def test_extra_field(client,base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": "accident"}
            ]
        ],
        "extra_info": "This field should not be here"
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "400 Bad Request: Unexpected fields" in response.get_data(as_text=True)


def test_empty_days_list(client,base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": []
    })
    assert response.status_code == HTTPStatus.NOT_FOUND
    assert "Days list is invalid" in response.get_data(as_text=True)


def test_malformed_json(client,base_url):
    response = client.post(base_url + "/critical-events/", data="not a valid json", content_type="application/json")
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "The browser (or proxy) sent a request that this server could not understand." in response.get_data(as_text=True)


def test_critical_events_found(client,base_url):

    mock_critical_events = sorted(["accident", "roadwork"])


    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": "accident"},
                {"intersection": "Second Ave", "event": "accident"}
            ],
            [
                {"intersection": "Main St", "event": "accident"},
                {"intersection": "Second Ave", "event": "accident"}
            ],
            [
                {"intersection": "Third Ave", "event": "accident"},
                {"intersection": "Fourth St", "event": "roadwork"}
            ],
            [
                {"intersection": "Fifth St", "event": "roadwork"},
                {"intersection": "Main St", "event": "roadwork"}
            ],
            [
                {"intersection": "Fifth St", "event": "roadwork"},
                {"intersection": "Main St", "event": "roadwork"}
            ]
        ]
    })
    

    assert response.status_code == HTTPStatus.OK
    assert "critical_events" in response.json
    assert sorted(response.json["critical_events"]) == mock_critical_events


def test_invalid_structure(client,base_url):
    mock_response = []
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": "accident", "extra_field": "invalid"}
            ],
            
        ]
    })
    assert response.status_code == HTTPStatus.OK
    assert "critical_events" in response.json
    assert response.json["critical_events"] == mock_response


def test_invalid_structure2(client,base_url):
    mock_critical_events = sorted(["accident", "roadwork"])
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": "accident", "extra_field": "invalid"}
            ],
            [
                {"intersection": "Main St", "event": "accident"},
                {"intersection": "Second Ave", "event": "accident"}
            ],
            [
                {"intersection": "Main St", "event": "accident"},
                {"intersection": "Second Ave", "event": "accident"}
            ],
            [
                {"intersection": "Third Ave", "event": "accident"},
                {"intersection": "Fourth St", "event": "roadwork"}
            ],
            [
                {"intersection": "Fifth St", "event": "roadwork"},
                {"intersection": "Main St", "event": "roadwork"}
            ],
            [
                {"intersection": "Fifth St", "event": "roadwork"},
                {"intersection": "Main St", "event": "roadwork"}
            ]
            
        ]
    })
    assert response.status_code == HTTPStatus.OK
    assert "critical_events" in response.json
    assert sorted(response.json["critical_events"]) == mock_critical_events


def test_large_payload(client, base_url):
    large_days_list = [
        [{"intersection": f"Intersection {i}", "event": "accident"}] 
        for i in range(1000)
    ]
    response = client.post(base_url + "/critical-events/", json={"days_list": large_days_list})
    assert response.status_code == HTTPStatus.OK
    assert "critical_events" in response.json


def test_invalid_event_type(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": 123} 
            ]
        ]
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "123 is not of type 'string'" in response.get_data(as_text=True)

def test_missing_event_field(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St"}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "'event' is a required property" in response.get_data(as_text=True)


def test_empty_intersection_string(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "", "event": "accident"}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.NOT_FOUND
    assert "Days list is invalid" in response.get_data(as_text=True)


def test_empty_event_string(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "Main St", "event": ""}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.NOT_FOUND
    assert "Days list is invalid" in response.get_data(as_text=True)

def test_both_empty_string(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": "", "event": ""}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.NOT_FOUND
    assert "Days list is invalid" in response.get_data(as_text=True)  


def test_both_invalid_type(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": 123, "event": 123}
            ]
        ]
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "123 is not of type 'string'" in response.get_data(as_text=True)  


def test_invalid_intersection_type(client, base_url):
    response = client.post(base_url + "/critical-events/", json={
        "days_list": [
            [
                {"intersection": 123, "event": "accident"}  
            ]
        ]
    })
    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert "123 is not of type 'string'" in response.get_data(as_text=True)
