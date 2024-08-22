from django.urls import path
from . import views

app_name = "tasks" # set the app_name variable to "tasks"
urlpatterns = [
    path("", views.index, name="index"), # if the user goes to the /tasks URL, call the index function in the views.py file
    path("add", views.add, name="add") # if the user goes to the /tasks/add URL, call the add function in the views.py file
]