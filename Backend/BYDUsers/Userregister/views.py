# Create your views here.
from django.http import JsonResponse
from django.contrib.auth.models import User
from Userregister.models import *
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate
from BYDUsers.settings import SMS_HOST_URL, SMS_AUTH_TOKEN
import datetime
import random
import json
import jwt
import requests
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings


def generateotp(phonenumber, username, first_name):
    try:
        verifyuser = User.objects.get(username=username)
        phone = phonenumber
        storedphone = UserInformation.objects.get(contactno=phone)
        if phone == str(storedphone.contactno):
            print(phone, verifyuser)
            generateotpcode = str(random.randint(100000, 999999))
            storeotp = Otp.objects.create(otp=generateotpcode, user=verifyuser)
            print(storeotp)
            storeotp.save()
            text = f"""Hello {first_name}. Your OTP is: {generateotpcode}. This code will expire in 5 minutes."""
            parameters = {
                "auth_token": SMS_AUTH_TOKEN,
                "text": text,
                "to": phone,
            }
            response = requests.post(url=SMS_HOST_URL, params=parameters)
            print(response)
            return JsonResponse(
                {
                    "message": "OTP has been sent to your registered number",
                    "success": True,
                }
            )

        return JsonResponse(
            {"error": True, "message": "User not verified"},
            status=status.HTTP_406_NOT_ACCEPTABLE,
        )

    except Exception as error:
        print(error)
        return JsonResponse(
            {"error": True, "message": "Server Error"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["POST"])
def otpconfirmation(request):
    try:
        receivedotp = request.data["otp"]
        receivednumber = request.data["contactno"]
        # here it checks if user exists.

        checkuser = UserInformation.objects.filter(contactno=receivednumber).exists()
        if not checkuser:
            return JsonResponse(
                {"success": False, "message": "User Doesnot Exists"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        checkotp = Otp.objects.get(otp=receivedotp)
        if checkotp.isused == True:
            return JsonResponse(
                {"success": False, "message": "Otp already used"},
                status=status.HTTP_403_FORBIDDEN,
            )
        else:
            checkotp.isused = True
            checkotp.save()
            return JsonResponse(
                {"success": True, "message": "Otp Verified"},
                status=status.HTTP_202_ACCEPTED,
            )

        # if not getUserId.exists():
        #     return JsonResponse({"success": False, "message": "User Doesnot Exists"})
        # checkotp = Otp.objects.filter(
        #     otp=receivedotp, user_id=getUserId.first()["user_id"]
        # ).exists()
        # if not checkotp.exists():
        #     return JsonResponse({"success": False, "message": "Invalid OTP"})
        # changeOtp = Otp.objects.get(otp=receivedotp)
        # if changeOtp.isused == True:
        #     return JsonResponse({"success": False, "message": "Otp already used"})
        # else:
        #     changeOtp.isused = True
        #     changeOtp.save()
        # return JsonResponse({"success": True, "message": "OTP Verified"})
    except Exception as error:
        print(error)
        return JsonResponse(
            {"error": True, "message": "Server Error"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["POST"])
def register(request):
    try:
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]
        username = request.data["username"]
        email = request.data["email"]
        password = request.data["password"]
        confirmpassword = request.data["confirm_password"]
        user_location = request.data["location"]
        phone = request.data["phone"]
        if not username or not email or not password or not confirmpassword:
            return JsonResponse(
                {"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST
            )

        if password != confirmpassword:
            return JsonResponse(
                {"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST
            )
        user = User.objects.create_user(username, email, password)
        saveuserinfo = User.objects.get(username=username)
        saveuserinfo.first_name = first_name
        saveuserinfo.last_name = last_name
        saveuserinfo.save()
        saveuseradditionalinfo = UserInformation.objects.create(
            user_id=saveuserinfo.id,
            location=user_location,
            carModel=None,
            contactno=phone,
        )
        saveuseradditionalinfo.save()
        createotp = generateotp(phone, username, first_name)
        if createotp.status_code == 200:
            return JsonResponse(
                {"success": True, "message": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return JsonResponse(
                {"success": False, "message": "Server Error"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["POST"])
def login(request):
    try:
        print(request)
        print(request.data)
        user = authenticate(
            username=request.data.get("username"), password=request.data.get("password")
        )

        if user is not None:
            token = create_jwt_token(user)
            return JsonResponse(
                {"success": True, "token": token}, status=status.HTTP_200_OK
            )
        else:
            return JsonResponse(
                {"success": False, "message": "Invalid Credentials"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
    except Exception as e:
        print(e)
        return JsonResponse(
            {"error": True, "message": "Server Error shit"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


def create_jwt_token(user):
    payload = {
        "user_id": user.id,
        "exp": datetime.datetime.utcnow() + settings.JWT_EXPIRATION_DELTA,
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    return token


def decodeToken(request):
    try:
        token = request.META.get("HTTP_AUTHORIZATION", "").split(" ")[1]
        decoded = jwt.decode(token, settings.SECRET_KEY, settings.JWT_ALGORITHM)
        if decoded:
            user_id = decoded.get("user_id")
            exp = decoded.get("exp")
            return {"userid": user_id, "exp": exp}
        else:
            print("Decoded token doesn't exist")
            return None
    except jwt.ExpiredSignatureError:
        return {"error": True, "message": "Token has expired. Please Relogin"}
    except jwt.InvalidTokenError:
        return {"error": True, "message": "Invalid token"}
    except Exception:
        return {"error": True, "message": "Token Error"}


@api_view(["POST"])
def testDriveForm(request):
    try:
        user = request.data["name"]
        interestedModel = request.data["model"]
        date = request.data["date"]
        time = request.data["time"]
        createTestDrive = TestDriveData.objects.create(
            InterestedTestDriveCar=interestedModel,
            dateOfTestDrive=date,
            timeOfTestDrive=time,
            user=user,
        )
        createTestDrive.save()
        return JsonResponse(
            {"Success": True, "Message": "Data Saved Successfully"},
            status=status.HTTP_201_CREATED,
        )

    except Exception as error:
        print(error)
        return JsonResponse(
            {"success": False, "message": "Server Error"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["POST"])
def generateotptest(request):
    phone = request.data["phone_number"]
    generateotpcode = str(random.randint(100000, 999999))
    storeotp = OtpTest.objects.create(otp=generateotpcode)
    print(storeotp)
    storeotp.save()
    text = f"""Your OTP is: {generateotpcode}. This code will expire in 5 minutes."""
    parameters = {
        "auth_token": SMS_AUTH_TOKEN,
        "text": text,
        "to": phone,
    }
    response = requests.post(url=SMS_HOST_URL, params=parameters)
    return JsonResponse(
        {
            "message": "OTP has been sent to your registered number",
            "success": True,
        }
    )


@api_view(["POST"])
def confirmotptest(request):
    otp = request.data["otp"]
    otpconfirmation = OtpTest.objects.filter(otp=otp, isused=False)
    if otpconfirmation.exists:
        getotpobject = OtpTest.objects.get(otp=otp)
        getotpobject.isused = True
        getotpobject.save()
        return JsonResponse(
            {"success": True, "message": "Otp Verified"}, status=status.HTTP_200_OK
        )
    else:
        return JsonResponse({"success": False, "message": "Invalid Otp"})
