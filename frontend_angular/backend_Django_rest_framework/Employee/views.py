from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Employee.models import Employee,Departure
from Employee.serializers import DepartureSerializer,EmployeeSerializer
from django.core.files.storage import default_storage
@csrf_exempt
def DepartementApi(request,id=0):
    if request.method=='GET':
        departement=Departure.objects.all()
        departement_serializer=DepartureSerializer(departement,many=True)
        return JsonResponse(departement_serializer.data,safe=False)
    elif request.method=='POST':
        departement_data=JSONParser().parse(request)
        departement_serializer=DepartureSerializer(data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("ADDED SUCCESSFULLY",safe=False)
        return JsonResponse("failed to add",safe=False)
    elif request.method=='PUT':
        departement_data=JSONParser().parse(request)
        departement=Departure.objects.get(Departement_Id=departement_data['Departement_Id'])
        departement_serializer=DepartureSerializer(departement,data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("Updateded successfully",safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif request.method == 'DELETE':
        departement=Departure.objects.get(Departement_Id=id)
        departement.delete()
        return JsonResponse("Deleted successfully",safe=False)
    
@csrf_exempt
def EmplyeeApi(request,id=0):
    if request.method=='GET':
        departement=Employee.objects.all()
        departement_serializer=EmployeeSerializer(departement,many=True)
        return JsonResponse(departement_serializer.data,safe=False)
    elif request.method=='POST':
        departement_data=JSONParser().parse(request)
        departement_serializer=EmployeeSerializer(data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("ADDED SUCCESSFULLY",safe=False)
        return JsonResponse("failed to add",safe=False)
    elif request.method=='PUT':
        departement_data=JSONParser().parse(request)
        departement=Employee.objects.get(Employee_Id=departement_data['Employee_Id'])
        departement_serializer=EmployeeSerializer(departement,data=departement_data)
        if departement_serializer.is_valid():
            departement_serializer.save()
            return JsonResponse("Updateded successfully",safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif request.method == 'DELETE':
        departement=Employee.objects.get(Employee_Id=id)
        departement.delete()
        return JsonResponse("Deleted successfully",safe=False)
    
@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)