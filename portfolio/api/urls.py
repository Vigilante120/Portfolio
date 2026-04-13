from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio_overview, name='api-root'),
    path('profile/', views.ProfileDetailView.as_view(), name='profile-list'),
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('overview/', views.portfolio_overview, name='portfolio-overview'),
]
