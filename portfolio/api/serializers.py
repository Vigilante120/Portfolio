from rest_framework import serializers
from .models import Profile, Experience, Education, Project


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True, read_only=True)
    education = EducationSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    highlights_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_highlights_list(self, obj):
        if obj.highlights:
            return [h.strip() for h in obj.highlights.split('\n') if h.strip()]
        return []
