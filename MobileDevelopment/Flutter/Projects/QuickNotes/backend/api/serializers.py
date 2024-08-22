from rest_framework.serializers import ModelSerializer # allows us to convert our model (database) to JSON
from .models import Note

class NoteSerializer(ModelSerializer): # inherits from ModelSerializer
    class Meta:
        model = Note # specify the model we want to serialize
        fields = '__all__' # specify the fields we want to serialize
