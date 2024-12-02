from http import HTTPStatus
from datetime import datetime
from flask_restx import Namespace, Resource

# Define a new namespace for health checks
health_api = Namespace('health', description='Health check operations')

@health_api.route('/')
class Health(Resource):
    @health_api.doc(
        responses={
            HTTPStatus.OK: 'Server is healthy and running',
            HTTPStatus.INTERNAL_SERVER_ERROR:'An unexpected error occurred on the server.'
        }
    )
    def get(self):
        """
        Health Check Endpoint

        Returns a JSON response indicating the health status of the server, including the current UTC timestamp.
        """
        return {
            "ok": True,
            "date": datetime.now().isoformat()
        }, HTTPStatus.OK
