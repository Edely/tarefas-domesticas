from django.db import models


class Task(models.Model):
    nome = models.CharField(max_length=20)
    descricao = models.TextField()
    responsavel = models.CharField(max_length=20)
    prazo = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    feita = models.BooleanField(default=False)
