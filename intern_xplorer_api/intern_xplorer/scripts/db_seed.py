from ..models import User, Company

COMPANIES = ("Facebook", "Amazon", "Apple", "Netflix", "Google", "Microsoft", "Twitter", "Uber", "Aribnb", "Lyft",
             "Major League Hacking", "Mozilla")
def run():
    # create one admin user - run only once
    admin = User.objects.create(
        first_name="admin",
        last_name="admin_ln",
        username="admin",
        password="password",
        email="admin@mail.com",
        role="admin"
    )
    Company.objects.all().delete()
    # add company creation; TODO: add urls
    for company in COMPANIES:
        Company.objects.create(name=company, logo_url="", website="")

