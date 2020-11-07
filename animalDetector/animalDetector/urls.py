from django.contrib import admin
from django.urls import url,include

urlpatterns = [
    url('admin/', admin.site.urls),
    url('imageupload/',include('imageUpload.url')),

]
