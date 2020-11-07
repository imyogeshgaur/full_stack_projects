from django.urls import path
from . import views

urlpatterns = [
     path('',views.home,name="home"),
     path('index',views.home,name="home"),
     path('about',views.about,name="about"),
     path('portfolio',views.portfolio,name="portfolio"),
     path('blog',views.blog,name="blog"),
     path('blog-post',views.blogPost,name="blogPost"),
     path('contact',views.contact,name="contact"),
]