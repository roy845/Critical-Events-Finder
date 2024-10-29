from critical_events import find_critical_events
from test_cases import test_cases

def run_tests():
    for i, (input_data, expected_output) in enumerate(test_cases, start=1):
        result = find_critical_events(input_data)
        assert sorted(result) == sorted(expected_output), f"Test case {i} failed: expected {sorted(expected_output)}, got {sorted(result)}"
        print(f"Test case {i} passed.")