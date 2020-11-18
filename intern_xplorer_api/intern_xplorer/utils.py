from django.utils import timezone


# NOTE: for dev environment only - refactor to logger
def logging(*args):
    prefix = "[" + str(timezone.now()) + "]"

    print_string = prefix
    for arg in args:
        print_string += " " + str(arg)

    print(print_string)


def logging_exception(e):
    logging("Got a", e.__class__.__name__ + ":", e)


# URL parsing
def get_url(request):
    return '/'.join([url_part if len(url_part) else '' for url_part in request.build_absolute_uri().split('/')[3:]])


# file utils
def get_file_extension(file):
    return file.split('.')[-1]


