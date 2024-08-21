from django.shortcuts import render
import datetime

# Create your views here.
def index(request):
    now = datetime.datetime.now() # get the current date and time
    return render(request, "newyear/index.html", {
        "newyear": now.month == 1 and now.day == 1 # python dictionary with the key "newyear" and the value True if it is January 1st
    })
