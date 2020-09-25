from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def products(request):
    return render(request,"products.html")

def contact(request):
    return render(request,"contact.html")

def signup(request):
    return render(request,"signup.html")