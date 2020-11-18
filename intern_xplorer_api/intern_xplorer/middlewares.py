from .auth import *
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .utils import get_url

# TODO add job posts to auth urls
non_auth_urls = ["login", "logout"]
auth_urls = ["resources"]


class AuthMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, *view_args, **view_kargs):
        current_url = get_url(request).split('/')[0]
        if current_url in auth_urls:
            # dummy check at this point
            # TODO: improve auth check
            if request.method in ("POST", "PUT", "PATCH", "DELETE") and not is_admin(request):
                return self._generate_401_unauthenticated()

    def _generate_401_unauthenticated(self, message="You're not authorized to perform this action."):
        return _generate_response(message, status.HTTP_401_UNAUTHORIZED)

    def _generate_403_unauthorized(self, message="You're not authorized to perform this action."):
        return _generate_response(message, status.HTTP_403_FORBIDDEN)


class ExceptionHandlerMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        return _generate_response(exception.__str__(), status.HTTP_400_BAD_REQUEST)


# helper function - could be moved to utils
def _generate_response(message, status):
    response = Response(
        {"message": message},
        content_type="application/json",
        status=status,
    )
    response.accepted_renderer = JSONRenderer()
    response.accepted_media_type = "application/json"
    response.renderer_context = {}
    return response
