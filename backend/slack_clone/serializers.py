from rest_framework import serializers
from .models import *

class PlanCharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanCharacteristic
        fields = ['description'],

class PlanSerializer(serializers.ModelSerializer):
    characteristics = serializers.SlugRelatedField(many=True, read_only=True, slug_field='description')

    class Meta:
        model = Plan
        fields = ['name', 'description', 'extra_info', 'price', 'characteristics']
        depth = 1

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['title', 'image', 'description']