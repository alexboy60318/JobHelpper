from rest_framework import serializers
from api.models import Api,MyReadingrecord

class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Api
        fields = '__all__'
##class K                       

class MyReadingrecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyReadingrecord
        fields = '__all__'