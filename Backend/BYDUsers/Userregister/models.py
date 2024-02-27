from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Otp(models.Model):
    otp = models.CharField(max_length=6)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    generateTIme = models.TimeField(auto_now_add=True)
    isused = models.BooleanField(default=False, null=True)


class UserInformation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    carModel = models.CharField(max_length=50, null=True)
    contactno = models.BigIntegerField()

    def __str__(self):
        return self.user_id.first_name


class TestDriveData(models.Model):
    user = models.CharField(max_length=200)
    InterestedTestDriveCar = models.CharField(max_length=200)
    dateOfTestDrive = models.DateField()
    timeOfTestDrive = models.TimeField()
    phonenumber = models.BigIntegerField()

    def __str__(self):
        return self.user


class OtpTest(models.Model):
    otp = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=10, default="111111111")
    isused = models.BooleanField(default=False)
