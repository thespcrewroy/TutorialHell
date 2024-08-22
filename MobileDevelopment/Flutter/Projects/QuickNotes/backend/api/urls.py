from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.getRoutes), # trigger views.getRoutes function when the user goes to the root URL
    path('notes/', views.getNotes), # trigger views.getNotes function when the user goes to the /notes/ URL
    path('notes/create/', views.createNote), # trigger views.createNote function when the user goes to the /notes/create/ URL
    path('notes/<str:pk>/update/', views.updateNote), # trigger views.updateNote func when the user goes to the /notes/uuid/update/ URL
    path('notes/<str:pk>/delete/', views.deleteNote), # trigger views.updateNote func when the user goes to the /notes/uuid/update/ URL
    path('notes/<str:pk>/', views.getNote) # trigger views.getNote when the user enters the notes/uuid URL
]