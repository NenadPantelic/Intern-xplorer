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
JOB_CATEGORIES = [("Programming", "Programming"), ("Design", "Design"), ("Devops", "Devops and Sysadmin"),
                  ("Product", "Product"), ("Business", "Business, Management and Finance"),
                  ("Sales and Marketing", "Sales and Marketing")]
JOB_TYPES = [("Full time", "Full time"), ("Part time", "Part time"), ("Contract", "Contract"), ("Internship", "Internship")]
APPLY_TYPES = [("Email", 'Email'), ("Company Website", "Company Website")]


def get_upload_location(instance, filename):
    timestamp = ''.join(filter(str.isalnum, str(now())))
    filename, extension = filename.split('.')
    return f"{filename}_{timestamp}.{extension}"


class User(AbstractUser):
    role = models.CharField(blank=False, max_length=10, choices=ROLES, default="student")
    created_at = models.DateTimeField(default=now, verbose_name="created at"),
    updated_at = models.DateTimeField(default=now, verbose_name="updated at"),
    email = models.EmailField(blank=False, unique=True)

    def __str__(self):
        return 'User #{}'.format(self.id)


class InterviewResource(models.Model):
    file = models.FileField(null=True, default=None, upload_to=get_upload_location)
    url = models.URLField(null=True, default=None)
    category = models.CharField(blank=False, max_length=21, choices=RESOURCE_CATEGORIES, default="Other")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=now)

    @property
    def has_attached_file(self):
        return bool(self.file)

class Company(models.Model):
    name = models.CharField(max_length=255)
    logo_url = models.URLField(null=True, default=None)
    website = models.URLField(null=True, default=None)

class JobPosting(models.Model):
    title = models.CharField(blank=False, max_length=200)
    description = models.TextField()
    company_name = models.CharField(max_length=255)
    logo_url = models.URLField(null=True, default=None)
    how_to_apply = models.CharField(blank=False, max_length=60, choices=APPLY_TYPES)
    email = models.EmailField()
    url = models.URLField(null=True)
    city = models.CharField(max_length=255)
    category = models.CharField(blank=False, max_length=255, choices=JOB_CATEGORIES)
    job_type = models.CharField(max_length=255, choices=JOB_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=now)
    company = models.OneToOneField(
        Company,
        on_delete=models.CASCADE,
        null=True
    )