from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from .views import JobPostDocumentViewSet
router = DefaultRouter()
books = router.register(r'job-posts',
                        JobPostDocumentViewSet,
                        basename='job-post-search')

urlpatterns = [
    url(r'^', include(router.urls)),
]