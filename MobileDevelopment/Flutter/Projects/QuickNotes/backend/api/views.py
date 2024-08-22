# from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NoteSerializer
from .models import Note

# Create your views here.
@api_view(['GET']) # A user can only GET this RESTful API documentation data
def getRoutes(request): # This function returns the documentation of the API
    routes = [
        {
            'Endpoint': '/notes/', # This is the endpoint
            'method': 'GET', # This is the method
            'body': None, # This is the data that needs to be sent
            'description': 'Notes: Returns an array of notes' # description
        },
        {
            'Endpoint': '/notes/[id#]',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates a new note with the data sent in the post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in the post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing note'
        },
    ]

    return Response(routes) # Returns the documentation of the API

@api_view(['GET']) # A user can only GET the notes from the sqlite3 database
def getNotes(request): # Pass in the uri request
    notes = Note.objects.all() # Get all the notes from the database
    serializer = NoteSerializer(notes, many=True) # specify the serializer and the notes we want to serialize (many notes)
    return Response(serializer.data) # return the serialized data

@api_view(['GET']) # A user can only GET the notes from the sqlite3 database
def getNote(request, pk): # Pass in the uri request and the primary key of the note we want to get
    note = Note.objects.get(id=pk) # Get the note from the database with the passed in primary key
    serializer = NoteSerializer(note, many=False) # specify the serializer and the note we want to serialize (only one note)
    return Response(serializer.data) # return the serialized data

@api_view(['POST']) # A user can only POST data to the sqlite3 database
def createNote(request): # Pass in the uri request
    data = request.data # get the data from the request
    
    note = Note.objects.create(
      body = data['body'] # get the body (note) of the request data and place it in the database
    ) # create a note in the database
    serializer = NoteSerializer(note, many=False) # specify the serializer and the note we want to serialize (only one note)
    return Response(serializer.data) # return the serialized data

@api_view(['PUT']) # A user can only PUT data to the sqlite3 database
def updateNote(request, pk): # Pass in the uri request and the primary key of the note we want to update
    note = Note.objects.get(id=pk) # Get the note from the database with the passed in primary key
    
    serializer = NoteSerializer(instance=note, data=request.data) # specify the serializer and the note we want to serialize (one note)
    if serializer.is_valid(): # if the serializer is valid
        serializer.save() # save the serializer

    return Response(serializer.data) # return the serialized data

@api_view(['DELETE']) # A user can only DELETE data from the sqlite3 database
def deleteNote(request, pk): # Pass in the uri request and the primary key of the note we want to delete
    note = Note.objects.get(id=pk) # Get the note from the database with the passed in primary key
    note.delete() # delete the note from the database
    return Response('Note was deleted') # return a response that the note was deleted