# Generated by Django 3.1.3 on 2020-11-19 08:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('intern_xplorer', '0006_auto_20201118_1311'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPosting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('company_name', models.CharField(max_length=255)),
                ('logo', models.URLField(default=None, null=True)),
                ('how_to_apply', models.CharField(choices=[('Email', 'Email'), ('Company Website', 'Company Website')], max_length=60)),
                ('email', models.EmailField(max_length=254)),
                ('url', models.URLField(null=True)),
                ('city', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('Programming', 'Programming'), ('Design', 'Design'), ('Devops', 'Devops and Sysadmin'), ('Product', 'Product'), ('Business', 'Business, Management and Finance'), ('Sales and Marketing', 'Sales and Marketing')], max_length=255)),
                ('job_type', models.CharField(choices=[('Full time', 'Full time'), ('Part time', 'Part time'), ('Contract', 'Contract'), ('Internship', 'Internship')], max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
