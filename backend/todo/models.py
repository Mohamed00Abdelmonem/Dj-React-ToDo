from django.db import models
from django.utils import timezone
# Create your models here.


STATUS_CHOICES = (
    ('DONE', 'DONE'),
    ('INPROGRESS', 'INPROGRESS'),
)

class Todo(models.Model):
    title = models.CharField(max_length=50)
    status = models.CharField(max_length=40, choices= STATUS_CHOICES)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.title
