from flask import Flask
import logging
from flask_restx import Api
from routes.critical_events import critical_events_api as critical_events_namespace
from routes.health import health_api as health_namespace
from flask_cors import CORS

logger = logging.getLogger(__name__)

def create_app():
    logger.info("Initializing Flask app.....")

    app = Flask(__name__,static_folder='build', static_url_path='')

    api = Api(app, version='1.0', prefix='/api', title='Flask Critical Events Finder API', description='A simple Flask Critical Events Finder API', doc='/api/docs/')
    
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    logger.info('Flask application initialized.')

    logger.info('Adding namespaces to the API...')
    api.add_namespace(health_namespace, path='/health')
    api.add_namespace(critical_events_namespace, path='/critical-events')
    logger.info('Namespaces added to the API.')

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5001)