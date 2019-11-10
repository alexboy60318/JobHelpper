from rest_framework import routers
from django.urls import path, include
# from knox import views as knox_views
from .api import ApiViewSet,MyReadingrecordViewSet

router = routers.DefaultRouter()
router.register('api/admin',ApiViewSet,'admin')
router.register('api/note',MyReadingrecordViewSet,'note')

urlpatterns = router.urls
