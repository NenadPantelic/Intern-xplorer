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
