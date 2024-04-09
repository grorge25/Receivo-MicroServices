from flask import Flask, request, jsonify, session
from flask_cors import CORS
from CRUD import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SESSION_TYPE'] = 'filesystem'
CORS(app)

dbOp = Database(DB_PATH)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    db_response = dbOp.fct_verify_user(username, password)

    if db_response == 200:
        session["user"] = username
        return jsonify({'success': True, 'message': 'Login successful', 'username': username}), 200
    else:
        return jsonify({'success': False, 'message': 'Invalid username or password'}), 401


@app.route('/register', methods = ["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")
    
    db_response = dbOp.mtd_add_user(username, password, email)
    
    if  db_response == 200:
        session["user"] = username
        return jsonify({"status": "User created successfully"}), 200
    else:
        return jsonify({"error":"Username already exists!"}), 503
    
    

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)