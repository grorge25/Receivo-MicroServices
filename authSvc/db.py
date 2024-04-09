import sqlite3

db = r"D:\Programming\Python\Receivo MicroServices\authSvc\db\authSvc.db"

con = sqlite3.connect(db)
cur = con.cursor()
cur.execute("DROP TABLE preturi")
con.commit()