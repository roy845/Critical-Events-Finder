from critical_events import find_critical_events
from test_cases import TEST_CASES


def run_find_critical_events():
    # Loop through each test case with an index starting from 1
    for index, (input_data, expected_output) in enumerate(TEST_CASES, start=1):
        # Call the find_critical_events function with the input data
        result = find_critical_events(input_data)
        print(f"Test Case {index}:")
        print(f"Input: {input_data}")
        print(f"Expected Output: {expected_output}")
        print(f"Result: {result}")
        print(f"Pass: {sorted(result) == sorted(expected_output)}")
        print("-" * 30)
