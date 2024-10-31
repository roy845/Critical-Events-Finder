from critical_events import find_critical_events
from test_cases import TEST_CASES


def run_find_critical_events():
    """
    Runs the find_critical_events function against a series of predefined test cases.

    For each test case, it:
    - Retrieves the input data and the expected output.
    - Calls find_critical_events with the provided input data.
    - Prints the test case number, input data, expected output, and the result from find_critical_events.
    - Checks if the result matches the expected output (regardless of order) and prints whether the test passed.

    The results of each test case are separated by a line of dashes for readability.
    """
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
