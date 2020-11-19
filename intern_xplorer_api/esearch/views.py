from .serializers import JobPostDocumentSerializer
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    CompoundSearchFilterBackend,
    DefaultOrderingFilterBackend
)

from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_RANGE,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
)

from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from esearch.documents.job_post import JobPostDocument


class JobPostDocumentViewSet(DocumentViewSet):
    document = JobPostDocument
    serializer_class = JobPostDocumentSerializer
    lookup_field = 'id'
    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        CompoundSearchFilterBackend,
    ]
    # # Define search fields
    search_fields = (
        'title',
        'role',
        'job_category',
        'job_type',
        'country',
        'city',
        'company',
        'description'
    )
    # # Define filtering fields
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
        'job_type': 'job_type.raw',
        'job_category': 'job_category.raw',
        'country': 'country.raw',
    }
    # # Define ordering fields
    ordering_fields = {
        'id': 'id',
        'title': 'title',
        'created_at': 'created_at',
    }
    # # Specify default ordering
    ordering = ('id', 'created_at')

