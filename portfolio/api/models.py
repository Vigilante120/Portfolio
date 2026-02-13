from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    instagram = models.CharField(max_length=100, blank=True)
    summary = models.TextField()
    skills_languages = models.TextField(blank=True)
    skills_frameworks = models.TextField(blank=True)
    skills_tools = models.TextField(blank=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='experiences')
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50, default='Present')
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.role} at {self.company}"


class Education(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    year = models.CharField(max_length=50)
    grade = models.CharField(max_length=50, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=500)
    live_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    highlights = models.TextField(blank=True, help_text="Bullet points separated by newlines")
    order = models.IntegerField(default=0)
    is_coming_soon = models.BooleanField(default=False)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
