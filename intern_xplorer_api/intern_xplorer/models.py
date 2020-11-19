from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now

# TODO: role and resource category should be entities
ROLES = [("admin", "Admin"), ("candidate", "Candidate"), ("recruiter", "Recruiter")]
RESOURCE_CATEGORIES = [("Data structures and algorithms", "Data structures and algorithms"),
                       ("Programming languages", "Programming ""languages"),
                       ("System design", "System design"), ("Databases", "Databases"),
                       ("Mobile development", "Mobile development"), ("Computer networks", "Computer networks"),
                       ("Operating systems", "Operating systems"), ("Data science", "Data science"),
                       ("Frontend development", "Frontend development"), ("Backend development", "Backend development"),
                       ("QA", "QA"), ("Other", "Other")]
JOB_CATEGORIES = [("Programming", "Programming"), ("Design", "Design"), ("Devops", "Devops and Sysadmin"),
                  ("Product", "Product"), ("Business", "Business, Management and Finance"),
                  ("Sales and Marketing", "Sales and Marketing")]
JOB_TYPES = [("Full time", "Full time"), ("Part time", "Part time"), ("Contract", "Contract"),
             ("Internship", "Internship")]
APPLY_TYPES = [("Email", 'Email'), ("Company website", "Company website")]


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
    category = models.CharField(blank=False, max_length=30, choices=RESOURCE_CATEGORIES, default="Other")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=now)

    @property
    def has_attached_file(self):
        return bool(self.file)


class Company(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo_url = models.URLField(null=True, default=None)
    website = models.URLField(null=True, default=None)


class JobPost(models.Model):
    title = models.CharField(blank=False, max_length=200, unique=False)
    description = models.TextField()
    how_to_apply = models.CharField(blank=False, max_length=60, choices=APPLY_TYPES)
    email = models.EmailField()
    url = models.URLField(null=True)
    country = models.CharField(max_length=255, default="")
    city = models.CharField(max_length=255, default="")
    role = models.CharField(max_length=255, default="Software Engineer")
    job_category = models.CharField(blank=False, max_length=255, choices=JOB_CATEGORIES)
    job_type = models.CharField(max_length=255, choices=JOB_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=now)
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        null=True)

    class Meta:
        ordering = ["id"]

    @property
    def company_name(self):
        return self.company.name if self.company else None

    @property
    def logo(self):
        return self.company.logo_url if self.company else None
