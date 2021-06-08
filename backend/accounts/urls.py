from django.urls import path
from .views import MyTokenObtainPairView, registerUser

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', registerUser, name='register'),
]
