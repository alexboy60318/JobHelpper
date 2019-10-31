from api.models import Api,MyReadingrecord
from rest_framework import viewsets,permissions
from .serializers import ApiSerializer,MyReadingrecordSerializer

#Api ViewSet
class ApiViewSet(viewsets.ModelViewSet):
    queryset = Api.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ApiSerializer
class MyReadingrecordViewSet(viewsets.ModelViewSet):
    queryset = MyReadingrecord.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MyReadingrecordSerializer
