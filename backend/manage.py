#!/usr/bin/env python
import os
import sys


if __name__ == '__main__':
    env = os.getenv('DOMESTIC_ENV', 'production')
    if env != 'production' or env == 'local':
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'base.settings.local')
    else:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                              'base.settings.production')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
