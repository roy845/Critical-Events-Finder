from collections import defaultdict
from typing import List, Tuple, Dict, Set


def update_event_intersections(day: List[Tuple[str, str]]) -> Dict[str, Set[str]]:
    """
    Creates a dictionary tracking the intersections each event appears in for a given day.

    Parameters:
    day (List[Tuple[str, str]]): A list of tuples, where each tuple contains an intersection and an event.

    Returns:
    Dict[str, Set[str]]: A dictionary where keys are events and values are sets of intersections where the event appears.
    """
    event_intersections: Dict[str, Set[str]] = defaultdict(set)
    for intersection, event in day:
        event_intersections[event].add(intersection)
    return event_intersections


def update_event_days_count(event_intersections: Dict[str, Set[str]], event_days_count: Dict[str, int], critical_events: Set[str]):
    """
    Updates the count of days each event appears in multiple intersections, adding events to critical list if they
    appear on two or more days in multiple intersections.

    Parameters:
    event_intersections (Dict[str, Set[str]]): A dictionary where each event maps to a set of intersections.
    event_days_count (Dict[str, int]): A dictionary to track the number of days each event appears in multiple intersections.
    critical_events (Set[str]): A set to collect events that meet the critical threshold.
    """
    for event, intersections in event_intersections.items():
        if len(intersections) >= 2:  # Minimum 2 intersections to consider
            event_days_count[event] += 1  # Count this day for the event

            # Add to critical events if it has appeared on 2+ days in 2+ intersections each day
            if event_days_count[event] >= 2:
                critical_events.add(event)


def find_critical_events(days_list: List[List[Tuple[str, str]]]) -> List[str]:
    """
    Finds events that occur in at least two intersections over two or more days.

    Parameters:
    days_list (List[List[Tuple[str, str]]]): A list where each element is a day's list of tuples,
                                              with each tuple containing an intersection and an event.

    Returns:
    List[str]: A list of events considered critical, as they appear on multiple days in multiple intersections.
    """
    # Track days each event appears in with at least two intersections
    event_days_count: Dict[str, int] = defaultdict(int)
    critical_events: Set[str] = set()

    for day in days_list:
        # Get intersections seen today for each event
        event_intersections = update_event_intersections(day)

        # Update count and check for critical events
        update_event_days_count(event_intersections, event_days_count, critical_events)

    return list(critical_events)


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
