from api.models import Task
from rest_framework import permissions, viewsets
from api.serializers import TaskSerializer, UserSerializer, TasksSerializer
from django.contrib.auth.models import User
from django.shortcuts import render, redirect


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TasksViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TasksSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def FilterAllView(request):
    if request.content_type != 'application/json':
        template_name = 'api/index.html'
        return render(request, template_name)
    return redirect('/api')
