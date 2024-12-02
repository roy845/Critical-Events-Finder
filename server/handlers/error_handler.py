from functools import wraps
from flask_restx import abort
from http import HTTPStatus
from werkzeug.exceptions import NotFound,BadRequest


def handle_error(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except BadRequest as e:
            abort(HTTPStatus.BAD_REQUEST, str(e))
        except NotFound as e:
            abort(HTTPStatus.NOT_FOUND, str(e))
        except Exception as e:
            abort(HTTPStatus.INTERNAL_SERVER_ERROR, f"An unexpected error occurred: {str(e)}")
    return wrapper
