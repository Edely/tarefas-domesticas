from rest_framework import serializers
from api.models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Task
        fields = ('name', 'description', 'owner',
                  'deadline', 'created', 'done')


class TasksSerializer(serializers.HyperlinkedModelSerializer):
    pass


class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Task.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'tasks')
