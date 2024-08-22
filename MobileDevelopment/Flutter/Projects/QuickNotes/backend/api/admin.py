from django.contrib import admin
from .models import Note # import the Note class from the models.py file

# Register your models here.
admin.site.register(Note) # Show the Note database table in the admin panel