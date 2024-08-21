from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse

class NewTaskForm(forms.Form): # class NewTaskForm that inherits from forms.Form
    task = forms.CharField(label="New Task") # create a form field that only accepts characters with the label "New Task"

# Create your views here.
def index(request): # index function that takes a request
    if "tasks" not in request.session: # if a list of tasks is not in that user's session
        request.session["tasks"] = [] # give them an empty list of tasks
    
    return render(request, "tasks/index.html", {
        "tasks": request.session["tasks"] # pass in that user's tasks to the index.html file
    }) # render the index.html file in the tasks directory

def add(request):
    if request.method == "POST": # if the request method is POST
        form = NewTaskForm(request.POST) # create a new instance of NewTaskForm with the POST data
        if form.is_valid(): # if the form is valid
            task = form.cleaned_data["task"] # get the task from the form and put it in the task variable
            request.session["tasks"] += [task] # add the task to the user's list of tasks
            return HttpResponseRedirect(reverse("tasks:index")) # redirect the user back to the index page
        else: # if the form is not valid
            return render(request, "tasks/add.html", {
                "form": form 
            }) # return the existing form data so that the user knows about any errors
        
    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    }) # render a new form after the task has been added