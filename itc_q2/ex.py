from critical_events import find_critical_events

# Define days_list as input
days_list = [
    [("intersection1", "event1"), ("intersection2", "event1")],
    [("intersection1", "event1"), ("intersection3", "event1")],
]

# Call the function
critical_events = find_critical_events(days_list)

# Display the result
print("Critical Events:", critical_events)
