from django.db import models
from django.conf import settings


class Task(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="tasks"
    )
    deadline = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return '{} - {}'.format(self.name, self.owner)
