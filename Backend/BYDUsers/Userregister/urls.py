from django.urls import path
from .views import *

urlpatterns = [
    path("otp",generateotptest),
    path("register", register),
    path("verifyotp", confirmotptest),
    path("login", login),
    path("testdrive", testDriveForm),
]
