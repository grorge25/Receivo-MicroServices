from dotenv import load_dotenv
from pymongo import MongoClient

import hashlib
import sqlite3
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_DB_URL")
cluster = MongoClient(MONGO_URL) 
db_auth = cluster["authSvc"]
collection_auth = db_auth["test"]

db_productSvc = cluster["productSvc"]
collectionOganizations = db_productSvc["organizations"]




def fct_hash_str(string):
    sha256_hash = hashlib.sha256()
    sha256_hash.update(string.encode('utf-8'))
    return sha256_hash.hexdigest()



class Database:
    def __init__(self, db_name = collection_auth):
        self.db_name = db_name
    
    def fct_verify_user(self, user, pwd):   # verify if the credentials are correct
        res = self.db_name.find_one( {"username": user} )
        if not res:
            status = 401  # Forbidden, username doesn't exist
        else:
            hashed_pwd = fct_hash_str(pwd)
            if hashed_pwd == res ["password"]:
                status = 200  # Passwords match
            else:
                status = 401
        try:
            return res["hadInitialized"], status
        except KeyError:
            return status
    
    
    def mtd_add_user(self, user, pwd, email): # Add the user to the DB if the credetials are valid
        result_username = self.db_name.find_one({"username" : user})
 
        result_email = self.db_name.find_one({"email" : email})
        if result_username is None and result_email is None:
            pwd = fct_hash_str(pwd)
            
            collectionOganizations.insert_one({
                "organization" : user,
                "owner" : user,
                "members" : ""
            })
            
            self.db_name.insert_one({
                "username" : user,
                "password" : pwd,
                "email" : email,
                "ownerShip" : "owner",
                "hadInitialized" : "false" # this indicates if the user  had already initialized his account or not
            })
            status = 200 # Succes
        else:
            status = 503 # Conflict
        
        return status
        
        
        
        
if __name__ == "__main__":
    dbOp = Database()
    print(dbOp.fct_verify_user("test6", "1"))
    # dbOp.mtd_add_user("test6", "1", "a@a")
