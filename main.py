from fastapi import FastAPI, Request
import psycopg2
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd 

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/")
def get_all(request: Request):
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    cur = conn.cursor()  
    rows = cur.execute("SELECT * FROM chomage")
    rows = cur.fetchall()
    revenus = cur.execute("SELECT * FROM revenu")
    revenus = cur.fetchall()
    dettes = cur.execute("SELECT * FROM dette")
    dettes = cur.fetchall()
    pibs = cur.execute("SELECT * FROM pib")
    pibs = cur.fetchall()
    loisirs = cur.execute("SELECT * FROM loisir")
    loisirs = cur.fetchall()
    return templates.TemplateResponse("index.html", {"request": request, "rows": rows, "revenus": revenus, "dettes": dettes, "pibs": pibs, "loisirs": loisirs})    

@app.get("/graph")
def get_graph():
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    sql = conn.cursor()  
    sql = pd.read_sql_query("SELECT annee, femmes, hommes, total FROM chomage", conn).apply(pd.to_numeric)
    graph = sql.to_dict("records")
    return graph

@app.get("/graph2")
def get_graph2():
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    sql2 = conn.cursor()  
    sql2 = pd.read_sql_query("SELECT annee, revenu_median FROM revenu", conn)
    graph2 = sql2.to_dict("records")
    return graph2

@app.get("/graph3")
def get_graph3():
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    sql3 = conn.cursor()  
    sql3 = pd.read_sql_query("SELECT annee, total FROM dette", conn)
    graph3 = sql3.to_dict("records")
    return graph3

@app.get("/graph4")
def get_graph4():
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    sql4 = conn.cursor()  
    sql4 = pd.read_sql_query("SELECT annee, valeurs FROM pib", conn)
    graph4 = sql4.to_dict("records")
    return graph4

@app.get("/graph5")
def get_graph5():
    host = "localhost" 
    port = "5432"
    dbname = "project"
    user = "camille"
    password = "wn3n87tx"
    conn = psycopg2.connect("host=%s port = %s dbname=%s user=%s password=%s" % (host, port, dbname, user, password))
    sql5 = conn.cursor()  
    sql5 = pd.read_sql_query("SELECT annee, jardinage, sport, divers, camping FROM loisir", conn)
    graph5 = sql5.to_dict("records")
    return graph5