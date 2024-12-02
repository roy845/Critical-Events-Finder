from flask import request
from http import HTTPStatus
from flask_restx import Namespace, Resource, fields
from handlers.error_handler import handle_error
from validations.validations import Validations
from services.CriticalEventsService import CriticalEventsService
from werkzeug.exceptions import NotFound

critical_events_api = Namespace('critical-events', description='Critical events operations')

# Define API models for input and output validation
day_event_model = critical_events_api.model('DayEvent', {
    'intersection': fields.String(required=True, description="Intersection identifier, such as a street name or location."),
    'event': fields.String(required=True, description="Event identifier, e.g., a specific event name or code."),
})

days_list_model = critical_events_api.model('DaysList', {
    'days_list': fields.List(
        fields.List(fields.Nested(day_event_model)),
        required=True,
        description="A list of days, where each day contains a list of events and intersections."
    )
})

critical_events_model = critical_events_api.model('CriticalEvents', {
    'critical_events': fields.List(
        fields.String,
        description="List of events that are considered critical, as they appear in multiple intersections over multiple days."
    )
})


# Define the API Resource
@critical_events_api.route('/')
class CriticalEventsResource(Resource):
    @critical_events_api.expect(days_list_model, validate=True)
    @critical_events_api.marshal_with(critical_events_model)
    @critical_events_api.response(HTTPStatus.BAD_REQUEST, 'Invalid data provided. Check for missing or extra fields.')
    @critical_events_api.response(HTTPStatus.NOT_FOUND, 'No critical events found based on the provided input.')
    @critical_events_api.response(HTTPStatus.INTERNAL_SERVER_ERROR, 'An unexpected error occurred on the server.')
    @handle_error
    def post(self):
        """
        Identify critical events.

        This endpoint takes a list of days, with each day containing a list of events and intersections.
        It returns a list of events that are considered critical (appear in multiple intersections over multiple days).
        """
        data = request.json
         
        # Validate extra fields
        Validations.validate_request_fields(data, {'days_list'})
                
        # Transform the input to the required format
        days_list = CriticalEventsService.transform_input(data['days_list'])

        # Use the CriticalEventsService to find critical events
        critical_events, status_code, message = CriticalEventsService.find_critical_events(days_list)
            
        if status_code == HTTPStatus.NOT_FOUND:
            raise NotFound(description=message)
            
        return {'critical_events': critical_events, 'status_code': status_code, "message": message}
