# Generated by Django 2.1.7 on 2019-03-07 12:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190226_0833'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='prazo',
            new_name='deadline',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='descricao',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='feita',
            new_name='done',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='nome',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='responsavel',
            new_name='owner',
        ),
    ]
