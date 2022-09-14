from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
     path('plans/', PlansAPI.as_view()),
     path('clients/', ClientsAPI.as_view())
]
