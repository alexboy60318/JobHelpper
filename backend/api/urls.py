from rest_framework import routers
from .api import ApiViewSet,MyReadingrecordViewSet

router = routers.DefaultRouter()
router.register('api/admin',ApiViewSet,'api')
router.register('api/note',MyReadingrecordViewSet,'note')

urlpatterns = router.urls
