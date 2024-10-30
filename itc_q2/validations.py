from typing import List, Tuple, Union


def is_valid_days_list(days_list: Union[List[List[Tuple[str, str]]], None]) -> bool:
    """
    Validates that the days_list is a non-empty list of lists containing tuples with exactly two non-empty strings.

    Parameters:
    days_list (Union[List[List[Tuple[str, str]]], None]): The list to validate.

    Returns:
    bool: True if days_list is valid, False otherwise.
    """
    # Check if days_list is a non-empty list
    if not days_list:
        return False

    # Validate each day's entries
    for day in days_list:
        # Each day should be a list
        if not isinstance(day, list):
            return False

        # Validate each entry in the day
        for entry in day:
            # Each entry should be a tuple with exactly two non-empty strings
            if not (isinstance(entry, tuple) and len(entry) == 2):
                return False

            # Ensure each item in the tuple is a non-empty string
            if not all(isinstance(item, str) and item for item in entry):
                return False

    # If all checks pass, return True
    return True
