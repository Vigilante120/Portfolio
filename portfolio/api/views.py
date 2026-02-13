from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Profile, Project
from .serializers import ProfileSerializer, ProjectSerializer


class ProfileDetailView(generics.ListAPIView):
    """Returns the portfolio owner's profile with experience & education."""
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProjectListView(generics.ListAPIView):
    """Returns all projects."""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


@api_view(['GET'])
def portfolio_overview(request):
    """Single endpoint that returns everything for the portfolio."""
    profile = Profile.objects.first()
    projects = Project.objects.all()

    profile_data = ProfileSerializer(profile).data if profile else {}
    projects_data = ProjectSerializer(projects, many=True).data

    return Response({
        'profile': profile_data,
        'projects': projects_data,
    })
