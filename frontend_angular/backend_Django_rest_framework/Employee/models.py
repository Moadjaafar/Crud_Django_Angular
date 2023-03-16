from django.db import models

# Create your models here.
class Departure(models.Model):
    Departement_Id=models.AutoField(primary_key=True)
    Departement_Name=models.CharField(max_length=100)
class Employee(models.Model):
    Employee_Id=models.AutoField(primary_key=True)
    Employee_Name=models.CharField(max_length=100)
    Departement=models.CharField(max_length=100)
    Dataofjoin=models.DateField()
    PhotoFileName=models.CharField(max_length=100)