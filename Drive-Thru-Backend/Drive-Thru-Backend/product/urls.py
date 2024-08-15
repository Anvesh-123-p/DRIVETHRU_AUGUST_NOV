from django.urls import path

from .views import UserView, RoundView,DriveView,ApprovalView

urlpatterns = [
    path("api/users/", UserView.as_view()),
    path("api/drives/", DriveView.as_view()),
    path("api/rounds/", RoundView.as_view()),
    path("api/approval/", ApprovalView.as_view()),
]

