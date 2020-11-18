# Generated by Django 3.1.3 on 2020-11-17 19:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import intern_xplorer.models


class Migration(migrations.Migration):

    dependencies = [
        ('intern_xplorer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InterviewResource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=intern_xplorer.models.get_upload_location)),
                ('url', models.URLField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]