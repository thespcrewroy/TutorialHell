from django.shortcuts import render
from django.http import HttpResponse # allows us to return an HTTP response to the user

# Create your views here.
def index(request): # look inside the request object the user made
    return render(request, "hello/index.html") # return an HTML file called index.html

def brian(request): # look inside the request object the user made
    return HttpResponse("Hello, Brian!") # return an HTTP response that says "Hello, Brian!"

def david(request): # look inside the request object the user made
    return HttpResponse("Hello, David!") # return an HTTP response that says "Hello, David!"

def greet(request, name): # look inside the request object the user made and the name the user provided
    return render(request, "hello/greet.html", {
        "name": name.capitalize() # python dictionary with the key "name" and the value the name the user provided in uppercase
    }) # return an HTML file called greet.html with the name the user provided