from django.contrib import admin
from django.urls import path
from main import views

urlpatterns = [
    path('',views.index,name="index"),
    path('index.html',views.index,name="index"),
    path('about.html',views.about,name="about"),
    path('products.html',views.products,name="products"),
    path('contact.html',views.contact,name="contact"),
    path('signup.html',views.signup,name="signup"),
]