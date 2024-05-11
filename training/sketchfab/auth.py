import os

__API_TOKEN = ""

def set_api_token():
    global __API_TOKEN
    __API_TOKEN = os.getenv("API_TOKEN")
    if __API_TOKEN:
        print("Set API Token")
    else:
        print("API_TOKEN environment variable not set.")