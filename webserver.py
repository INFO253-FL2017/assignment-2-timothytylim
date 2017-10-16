"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, redirect, url_for,request
from os import environ
import json
import requests
# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/index')
def to_index():
	return render_template('index.html')

@app.route('/about')
def to_about():
	return render_template('about.html')

@app.route('/contact')
def to_contact():
	return render_template('contact.html')

@app.route('/blog/<article>')
def render_article(article=None):
	return render_template(article + '.html')
