from rest_framework import routers
from .api import ApiViewSet

router = routers.DefaultRouter()
router.register('back/api',ApiViewSet,'api')

urlpatterns = router.urls
