from .base import *
import os

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postresql',
        'NAME': os.getenv('DOMESTIC_DB_NAME', ''),
        'USER': os.getenv('DOMESTIC_DB_USER', ''),
        'PASSWORD': os.getenv('DOMESTIC_DB_PASSWORD', ''),
        'HOST': os.getenv('DOMESTIC_DB_HOST', ''),
        'PORT': os.getenv('DOMESTIC_DB_PORT', '')
    }
}

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = []

CORS_ORIGIN_WHITELIST += []
