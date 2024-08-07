from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('todos/', views.todos, name='Todos'),
    # Add more path() calls here for additional views
]
