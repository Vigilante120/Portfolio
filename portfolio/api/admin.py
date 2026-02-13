from django.contrib import admin
from .models import Profile, Experience, Education, Project


class ExperienceInline(admin.TabularInline):
    model = Experience
    extra = 0


class EducationInline(admin.TabularInline):
    model = Education
    extra = 0


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    inlines = [ExperienceInline, EducationInline]
    list_display = ['name', 'title', 'email']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'tech_stack', 'is_coming_soon', 'order']
    list_editable = ['order', 'is_coming_soon']
