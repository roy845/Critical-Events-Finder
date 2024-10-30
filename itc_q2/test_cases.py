from typing import List, Tuple
from test_case_constants import CASE_10_EXPECTED, CASE_10_INPUT, CASE_11_EXPECTED, CASE_11_INPUT, CASE_12_EXPECTED, CASE_12_INPUT, CASE_13_EXPECTED, CASE_13_INPUT, CASE_14_EXPECTED, CASE_14_INPUT, CASE_15_EXPECTED, CASE_15_INPUT, CASE_16_EXPECTED, CASE_16_INPUT, CASE_17_EXPECTED, CASE_17_INPUT, CASE_18_EXPECTED, CASE_18_INPUT, CASE_19_EXPECTED, CASE_19_INPUT, CASE_1_INPUT, CASE_1_EXPECTED, CASE_20_EXPECTED, CASE_20_INPUT, CASE_21_EXPECTED, CASE_21_INPUT, CASE_22_EXPECTED, CASE_22_INPUT, CASE_23_EXPECTED, CASE_23_INPUT, CASE_24_EXPECTED, CASE_24_INPUT, CASE_25_EXPECTED, CASE_25_INPUT, CASE_26_EXPECTED, CASE_26_INPUT, CASE_27_EXPECTED, CASE_27_INPUT, CASE_28_EXPECTED, CASE_28_INPUT, CASE_29_EXPECTED, CASE_29_INPUT, CASE_2_INPUT, CASE_2_EXPECTED, CASE_30_EXPECTED, CASE_30_INPUT, CASE_31_EXPECTED, CASE_31_INPUT, CASE_32_EXPECTED, CASE_32_INPUT, CASE_33_EXPECTED, CASE_33_INPUT, CASE_34_EXPECTED, CASE_34_INPUT, CASE_35_EXPECTED, CASE_35_INPUT, CASE_36_EXPECTED, CASE_36_INPUT, CASE_37_EXPECTED, CASE_37_INPUT, CASE_38_EXPECTED, CASE_38_INPUT, CASE_39_EXPECTED, CASE_39_INPUT, CASE_3_INPUT, CASE_3_EXPECTED, CASE_40_EXPECTED, CASE_40_INPUT, CASE_41_EXPECTED, CASE_41_INPUT, CASE_42_EXPECTED, CASE_42_INPUT, CASE_43_EXPECTED, CASE_43_INPUT, CASE_44_EXPECTED, CASE_44_INPUT, CASE_45_EXPECTED, CASE_45_INPUT, CASE_46_EXPECTED, CASE_46_INPUT, CASE_47_EXPECTED, CASE_47_INPUT, CASE_48_EXPECTED, CASE_48_INPUT, CASE_49_EXPECTED, CASE_49_INPUT, CASE_4_INPUT, CASE_4_EXPECTED, CASE_50_EXPECTED, CASE_50_INPUT, CASE_5_INPUT, CASE_5_EXPECTED, CASE_6_INPUT, CASE_6_EXPECTED, CASE_7_EXPECTED, CASE_7_INPUT, CASE_8_EXPECTED, CASE_8_INPUT, CASE_9_EXPECTED, CASE_9_INPUT


