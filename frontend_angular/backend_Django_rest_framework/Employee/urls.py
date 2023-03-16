from django.urls import path,re_path as url
from Employee import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^department/$',views.DepartementApi),
    url(r'^department/([0-9]+)$',views.DepartementApi),
    url(r'^Employee/$',views.EmplyeeApi),
    url(r'^Employee/([0-9]+)$',views.EmplyeeApi),
    url(r'^SaveFile$',views.SaveFile)
] + static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)