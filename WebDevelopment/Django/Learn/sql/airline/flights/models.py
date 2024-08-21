from django.db import models

# Create your models here.
class Airport(models.Model):
    code = models.CharField(max_length=3) # 3 character code
    city = models.CharField(max_length=64) # 64 character city name

    def __str__(self): # call this __str__ method
        return f"{self.city} ({self.code})" # return a string representation of the sqlite3 object
    
class Flight(models.Model):
    origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures") # foreign key to Airport model
    destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals") # foreign key to Airport model
    duration = models.IntegerField()

    def __str__(self): # call this __str__ method
        return f"{self.id}: {self.origin} to {self.destination}" # return a string representation of the sqlite3 object