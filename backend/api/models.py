from django.db import models
from django.contrib.auth.models import User

class Api(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100,unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)
    owner = models.ForeignKey(User, related_name="api",on_delete=models.CASCADE, null=True)
class MyReadingrecord(models.Model):
    owner = models.ForeignKey(User, related_name="notes",on_delete=models.CASCADE, null=True)
    note1 = models.TextField()
    created_note_at = models.DateTimeField(auto_now_add = True)
    


