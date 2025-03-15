import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_default_secret_key')
    GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY', 'your_gemini_api_key')
    DEBUG = True  # Set to False in production
