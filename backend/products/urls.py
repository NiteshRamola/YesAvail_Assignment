from django.urls import path
from .views import getProducts, getProduct

urlpatterns = [
    path('', getProducts, name='products'),
    path('<str:pk>/', getProduct, name='product'),
]