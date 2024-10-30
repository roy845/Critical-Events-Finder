from critical_events import find_critical_events
from test_cases import TEST_CASES


def run_tests():
    # Loop through each test case with an index starting from 1
    for i, (input_data, expected_output) in enumerate(TEST_CASES, start=1):
        # Call the find_critical_events function with the input data
        result = find_critical_events(input_data)
        # Assert that the sorted result matches the sorted expected output
        # If the assertion fails, it provides a detailed failure message
        assert sorted(result) == sorted(expected_output), f"Test case {
            i} failed: expected {sorted(expected_output)}, got {sorted(result)}"
        # If the test passes, print a success message
        print(f"Test case {i} passed.")