# Test cases with expected results
TEST_CASES: List[Tuple[List[List[Tuple[str, str]]], List[str]]] = [
    # Case 1: Basic case with two days and enough intersections
    (CASE_1_INPUT, CASE_1_EXPECTED),
    # Case 2: An event appears but does not have enough intersections or enough days
    (CASE_2_INPUT, CASE_2_EXPECTED),
    # Case 3: Multiple critical events that meet conditions over multiple days
    (CASE_3_INPUT, CASE_3_EXPECTED),
    # Case 4: No critical events because there’s no continuity or sufficient intersections
    (CASE_4_INPUT, CASE_4_EXPECTED),
    # Case 5: Event appears in multiple intersections but only intermittently
    (CASE_5_INPUT, CASE_5_EXPECTED),
    # Case 6: Event appears on multiple intersections on non-consecutive days
    (CASE_6_INPUT, CASE_6_EXPECTED),
    # Case 7: Events with a single appearance in multiple intersections, but only once, not consecutive
    (CASE_7_INPUT, CASE_7_EXPECTED),
    # Case 8: An event starts appearing in two intersections, but only reaches critical status later
    (CASE_8_INPUT, CASE_8_EXPECTED),
    # Case 9: Large input case with repeated patterns to test scalability
    (CASE_9_INPUT, CASE_9_EXPECTED),
    # Case 10: Critical event appears in exactly 2 intersections but switches intersections each day
    (CASE_10_INPUT, CASE_10_EXPECTED),
    # Case 11: Event occurs in multiple intersections but drops to one before reaching multiple days
    (CASE_11_INPUT, CASE_11_EXPECTED),
    # Case 12: Output multiple critical events
    (CASE_12_INPUT, CASE_12_EXPECTED),
    # Case 13: Basic critical event over two days
    (CASE_13_INPUT, CASE_13_EXPECTED),
    # Case 14: Another critical event across different intersections
    (CASE_14_INPUT, CASE_14_EXPECTED),

    # Invalid test cases ====>

    # Case 15: Empty days_list
    (CASE_15_INPUT, CASE_15_EXPECTED),
    # Case 16: Contains empty day list
    (CASE_16_INPUT, CASE_16_EXPECTED),
    # Case 17: Contains empty tuple in a day
    (CASE_17_INPUT, CASE_17_EXPECTED),
    # Case 18: Contains tuple with only one element
    (CASE_18_INPUT, CASE_18_EXPECTED),
    # Case 19: Contains tuple with more than two elements
    (CASE_19_INPUT, CASE_19_EXPECTED),
    # Case 20: Tuple contains non-string elements
    (CASE_20_INPUT, CASE_20_EXPECTED),
    # Case 21: Contains tuple with empty strings
    (CASE_21_INPUT, CASE_21_EXPECTED),
    # Case 22: Non-list day structure
    (CASE_22_INPUT, CASE_22_EXPECTED),
    # Case 23: days_list is None
    (CASE_23_INPUT, CASE_23_EXPECTED),
    # Case 24: Tuples are filled with None
    (CASE_24_INPUT, CASE_24_EXPECTED),
    # Case 25: Intersection are filled with None
    (CASE_25_INPUT, CASE_25_EXPECTED),
    # Case 26: Events are filled with None
    (CASE_26_INPUT, CASE_26_EXPECTED),

    # End of invalid test cases

    # Case 27: A case where each day has more than two tuples
    (CASE_27_INPUT, CASE_27_EXPECTED),
    # Case 28:Two critical events
    (CASE_28_INPUT, CASE_28_EXPECTED),
    # Case 29:Three critical events
    (CASE_29_INPUT, CASE_29_EXPECTED),
    # Case 30:Four critical events
    (CASE_30_INPUT, CASE_30_EXPECTED),
    # Case 31: Event only appears across intersections on non-consecutive days
    (CASE_31_INPUT, CASE_31_EXPECTED),
    # Case 32: Event appears in different intersections each day
    (CASE_32_INPUT, CASE_32_EXPECTED),
    # Case 33: Event meets criteria but switches between two intersections over days
    (CASE_33_INPUT, CASE_33_EXPECTED),
    # Case 34: Non-continuous appearance with gaps in days
    (CASE_34_INPUT, CASE_34_EXPECTED),
    # Case 35: Frequent event across multiple intersections without sufficient days
    (CASE_35_INPUT, CASE_35_EXPECTED),
    # Case 36: Critical event only on certain intersections
    (CASE_36_INPUT, CASE_36_EXPECTED),
    # Case 37: Intermittent appearance of multiple events
    (CASE_37_INPUT, CASE_37_EXPECTED),
    # Case 38: Event appears in exactly 3 intersections but only over 1 day
    (CASE_38_INPUT, CASE_38_EXPECTED),
    # Case 39: Edge case with repeated intersections on the same day
    (CASE_39_INPUT, CASE_39_EXPECTED),
    # Case 40: Events with unique intersections and only partial continuity
    (CASE_40_INPUT, CASE_40_EXPECTED),
    # Case 41: Multiple non-overlapping events without sufficient intersections
    (CASE_41_INPUT, CASE_41_EXPECTED),
    # Case 42: Valid but minimal continuity of events across days
    (CASE_42_INPUT, CASE_42_EXPECTED),
    # Case 43: High intersection count with critical patterns
    (CASE_43_INPUT, CASE_43_EXPECTED),
    # Case 44: Event only appears once per day across multiple intersections
    (CASE_44_INPUT, CASE_44_EXPECTED),
    # Case 45: Event appears on alternate days but maintains continuity in intersections
    (CASE_45_INPUT, CASE_45_EXPECTED),
    # Case 46: Multiple non-critical events with varying appearances
    (CASE_46_INPUT, CASE_46_EXPECTED),
    # Case 47: Rare event with exact continuity requirements
    (CASE_47_INPUT, CASE_47_EXPECTED),
    # Case 48: High frequency of different events but insufficient overlap
    (CASE_48_INPUT, CASE_48_EXPECTED),
    # Case 49: Consecutive identical intersections across days for multiple events
    (CASE_49_INPUT, CASE_49_EXPECTED),
    # Case 50: Sparse appearances of multiple events, only one critical
    (CASE_50_INPUT, CASE_50_EXPECTED),
]
