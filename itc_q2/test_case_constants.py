# Case 1: Basic case with two days and enough intersections
CASE_1_INPUT = [
    [("intersection1", "event1"), ("intersection2",
                                   "event1"), ("intersection3", "event2")],
    [("intersection1", "event1"), ("intersection2",
                                   "event1"), ("intersection4", "event2")]
]
CASE_1_EXPECTED = ["event1"]

# Case 2: An event appears but does not have enough intersections or enough days
CASE_2_INPUT = [
    [("intersection1", "event1"), ("intersection3", "event2")],
    [("intersection2", "event1"), ("intersection4", "event3")],
    [("intersection1", "event2"), ("intersection3", "event1")],
    [("intersection2", "event2"), ("intersection3", "event3")]
]
CASE_2_EXPECTED = []

# Case 3: Multiple critical events that meet conditions over multiple days
CASE_3_INPUT = [
    [("intersection1", "event1"), ("intersection2",
                                   "event1"), ("intersection3", "event2")],
    [("intersection1", "event1"), ("intersection2",
                                   "event1"), ("intersection3", "event2")],
    [("intersection1", "event1"), ("intersection2",
                                   "event2"), ("intersection3", "event2")]
]
CASE_3_EXPECTED = ["event1"]

# Case 4: No critical events because there’s no continuity or sufficient intersections
CASE_4_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event2")],
    [("intersection3", "event1"), ("intersection4", "event2")],
    [("intersection5", "event3"), ("intersection6", "event4")]
]
CASE_4_EXPECTED = []

# Case 5: Event appears in multiple intersections but only intermittently
CASE_5_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1")],
    [("intersection3", "event1"), ("intersection4", "event1")],
    [("intersection1", "event2"), ("intersection2", "event2")],
    [("intersection3", "event1"), ("intersection4", "event1")]
]
CASE_5_EXPECTED = ["event1"]

# Case 6: Event appears on multiple intersections on non-consecutive days
CASE_6_INPUT = [
    [("intersection1", "event3"), ("intersection2", "event3")],
    [("intersection1", "event2"), ("intersection2", "event2")],
    [("intersection1", "event3"), ("intersection2", "event3")],
    [("intersection1", "event3"), ("intersection2", "event3")]
]
CASE_6_EXPECTED = ["event3"]

# Case 7: Events with a single appearance in multiple intersections, but only once, not consecutive
CASE_7_INPUT = [
    [("intersection1", "event4"), ("intersection2", "event4")],
    [("intersection3", "event5"), ("intersection4", "event5")]
]
CASE_7_EXPECTED = []

# Case 8: An event starts appearing in two intersections, but only reaches critical status later
CASE_8_INPUT = [
    [("intersection1", "event6"), ("intersection2", "event6")],
    [("intersection1", "event6")],
    [("intersection1", "event6"), ("intersection2", "event6")]
]
CASE_8_EXPECTED = ["event6"]

# Case 9: Large input case with repeated patterns to test scalability
CASE_9_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1")] * 50,
    [("intersection1", "event1"), ("intersection2", "event1")] * 50,
    [("intersection1", "event1"), ("intersection2", "event1")] * 50
]
CASE_9_EXPECTED = ["event1"]

# Case 10: Critical event appears in exactly 2 intersections but switches intersections each day
CASE_10_INPUT = [
    [("intersection1", "event7"), ("intersection2", "event7")],
    [("intersection2", "event7"), ("intersection3", "event7")],
    [("intersection3", "event7"), ("intersection4", "event7")]
]
CASE_10_EXPECTED = ["event7"]

# Case 11: Event occurs in multiple intersections but drops to one before reaching multiple days
CASE_11_INPUT = [
    [("intersection1", "event8"), ("intersection2", "event8")],
    [("intersection1", "event8")],
    [("intersection1", "event8"), ("intersection2", "event8")]
]
CASE_11_EXPECTED = ["event8"]

# Case 12: Output multiple critical events
CASE_12_INPUT = [
    [("intersection1", f"event{i}"), ("intersection2", f"event{i}")] for i in range(1, 11)
] + [
    [("intersection3", f"event{i}"), ("intersection4", f"event{i}")] for i in range(1, 11)
]
CASE_12_EXPECTED = [f"event{i}" for i in range(1, 11)]

# Case 13: Basic critical event over two days
CASE_13_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1")],
    [("intersection3", "event1"), ("intersection4", "event1")]
]
CASE_13_EXPECTED = ["event1"]

# Case 14: Another critical event across different intersections
CASE_14_INPUT = [
    [("intersection1", "event2"), ("intersection2", "event2")],
    [("intersection1", "event2"), ("intersection3", "event2")]
]
CASE_14_EXPECTED = ["event2"]

# Invalid test cases ====>

# Case 15: Empty days_list
CASE_15_INPUT = []
CASE_15_EXPECTED = []

# Case 16: Contains empty day list
CASE_16_INPUT = [[]]
CASE_16_EXPECTED = []

# Case 17: Contains empty tuple in a day
CASE_17_INPUT = [[("intersection1", "event1"), ()]]
CASE_17_EXPECTED = []

