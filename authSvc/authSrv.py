from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST', "OPTIONS"])
def login():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        response = jsonify({'success': True})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
    # Get the username and password from the request body
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Perform authentication (replace this with your actual authentication logic)
    if username == 'admin' and password == 'admin':
        print(data)
        # Return a success message and user information
        return jsonify({'success': True, 'message': 'Login successful', 'username': username}), 200
    else:
        # Return an error message if authentication fails
        return jsonify({'success': False, 'message': 'Invalid username or password'}), 401


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)