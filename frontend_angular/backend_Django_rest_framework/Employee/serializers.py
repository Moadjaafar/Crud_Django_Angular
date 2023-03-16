from rest_framework import serializers
from Employee.models import Employee, Departure

class DepartureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departure
        fields=('Departement_Id','Departement_Name')
        
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields=('Employee_Id','Employee_Name','Departement','Dataofjoin','PhotoFileName')