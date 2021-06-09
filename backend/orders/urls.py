from django.urls import path
from .views import addOrderItems, getMyOrders, getOrderById

urlpatterns = [
    path('add/', addOrderItems, name='orders-add'),
    path('myorders/', getMyOrders, name='myorders'),
    path('<str:pk>/', getOrderById, name='user-order'),
]
