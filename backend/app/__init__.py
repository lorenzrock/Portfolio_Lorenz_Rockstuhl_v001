from flask import Flask, jsonify

def create_app():
    app = Flask(__name__)


    @app.route("/")
    @app.route("/api")
    def index():
        users = [{'id': 1, 'username': 'Alice'}, {'id': 2, 'username': 'Bob'}]
        return jsonify(users)

    return app