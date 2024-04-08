import hashlib
import sqlite3

DB_PATH = r"db\produse.db"

def fct_hash_str(string):
    sha256_hash = hashlib.sha256()
    sha256_hash.update(string.encode('utf-8'))
    return sha256_hash.hexdigest()

class Database:
    def __init__(self, db_name = DB_PATH):
        self.db_name = db_name
        
        
    def connect(self):
        self.con = sqlite3.connect(self.db_name)
        self.cur = self.con.cursor()
        
        
    def close(self):
        self.con.close()
        
        
    def fct_verify_user(self, user, pwd):
        self.connect()  # Connect to the databas
        self.cur.execute("SELECT password FROM userinfo WHERE username = ?", (user,))
        res = self.cur.fetchall()
        
        if not res:
            status = 401  # Forbidden, username doesn't exist
        else:
            hashed_pwd = fct_hash_str(pwd)
            if hashed_pwd == res[0][0]:
                status = 200  # Passwords match
            else:
                status = 401
        
        self.close()  # Close the database connection
        return status
        
        
        
if __name__ == "__main__":
    db_name = "your_database_name.db" 
    dbOp = Database(db_name)
    print(dbOp.fct_verify_user("test5", "1"))
