from rest_framework.authtoken.models import Token


def token_active(token):
    if not token:
        return False
    try:
        Token.objects.get(key=token)
        return True
    except Token.DoesNotExist:
        return False


def is_admin(request=None):
    token = request.META.get('HTTP_TOKEN')
    try:
        return Token.objects.get(key=token).user.role == 'ADMIN'
    except Token.DoesNotExist:
        return False


# utility
def current_user(request):
    try:
        token = request.META.get('HTTP_TOKEN')
        return Token.object.get(key=token).user
    except Token.DoesNotExist:
        return None
