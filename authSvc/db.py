from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

MONGO_URL = os.getenv("MONGO_DB_URL")
cluster = MongoClient(MONGO_URL) 
db = cluster["authSvc"]
collection = db["test"]

print(collection.find_one( {"name":"aurel"} ))
# collection.insert_one({
#     "name" : "aurel",
#     "users_allowed" : ['1', '2', '3']
# })