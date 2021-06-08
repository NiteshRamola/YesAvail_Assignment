from django.urls import path
from .views import getProducts

urlpatterns = [
    path('', getProducts, name='products'),
]