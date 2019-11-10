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
    # def get_queryset(self):
    #     return self.request.user.Api.all()
        
    # def perform_create(self,serializer):
    #     serializer.save(owner=self.request.user)
    
class MyReadingrecordViewSet(viewsets.ModelViewSet):
    queryset = MyReadingrecord.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MyReadingrecordSerializer
