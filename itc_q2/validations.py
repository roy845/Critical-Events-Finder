from typing import List, Tuple, Union


def is_valid_days_list(days_list: Union[List[List[Tuple[str, str]]], None]) -> bool:
    """
    Validates that the days_list is a non-empty list of lists containing tuples with exactly two non-empty strings.

    Parameters:
    days_list (Union[List[List[Tuple[str, str]]], None]): The list to validate.

    Returns:
    bool: True if days_list is valid, False otherwise.
    """
    return bool(days_list and all(
        isinstance(day, list) and
        all(
            isinstance(entry, tuple) and
            len(entry) == 2 and
            # Ensure non-empty strings
            all(isinstance(item, str) and item for item in entry)
            for entry in day
        )
        for day in days_list
    ))
