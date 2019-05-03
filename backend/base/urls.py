from django.contrib import admin
from django.urls import path, include
from api.views import FilterAllView

urlpatterns = [
    path('', FilterAllView, name="all_views"),
    path('', include('api.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]
