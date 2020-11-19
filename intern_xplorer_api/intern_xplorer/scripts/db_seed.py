from ..models import User

COMPANIES = ("Facebook", "Amazon", "Apple", "Netflix", "Google", "Microsoft", "Twitter", "Uber", "Aribnb", "Lyft",
             "Major League Hacking", "Mozilla")
def run():
    # create one admin user
    admin = User.objects.create(
        first_name="admin",
        last_name="admin_ln",
        username="admin",
        password="password",
        email="admin@mail.com",
        role="admin"
    )

    # add company creation

