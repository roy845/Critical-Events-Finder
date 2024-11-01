import logging
from flask_app import create_app
import os
from flask import send_from_directory


logger = logging.getLogger(__name__)

if __name__ == '__main__':
    logger.info('Starting the Flask application...')

    app = create_app()

    @app.route('/')
    def index():
        path = os.path.join(os.getcwd(), 'build')
        return send_from_directory(directory=path, path='index.html')

    @app.route('/static/<folder>/<file>')
    def serve_static(folder, file):
        path = os.path.join('build', 'static', folder, file)
        return send_from_directory(directory=os.path.dirname(path), path=os.path.basename(path))

    app.run(host="0.0.0.0", debug=True, port=5001)

    logger.info('Flask application has stopped.')