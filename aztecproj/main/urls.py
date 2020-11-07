from django.urls import path
from main.views import *
urlpatterns = [
    path('',ReactView.as_view(template_name='Home.jsx')),
    path('about',ReactView.as_view(template_name="About.jsx"))
]