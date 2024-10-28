from collections import defaultdict
from typing import List, Tuple, Dict, Set


def find_critical_events(days_list: List[List[Tuple[str, str]]]) -> List[str]:
    """
    Finds events that occur in at least two intersections over two or more days.

    Parameters:
    days_list (List[List[Tuple[str, str]]]): A list where each element is a day's list of tuples,
                                              with each tuple containing an intersection (str) and an event (str).

    Returns:
    List[str]: A list of events considered critical, as they appear on multiple days in multiple intersections.
    """
    # Track days each event appears in with at least two intersections
    event_days_count: Dict[str, int] = defaultdict(int)
    critical_events: Set[str] = set()

    for day in days_list:
        # Track intersections seen today for each event using defaultdict(set)
        event_intersections: Dict[str, Set[str]] = defaultdict(set)

        for intersection, event in day:
            event_intersections[event].add(intersection)

        # Process each event based on today's intersections
        for event, intersections in event_intersections.items():
            if len(intersections) >= 2:  # Minimum 2 intersections to consider
                event_days_count[event] += 1  # Count this day for the event

                # Add to critical events if it has appeared on 2+ days in 2+ intersections each day
                if event_days_count[event] >= 2:
                    critical_events.add(event)

    return list(critical_events)


# Test cases
test_cases: List[List[List[Tuple[str, str]]]] = [
    # Case 1: Basic case with two days and enough intersections
    [
        [("intersection1", "event1"), ("intersection2",
                                       "event1"), ("intersection3", "event2")],
        [("intersection1", "event1"), ("intersection2",
                                       "event1"), ("intersection4", "event2")]
    ],  # Expected output: ["event1"]

    # Case 2: An event appears but does not have enough intersections or enough days
    [
        [("intersection1", "event1"), ("intersection3", "event2")],
        [("intersection2", "event1"), ("intersection4", "event3")],
        [("intersection1", "event2"), ("intersection3", "event1")],
        [("intersection2", "event2"), ("intersection3", "event3")]
    ],  # Expected output: []

    # # Case 3: Multiple critical events that meet conditions over multiple days
    [
        [("intersection1", "event1"), ("intersection2",
                                       "event1"), ("intersection3", "event2")],
        [("intersection1", "event1"), ("intersection2",
                                       "event1"), ("intersection3", "event2")],
        [("intersection1", "event1"), ("intersection2",
                                       "event2"), ("intersection3", "event2")]
    ],  # Expected output: ["event1"]

    # Case 4: No critical events because there’s no continuity or sufficient intersections
    [
        [("intersection1", "event1"), ("intersection2", "event2")],
        [("intersection3", "event1"), ("intersection4", "event2")],
        [("intersection5", "event3"), ("intersection6", "event4")]
    ],  # Expected output: []

    # Case 5: Event appears in multiple intersections but only intermittently
    [
        [("intersection1", "event1"), ("intersection2", "event1")],
        [("intersection3", "event1"), ("intersection4", "event1")],
        [("intersection1", "event2"), ("intersection2", "event2")],
        [("intersection3", "event1"), ("intersection4", "event1")]
    ],  # Expected output: ["event1"]

    # Case 6: Event appears on multiple intersections on non-consecutive days
    [
        [("intersection1", "event3"), ("intersection2", "event3")],
        [("intersection1", "event2"), ("intersection2", "event2")],
        [("intersection1", "event3"), ("intersection2", "event3")],
        [("intersection1", "event3"), ("intersection2", "event3")]
    ],  # Expected output: ["event3"]

    # Case 7: Events with a single appearance in multiple intersections, but only once, not consecutive
    [
        [("intersection1", "event4"), ("intersection2", "event4")],
        [("intersection3", "event5"), ("intersection4", "event5")]
    ],  # Expected output: []

    # Case 8: An event starts appearing in two intersections, but only reaches critical status later
    [
        [("intersection1", "event6"), ("intersection2", "event6")],
        [("intersection1", "event6")],
        [("intersection1", "event6"), ("intersection2", "event6")]
    ],  # Expected output: ["event6"]

    # Case 9: Large input case with repeated patterns to test scalability
    [
        [("intersection1", "event1"), ("intersection2", "event1")] * 50,
        [("intersection1", "event1"), ("intersection2", "event1")] * 50,
        [("intersection1", "event1"), ("intersection2", "event1")] * 50
    ],  # Expected output: ["event1"]

    # Case 10: Critical event appears in exactly 2 intersections but switches intersections each day
    [
        [("intersection1", "event7"), ("intersection2", "event7")],
        [("intersection2", "event7"), ("intersection3", "event7")],
        [("intersection3", "event7"), ("intersection4", "event7")]
    ],  # Expected output: ["event7"]

    # Case 11: Event occurs in multiple intersections but drops to one before reaching multiple days
    [
        [("intersection1", "event8"), ("intersection2", "event8")],
        [("intersection1", "event8")],
        [("intersection1", "event8"), ("intersection2", "event8")]
    ],  # Expected output: ["event8"]

    # Case 12: Output multiple critical events
    [
        [("intersection1", f"event{i}"), ("intersection2", f"event{i}")] for i in range(1, 11)
    ] + [
        [("intersection3", f"event{i}"), ("intersection4", f"event{i}")] for i in range(1, 11)
    ],  # Expected output: ["event1", "event2", ..., "event10"]
    [
        # Case 13
        [("intersection1", "event1"), ("intersection2", "event1")],
        [("intersection3", "event1"), ("intersection4", "event1")]
        # Expected Output: ["event1"]
    ],
    [
        # Case 14
        [("intersection1", "event2"), ("intersection2", "event2")],
        [("intersection1", "event2"), ("intersection3", "event2")]
        # Expected Output: ["event2"]
    ],
]

# Run the function on each test case and display results
results = [find_critical_events(tc) for tc in test_cases]
print(results)


# Time complexity analysis:

""" 
Outer Loop (over days_list):
The main loop iterates over each day's list of events, so if there are D days, this loop runs D times.

Inner Loop (over each day's events):
Within each day, it iterates over the events for that day. Suppose each day has an average of E events (intersections, event pairs). 
This inner loop runs E times for each day, making the complexity of the nested loops O(D×E).

Updating event_intersections (using a set):
For each event in a day's list, the code adds intersections to a set associated with each event. The insertion into a set takes
O(1) on average, so processing the events in each day is approximately O(E).

Final Loop (over event_intersections dictionary):
After processing each day, another loop goes through the event_intersections dictionary to count intersections for each event. 
Since each day has at most E events, this loop is O(E) as well.


Overall Complexity
Since the code essentially processes D days with an average of E events per day, the total time complexity is: O(D×E).
If D is the number of days and E is the number of events per day, the complexity is linear in terms of both D and E. 
Thus, the time complexity is O(D×E).

"""
