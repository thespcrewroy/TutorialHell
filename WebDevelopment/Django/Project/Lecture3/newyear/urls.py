from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"), # if the user goes to the root URL, call the index function in views.py
]