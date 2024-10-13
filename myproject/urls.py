from django.contrib import admin
from django.urls import path
from myapp.views import chat, send_message

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', chat, name='chat'),
    path('send_message/', send_message, name='send_message'),
]