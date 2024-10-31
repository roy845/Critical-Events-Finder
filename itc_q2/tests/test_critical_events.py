import pytest
from test_cases import TEST_CASES
from critical_events import find_critical_events

# Define the test cases as inputs and expected outputs
@pytest.mark.parametrize("days_list, expected_output", TEST_CASES)
def test_find_critical_events(days_list, expected_output):
    # Check that the result from find_critical_events matches the expected output
    assert sorted(find_critical_events(days_list)) == sorted(expected_output)
