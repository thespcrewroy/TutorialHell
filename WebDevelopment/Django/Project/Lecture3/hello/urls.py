from django.urls import path # import the path function from django.urls
from . import views # import views.py from the current directory

# create a list of all the allowable urls that can be accessed by the user
urlpatterns = [
    path("", views.index, name="index"), # if the user goes to the root URL, call the index function in views.py
    path("<str:name>", views.greet, name="greet"), # if the user goes to the /{name} URL, call the greet function in views.py
    path("brian", views.brian, name="brian"), # if the user goes to the /brian URL, call the brian function in views.py
    path("david", views.david, name="david") # if the user goes to the /david URL, call the david function in views.py
]