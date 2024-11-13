import pytest
from flask_app import create_app

@pytest.fixture
def client():
    """Setup the Flask test client."""
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

@pytest.fixture
def base_url():
    return 'http://localhost:5001/api'