# Case 18: Contains tuple with only one element
CASE_18_INPUT = [[("intersection1",)]]
CASE_18_EXPECTED = []

# Case 19: Contains tuple with more than two elements
CASE_19_INPUT = [[("intersection1", "event1", "extra")]]
CASE_19_EXPECTED = []

# Case 20: Tuple contains non-string elements
CASE_20_INPUT = [[(1, "event1"), ("intersection2", 2)]]
CASE_20_EXPECTED = []

# Case 21: Contains tuple with empty strings
CASE_21_INPUT = [[("", "event1"), ("intersection1", "")]]
CASE_21_EXPECTED = []

# Case 22: Non-list day structure
CASE_22_INPUT = [("intersection1", "event1")]
CASE_22_EXPECTED = []

# Case 23: days_list is None
CASE_23_INPUT = None
CASE_23_EXPECTED = []

# Case 24: Tuples are filled with None
CASE_24_INPUT = [[(None, None)], [(None, None)], [(None, None)]]
CASE_24_EXPECTED = []

# Case 25: Intersection are filled with None
CASE_25_INPUT = [[(None, "event1"), (None, "event2")], [
    (None, "event3"), (None, "event5")], [(None, "event7"), (None, "event4")]]
CASE_25_EXPECTED = []

# Case 26: Events are filled with None
CASE_26_INPUT = [[("intersection1", None), ("intersection2", None)], [(
    "intersection8", None), ("intersection10", None)], [("intersection7", None), ("intersection4", None)]]
CASE_26_EXPECTED = []

# End of invalid test cases

# Case 27: A case where each day has more than two tuples
CASE_27_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1"),
     ("intersection3", "event2"), ("intersection4", "event3")],
    [("intersection9", "event1"), ("intersection10", "event1"),
     ("intersection3", "event2"), ("intersection5", "event3")],
    [("intersection7", "event1"), ("intersection6", "event1"),
     ("intersection3", "event2"), ("intersection6", "event3")],
]
CASE_27_EXPECTED = ["event1"]

# Case 28:Two critical events
CASE_28_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1"),
     ("intersection3", "event2"), ("intersection4", "event2")],
    [("intersection1", "event1"), ("intersection2", "event1"),
     ("intersection4", "event2"), ("intersection5", "event2")]
]
CASE_28_EXPECTED = ["event1", "event2"]

# Case 29:Three critical events
CASE_29_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1"),
     ("intersection3", "event2"), ("intersection4", "event2"),
     ("intersection4", "event3"), ("intersection15", "event3")],
    [("intersection1", "event1"), ("intersection2", "event1"),
     ("intersection4", "event2"), ("intersection5", "event2"),
     ("intersection4", "event3"), ("intersection15", "event3")]
]
CASE_29_EXPECTED = ["event1", "event2", "event3"]

# Case 30:Four critical events
CASE_30_INPUT = [
    [("intersection1", "event1"), ("intersection2", "event1"), ("intersection19", "event4"), ("intersection21", "event4"), ("intersection15", "event4"),
     ("intersection3", "event2"), ("intersection4", "event2"), ("intersection4", "event3"), ("intersection15", "event3")],
    [("intersection1", "event1"), ("intersection2", "event1"), ("intersection19", "event4"), ("intersection21", "event4"), ("intersection15", "event4"),
     ("intersection4", "event2"), ("intersection5", "event2"), ("intersection4", "event3"), ("intersection15", "event3")],
    [("intersection1", "event1"), ("intersection2", "event1"), ("intersection19", "event4"), ("intersection21", "event4"), ("intersection15", "event4"),
     ("intersection4", "event2"), ("intersection5", "event2"), ("intersection4", "event3"), ("intersection15", "event3")]
]
CASE_30_EXPECTED = ["event1", "event2", "event3", "event4"]

# Case 31: Event only appears across intersections on non-consecutive days
CASE_31_INPUT = [
    [("intersection1", "event9"), ("intersection2", "event9")],
    [("intersection3", "event10"), ("intersection4", "event9")],
    [("intersection1", "event9"), ("intersection2", "event9")]
]
CASE_31_EXPECTED = ["event9"]

# Case 32: Event appears in different intersections each day
CASE_32_INPUT = [
    [("intersection1", "event11"), ("intersection2", "event11")],
    [("intersection3", "event11"), ("intersection4", "event11")],
    [("intersection5", "event11"), ("intersection6", "event11")]
]
CASE_32_EXPECTED = ["event11"]

# Case 33: Event meets criteria but switches between two intersections over days
CASE_33_INPUT = [
    [("intersection1", "event12")],
    [("intersection2", "event12"), ("intersection1", "event12")],
    [("intersection1", "event12")]
]
CASE_33_EXPECTED = []

# Case 34: Non-continuous appearance with gaps in days
CASE_34_INPUT = [
    [("intersection1", "event13"), ("intersection2", "event13")],
    [],
    [("intersection1", "event13"), ("intersection2", "event13")]
]
CASE_34_EXPECTED = ["event13"]

