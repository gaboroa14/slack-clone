from django.db import models
from django.db.models.deletion import CASCADE

class Plan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    extra_info = models.CharField(max_length=100, blank=True, null=True)
    price = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f'PLAN {self.name} - ${self.price}'

    class Meta:
        verbose_name = "Plan"

class PlanCharacteristic(models.Model):
    description = models.CharField(max_length=200)
    plan = models.ForeignKey(Plan, related_name='characteristics', on_delete=CASCADE)

    def __str__(self):
        return f'CARACTERÍSTICA DE PLAN {self.description} - {self.plan}'

    class Meta:
        verbose_name = "Característica de Plan"

class Client(models.Model):
    title = models.CharField(max_length=200)
    image = models.URLField(max_length=200)
    description = models.TextField(max_length=5000)

    def __str__(self):
        return f'CLIENTE {self.title}'

    class Meta:
        verbose_name = "Cliente"