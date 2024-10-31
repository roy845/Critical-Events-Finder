import pytest
from test_cases import TEST_CASES
from critical_events import find_critical_events

# Define the test cases as inputs and expected outputs
@pytest.mark.parametrize("days_list, expected_output", TEST_CASES)
def test_find_critical_events(days_list, expected_output):
    """
    Tests the find_critical_events function using a set of predefined test cases.

    This function uses pytest's parametrize decorator to loop through each test case, where:
    - `days_list` is the input data representing a list of days of lists of tuples with the format ("intersection","event").
    - `expected_output` is the expected result of the critical events that the find_critical_events function found.

    The test verifies that the sorted result of find_critical_events matches the sorted expected output,the sorting functionality is 
    important since there are test cases that the function might produce the correct set of elements (events) but in a different order 
    than the expected_output.
    """
    # Check that the result from find_critical_events matches the expected output
    assert sorted(find_critical_events(days_list)) == sorted(expected_output)
