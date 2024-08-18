from django.urls import path

from .views import UserView, RoundView,DriveView,ApprovalView,PasswordResetView,StudentOffersAPIView

urlpatterns = [
    path("api/users/", UserView.as_view()),
    path("api/drives/", DriveView.as_view()),
    path("api/rounds/", RoundView.as_view()),
    path("api/approval/", ApprovalView.as_view()),
    path('api/password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('api/student-offers/', StudentOffersAPIView.as_view(), name='student-offers'),
]

