"""lecture3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', include('hello.urls')), # if the user goes to the /hello URL, include the urls.py file in the hello directory
    path('tasks/', include('tasks.urls')), # if the user goes to the /tasks URL, include the urls.py file in the tasks directory
    path('newyear/', include('newyear.urls')), # if the user goes to the /newyear URL, include the urls.py file in the newyear director
]
