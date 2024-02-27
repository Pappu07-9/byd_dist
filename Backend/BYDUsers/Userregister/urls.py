from django.urls import path
from .views import *

urlpatterns = [
    path("", generateotp),
    path("register", register),
    path("verifyotp", otpconfirmation),
    path("login", login),
    path("testdrive", testDriveForm),
]
