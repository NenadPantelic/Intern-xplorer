from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from intern_xplorer.serializers import *
from intern_xplorer.models import *
from .utils import logging_exception
from .serializers import LoginSerializer
from django.contrib.auth import login as django_login, logout as django_logout
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.conf import settings


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
            return Response({"message": "Invalid credentials - wrong username or email"}, status=401)


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        try:
            token = request.META.get('HTTP_TOKEN')
            django_logout(request)
            Token.objects.get(key=token).delete()
            return Response({"status": True}, status=204)
        except Exception as e:
            logging_exception(e)
            return Response({"status": False}, status=400)


class SignupView(APIView):
    # TODO: user signup is skipped at this point, should be implemented
    pass


class InterviewResourceViewSet(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    queryset = InterviewResource.objects.all()
    serializer_class = InterviewResourceSerializer
    authentication_classes = (TokenAuthentication,)
    lookup_field = 'id'

    # TODO: when the interview resource is deleted, file should also be deleted


class ResourceFileView(APIView):
    authentication_classes = (TokenAuthentication,)

    def get(self, request, id):
        resource_file = get_object_or_404(InterviewResource.objects, id=id)
        try:
            data = open(f'{settings.MEDIA_ROOT}/{str(resource_file.file)}', "rb")
        # TODO: too broad exception, adapt it
        except Exception as e:
            logging_exception(e)
            response = HttpResponse(content={"error": "File could not be loaded. Some error happened."},
                                    content_type='application/json')
            response.status_code = 404
            return response

        response = HttpResponse(content=data, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename={resource_file.file}'
        data.close()
        return response


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    http_method_names = ['get']


class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    authentication_classes = (TokenAuthentication,)
    lookup_field = 'id'
