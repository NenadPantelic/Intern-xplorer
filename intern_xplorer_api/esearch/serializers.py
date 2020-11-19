from .documents.job_post import JobPost as JobPostDoc
from rest_framework import serializers


# DocumentSerializer
class JobPostDocumentSerializer(serializers.Serializer):
    class Meta(object):
        document = JobPostDoc
        fields = (
            'id',
            'title',
            'role',
            'job_category',
            'job_type',
            'country',
            'company',
            'logo'
        )

    def to_representation(self, obj):
        return {'id': obj.id,
                'title': obj.title,
                'role': obj.role,
                'description':obj.description,
                'job_category': obj.job_category,
                'job_type': obj.job_type,
                'country': obj.country,
                'city': obj.city,
                'company': obj.company,
                }
