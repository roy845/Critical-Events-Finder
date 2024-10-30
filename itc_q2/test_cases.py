from typing import List, Tuple

# Test cases with expected results
test_cases: List[Tuple[List[List[Tuple[str, str]]], List[str]]] = [
    (
        # Case 1: Basic case with two days and enough intersections
        [
            [("intersection1", "event1"), ("intersection2",
                                           "event1"), ("intersection3", "event2")],
            [("intersection1", "event1"), ("intersection2",
                                           "event1"), ("intersection4", "event2")]
        ],  # Expected output
        ["event1"]
    ),
    (
        # Case 2: An event appears but does not have enough intersections or enough days
        [
            [("intersection1", "event1"), ("intersection3", "event2")],
            [("intersection2", "event1"), ("intersection4", "event3")],
            [("intersection1", "event2"), ("intersection3", "event1")],
            [("intersection2", "event2"), ("intersection3", "event3")]
        ],
        []
    ),
    (
        # Case 3: Multiple critical events that meet conditions over multiple days
        [
            [("intersection1", "event1"), ("intersection2",
                                           "event1"), ("intersection3", "event2")],
            [("intersection1", "event1"), ("intersection2",
                                           "event1"), ("intersection3", "event2")],
            [("intersection1", "event1"), ("intersection2",
                                           "event2"), ("intersection3", "event2")]
        ],
        ["event1"]
    ),
    (
        # Case 4: No critical events because there’s no continuity or sufficient intersections
        [
            [("intersection1", "event1"), ("intersection2", "event2")],
            [("intersection3", "event1"), ("intersection4", "event2")],
            [("intersection5", "event3"), ("intersection6", "event4")]
        ],
        []
    ),
    (
        # Case 5: Event appears in multiple intersections but only intermittently
        [
            [("intersection1", "event1"), ("intersection2", "event1")],
            [("intersection3", "event1"), ("intersection4", "event1")],
            [("intersection1", "event2"), ("intersection2", "event2")],
            [("intersection3", "event1"), ("intersection4", "event1")]
        ],
        ["event1"]
    ),
    (
        # Case 6: Event appears on multiple intersections on non-consecutive days
        [
            [("intersection1", "event3"), ("intersection2", "event3")],
            [("intersection1", "event2"), ("intersection2", "event2")],
            [("intersection1", "event3"), ("intersection2", "event3")],
            [("intersection1", "event3"), ("intersection2", "event3")]
        ],
        ["event3"]
    ),
    (
        # Case 7: Events with a single appearance in multiple intersections, but only once, not consecutive
        [
            [("intersection1", "event4"), ("intersection2", "event4")],
            [("intersection3", "event5"), ("intersection4", "event5")]
        ],
        []
    ),
    (
        # Case 8: An event starts appearing in two intersections, but only reaches critical status later
        [
            [("intersection1", "event6"), ("intersection2", "event6")],
            [("intersection1", "event6")],
            [("intersection1", "event6"), ("intersection2", "event6")]
        ],
        ["event6"]
    ),
    (
        # Case 9: Large input case with repeated patterns to test scalability
        [
            [("intersection1", "event1"), ("intersection2", "event1")] * 50,
            [("intersection1", "event1"), ("intersection2", "event1")] * 50,
            [("intersection1", "event1"), ("intersection2", "event1")] * 50
        ],
        ["event1"]
    ),
    (
        # Case 10: Critical event appears in exactly 2 intersections but switches intersections each day
        [
            [("intersection1", "event7"), ("intersection2", "event7")],
            [("intersection2", "event7"), ("intersection3", "event7")],
            [("intersection3", "event7"), ("intersection4", "event7")]
        ],
        ["event7"]
    ),
    (
        # Case 11: Event occurs in multiple intersections but drops to one before reaching multiple days
        [
            [("intersection1", "event8"), ("intersection2", "event8")],
            [("intersection1", "event8")],
            [("intersection1", "event8"), ("intersection2", "event8")]
        ],
        ["event8"]
    ),
    (
        # Case 12: Output multiple critical events
        [
            [("intersection1", f"event{i}"), ("intersection2", f"event{i}")] for i in range(1, 11)
        ] + [
            [("intersection3", f"event{i}"), ("intersection4", f"event{i}")] for i in range(1, 11)
        ],
        [f"event{i}" for i in range(1, 11)]
    ),
    (
        # Case 13: Basic critical event over two days
        [
            [("intersection1", "event1"), ("intersection2", "event1")],
            [("intersection3", "event1"), ("intersection4", "event1")]
        ],
        ["event1"]
    ),
    (
        # Case 14: Another critical event across different intersections
        [
            [("intersection1", "event2"), ("intersection2", "event2")],
            [("intersection1", "event2"), ("intersection3", "event2")]
        ],
        ["event2"]
    ),
    # Invalid cases
    (
        # Case 15: Empty days_list
        [],
        []
    ),
    (
        # Case 16: Contains empty day list
        [
            []
        ],
        []
    ),
    (
        # Case 17: Contains empty tuple in a day
        [
            [("intersection1", "event1"), ()]
        ],
        []
    ),
    (
        # Case 18: Contains tuple with only one element
        [
            [("intersection1",)]
        ],
        []
    ),
    (
        # Case 19: Contains tuple with more than two elements
        [
            [("intersection1", "event1", "extra")]
        ],
        []
    ),
    (
        # Case 20: Tuple contains non-string elements
        [
            [(1, "event1"), ("intersection2", 2)]
        ],
        []
    ),
    (
        # Case 21: Contains tuple with empty strings
        [
            [("", "event1"), ("intersection1", "")]
        ],
        []
    ),
    (
        # Case 22: Non-list day structure
        [
            ("intersection1", "event1")
        ],
        []
    ),
    (
        # Case 23: days_list is None
        None,
        []
    ),
    (
        # Case 24: Tuples are filled with None
        [
            [(None, None)],
            [(None, None)],
            [(None, None)],
        ],
        []
    ),
    (
        # Case 25: Intersection are filled with None
        [
            [(None, "event1"), (None, "event2")],
            [(None, "event3"), (None, "event5")],
            [(None, "event7"), (None, "event4")]
        ],
        []
    ),
    (
        # Case 26: Events are filled with None
        [
            [("intersection1", None), ("intersection2", None)],
            [("intersection8", None), ("intersection10", None)],
            [("intersection7", None), ("intersection4", None)]
        ],
        []
    ),
    (
        # Case 27: A case where each day has more than two tuples
        [
            [("intersection1", "event1"), ("intersection2", "event1"),
             ("intersection3", "event2"), ("intersection4", "event3")],
            [("intersection9", "event1"), ("intersection10", "event1"),
             ("intersection3", "event2"), ("intersection5", "event3")],
            [("intersection7", "event1"), ("intersection6", "event1"),
             ("intersection3", "event2"), ("intersection6", "event3")],
        ],
        # Expected output, as "event1" appears across multiple days and intersections
        ["event1"]
    ),
]