# Case 35: Frequent event across multiple intersections without sufficient days
CASE_35_INPUT = [
    [("intersection1", "event14"), ("intersection2",
                                    "event14"), ("intersection3", "event14")],
    [("intersection4", "event14")]
]
CASE_35_EXPECTED = []

# Case 36: Critical event only on certain intersections
CASE_36_INPUT = [
    [("intersection1", "event15"), ("intersection2", "event15")],
    [("intersection3", "event15"), ("intersection4", "event15")],
    [("intersection1", "event16"), ("intersection2", "event16")]
]
CASE_36_EXPECTED = ["event15"]

# Case 37: Intermittent appearance of multiple events
CASE_37_INPUT = [
    [("intersection1", "event17"), ("intersection2", "event17")],
    [("intersection1", "event17"), ("intersection2", "event18")],
    [("intersection1", "event17"), ("intersection3", "event18")]
]
CASE_37_EXPECTED = []

# Case 38: Event appears in exactly 3 intersections but only over 1 day
CASE_38_INPUT = [
    [("intersection1", "event19"), ("intersection2",
                                    "event19"), ("intersection3", "event19")]
]
CASE_38_EXPECTED = []

# Case 39: Edge case with repeated intersections on the same day
CASE_39_INPUT = [
    [("intersection1", "event20"), ("intersection1",
                                    "event20"), ("intersection1", "event20")],
    [("intersection1", "event20"), ("intersection2", "event20")],
    [("intersection1", "event20")]
]
CASE_39_EXPECTED = []

# Case 40: Events with unique intersections and only partial continuity
CASE_40_INPUT = [
    [("intersection1", "event21"), ("intersection2", "event21")],
    [("intersection3", "event21"), ("intersection4", "event22")]
]
CASE_40_EXPECTED = []

# Case 41: Multiple non-overlapping events without sufficient intersections
CASE_41_INPUT = [
    [("intersection1", "event23"), ("intersection2", "event24")],
    [("intersection1", "event25"), ("intersection2", "event26")]
]
CASE_41_EXPECTED = []

# Case 42: Valid but minimal continuity of events across days
CASE_42_INPUT = [
    [("intersection1", "event27"), ("intersection2", "event27")],
    [("intersection1", "event27")]
]
CASE_42_EXPECTED = []

# Case 43: High intersection count with critical patterns
CASE_43_INPUT = [
    [("intersection1", "event28"), ("intersection2",
                                    "event28"), ("intersection3", "event28")],
    [("intersection1", "event29"), ("intersection2",
                                    "event29"), ("intersection3", "event29")],
    [("intersection101", "event29"), ("intersection42",
                                      "event29"), ("intersection53", "event29")],
    [("intersection4", "event28"), ("intersection5", "event28")]
]
CASE_43_EXPECTED = ["event28", "event29"]

# Case 44: Event only appears once per day across multiple intersections
CASE_44_INPUT = [
    [("intersection1", "event30")],
    [("intersection2", "event30")],
    [("intersection3", "event30")]
]
CASE_44_EXPECTED = []

# Case 45: Event appears on alternate days but maintains continuity in intersections
CASE_45_INPUT = [
    [("intersection1", "event31"), ("intersection2", "event31")],
    [],
    [("intersection1", "event31"), ("intersection2", "event31")]
]
CASE_45_EXPECTED = ["event31"]

# Case 46: Multiple non-critical events with varying appearances
CASE_46_INPUT = [
    [("intersection1", "event32"), ("intersection2", "event33")],
    [("intersection1", "event34"), ("intersection2", "event35")]
]
CASE_46_EXPECTED = []

# Case 47: Rare event with exact continuity requirements
CASE_47_INPUT = [
    [("intersection1", "event36"), ("intersection2", "event36")],
    [("intersection1", "event36"), ("intersection3", "event36")],
    [("intersection1", "event36"), ("intersection4", "event36")]
]
CASE_47_EXPECTED = ["event36"]

# Case 48: High frequency of different events but insufficient overlap
CASE_48_INPUT = [
    [("intersection1", "event37"), ("intersection2",
                                    "event38"), ("intersection3", "event39")],
    [("intersection1", "event37"), ("intersection2",
                                    "event39"), ("intersection3", "event40")],
    [("intersection1", "event37"), ("intersection2", "event38")]
]
CASE_48_EXPECTED = []

# Case 49: Consecutive identical intersections across days for multiple events
CASE_49_INPUT = [
    [("intersection1", "event41"), ("intersection2", "event41")],
    [("intersection1", "event42"), ("intersection2", "event42")],
    [("intersection1", "event41"), ("intersection2", "event41")]
]
CASE_49_EXPECTED = ["event41"]

# Case 50: Sparse appearances of multiple events, only one critical
CASE_50_INPUT = [
    [("intersection1", "event43"), ("intersection2", "event43")],
    [],
    [("intersection1", "event44"), ("intersection2", "event43")],
    [("intersection1", "event43"), ("intersection2", "event43")]
]
CASE_50_EXPECTED = ["event43"]
