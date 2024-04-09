import hashlib
import sqlite3

DB_PATH = r"D:\Programming\Python\Receivo MicroServices\authSvc\db\authSvc.db"

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
        
    # verify if the credentials are correct
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
    
    
    # Add the user to the DB if the credetials are valid
    def mtd_add_user(self, user, pwd, email):
        self.connect()
        self.cur.execute("SELECT  * FROM userinfo WHERE username = ?", (user, ))  
        result_username = self.cur.fetchone()
        
        self.cur.execute("SELECT  * FROM userinfo WHERE email = ?", (email, ))  
        result_email = self.cur.fetchone()
        
        if result_username is None and result_email is None:
            query = "INSERT INTO userinfo (username, password, email) VALUES(?, ?, ?)"
            params = (user, fct_hash_str(pwd), email, )
            self.cur.execute(query, params)
            self.con.commit()
            status = 200 # Succes
        else:
            status = 503 # Conflict
        
        self.close()
        return status
        
        
        
        
if __name__ == "__main__":
    dbOp = Database()
    print(dbOp.fct_verify_user("test5", "1"))
    dbOp.mtd_add_user("test6", "1", "a@a")
