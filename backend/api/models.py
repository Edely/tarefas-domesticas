from django.db import models
from django.conf import settings


class Task(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    deadline = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)
