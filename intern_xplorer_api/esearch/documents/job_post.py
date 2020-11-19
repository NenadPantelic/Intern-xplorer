from django.conf import settings
from django_elasticsearch_dsl import Document, Index, fields
from elasticsearch_dsl import analyzer
from intern_xplorer.models import JobPost

JOB_POST_INDEX = Index('job_post')
JOB_POST_INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)

html_strip = analyzer(
    'html_strip',
    tokenizer="standard",
    filter=["lowercase", "stop", "snowball"],
    char_filter=["html_strip"]
)


@JOB_POST_INDEX.doc_type
class JobPostDocument(Document):
    id = fields.IntegerField(attr='id')

    title = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )

    description = fields.TextField(
        analyzer=html_strip,
        fields={
            'raw': fields.KeywordField(),
        }
    )
    role = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )
    job_category = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )
    job_type = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )
    country = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )
    city = fields.TextField(
        fields={
            'raw': fields.KeywordField(),
        }
    )
    company = fields.TextField(attr="company_name")
    created_at = fields.DateField()

    class Django(object):
        model = JobPost  # The model associate with this Document
