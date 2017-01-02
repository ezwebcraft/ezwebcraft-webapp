#!/bin/python

from flask import Flask


app = Flask(__name__)


@app.route('/')

def index():
    return "Hello ezwebcraft"


app.run(debug=True, port=8000, host='0.0.0.0')
