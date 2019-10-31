from api.models import Api
from rest_framework import viewsets,permissions
from .serializers import ApiSerializer

#Api ViewSet
class ApiViewSet(viewsets.ModelViewSet):
    queryset = Api.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ApiSerializer
