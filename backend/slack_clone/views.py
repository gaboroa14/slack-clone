from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

class PlansAPI(APIView):
    def get(self, request):
        plans = Plan.objects.all()
        return Response(PlanSerializer(plans, many=True).data, status.HTTP_200_OK)

class ClientsAPI(APIView):
    def get(self, request):
        clients = Client.objects.all()
        return Response(ClientSerializer(clients, many=True).data, status.HTTP_200_OK)