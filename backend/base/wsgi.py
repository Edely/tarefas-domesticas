"""
WSGI config for base project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
env = os.getenv('DOMESTIC_ENV', 'production')

if env != 'production' or env == 'local':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'base.settings.local')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                          'base.settings.production')

application = get_wsgi_application()
