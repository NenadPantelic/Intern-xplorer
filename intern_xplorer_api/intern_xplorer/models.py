from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils.timezone import now

# TODO: role should be another entity

ROLES = [("ADMIN", "Admin"), ("STUDENT", "Student"), ("RECRUITER", "Recruiter")]


class User(AbstractUser):
    role = models.CharField(blank=False, max_length=10, choices=ROLES, default="STUDENT")
    created_at = models.DateTimeField(default=now, verbose_name='created at'),
    updated_at = models.DateTimeField(default=now, verbose_name='updated at'),
    email = models.EmailField(blank=False, unique=True)

