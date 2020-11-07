from django.shortcuts import render

def home(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def portfolio(request):
    return render(request,"portfolio.html")

def blog(request):
    return render(request,"blog.html")

def blogPost(request):
    return render(request,"blog-post.html")

def contact(request):
    return render(request,"contact.html")
