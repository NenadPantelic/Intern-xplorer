from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now

# TODO: role and resource category should be entities
ROLES = [("admin", "Admin"), ("candidate", "Candidate"), ("recruiter", "Recruiter")]
RESOURCE_CATEGORIES = [("Data structures", "Data structures and algorithms"),
                       ("Programming languages", "Programming ""languages"),
                       ("System design", "System design"), ("Databases", "Databases"),
                       ("Mobile development", "Mobile development"), ("Computer networks", "Computer networks"),
                       ("Operating systems", "Operating systems"), ("Data science", "Data science"),
                       ("Frontend development", "Frontend development"), ("Backend development", "Backend development"),
                       ("QA", "QA"), ("Other", "Other")]


def get_upload_location(instance, filename):
    timestamp = ''.join(filter(str.isalnum, str(now())))
    filename, extension = filename.split('.')
    return f"{filename}_{timestamp}.{extension}"


class User(AbstractUser):
    role = models.CharField(blank=False, max_length=10, choices=ROLES, default="student")
    created_at = models.DateTimeField(default=now, verbose_name="created at"),
    updated_at = models.DateTimeField(default=now, verbose_name="updated at"),
    email = models.EmailField(blank=False, unique=True)


class InterviewResource(models.Model):
    file = models.FileField(null=True, default=None, upload_to=get_upload_location)
    url = models.URLField(null=True, default=None)
    category = models.CharField(blank=False, max_length=21, choices=RESOURCE_CATEGORIES, default="Other")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=now)

    @property
    def has_attached_file(self):
        return bool(self.file)
