"""intern_xplorer_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from intern_xplorer import views
from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include
from esearch import urls as search_index_urls


router = DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'job-posts', views.JobPostViewSet)
router.register(r'resources', views.InterviewResourceViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    path('login', views.LoginView.as_view(), name='user_login'),
    path('logout', views.LogoutView.as_view(), name='user_logout'),
    path('resources/<int:id>/file', views.ResourceFileView.as_view(), name="resource-file"),
    url(r'q/', include(search_index_urls)),

]

