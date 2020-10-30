from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=40)
    company = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    phone = models.CharField(max_length=20)
    message = models.TextField(default='default')

    def __str__(self):
        return "{} - {}".format(self.name, self.company)
