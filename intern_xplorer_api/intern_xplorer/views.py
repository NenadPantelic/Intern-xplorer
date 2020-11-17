from rest_framework.response import Response
from intern_xplorer.serializers import *
from intern_xplorer.models import *
from rest_framework.views import APIView
from .serializers import LoginSerializer
from django.contrib.auth import login as django_login, logout as django_logout
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .utils import logging_exception


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user_data = serializer.validated_data
            user = User.objects.get(email=user_data["email"], password=user_data["password"])
            role = user.role
            username = user.username
            django_login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "role": role, "username": username}, status=200)
        except User.DoesNotExist:
            return Response({"message": "Invalid credentials - wrong username or email"}, status=404)


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        try:
            token = request.META.get('HTTP_TOKEN')
            django_logout(request)
            # NOTE: better for multiple session status
            Token.objects.get(key = token).delete()
            return Response({"status": True}, status=204)
        except Exception as e:
            logging_exception(e)
            return Response({"status": False}, status=400)
