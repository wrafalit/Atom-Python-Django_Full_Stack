from django.urls import path
from first_app import views

urlpatterns = [
    path('',views.first, name='first '),
]