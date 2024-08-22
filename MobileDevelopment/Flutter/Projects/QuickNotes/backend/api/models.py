from django.db import models

'''
username: thespcrewroy
email: swapnilroy@gmail.com
passsword: spcartoon@14
'''

# Create your models here.
class Note(models.Model): # inherits from models.Model
    body = models.TextField() # allows us an unlimited amount of characters in the note body
    updated = models.DateTimeField(auto_now=True) # take a timestamp when we update our note note (database)
    created = models.DateTimeField(auto_now_add=True) # take a timestamp when we create our database

    def __str__(self): # if we want to print an attribute from the database
        return self.body[0:50] # only return the first 50 characters of the note body
    
    class Meta:
        ordering = ['-updated'] # the latest updated item will always be at the top of any query set when we query the database