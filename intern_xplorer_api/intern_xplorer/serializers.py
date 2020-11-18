from intern_xplorer.models import User, InterviewResource
from rest_framework import serializers
from rest_framework import exceptions
from .utils import get_file_extension


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()


class InterviewResourceSerializer(serializers.ModelSerializer):
    file = serializers.FileField(required=False)
    url = serializers.URLField(required=False)

    class Meta:
        model = InterviewResource
        exclude = ('created_at', 'updated_at')

    def create(self, validated_data):
        if validated_data.get('file', None) is None and validated_data.get('url', None) is None:
            raise exceptions.ValidationError("At least one of the resources must be provided")
        if validated_data.get('file', None) and get_file_extension(str(validated_data['file'])) != "pdf":
            raise exceptions.ValidationError("At this moment only pdf files are supported")
        return InterviewResource.objects.create(**validated_data)

    def to_representation(self, instance):
        return {
            "id":instance.id,
            "url": instance.url,
            "category":instance.category
        }


