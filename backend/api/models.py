from django.db import models
from django.conf import settings


class Task(models.Model):
    nome = models.CharField(max_length=20)
    descricao = models.TextField()
    responsavel = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    prazo = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    feita = models.BooleanField(default=False)
