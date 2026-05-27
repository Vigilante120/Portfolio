from django.core.management.base import BaseCommand
from api.models import Profile, Experience, Education, Project


class Command(BaseCommand):
    help = 'Seed the database with Nishant portfolio data'

    def handle(self, *args, **options):
        # Clear existing data
        Profile.objects.all().delete()
        Project.objects.all().delete()

        # Create Profile
        profile = Profile.objects.create(
            name="Nishant Bhandari",
            title="Software Engineer",
            email="bhandarinishant32@gmail.com",
            # phone="+916239689030",
            github="https://github.com/Vigilante120",
            linkedin="https://linkedin.com/in/nishant-bhandari",
            instagram="nishantintech",
            summary=(
                "Software Engineer with hands on experience in full-stack development "
                "and automated data extraction. Proficient in architecting robust backends "
                "with Python, Django, and FastAPI, while implementing modern AI solutions "
                "to solve real world problems. A proactive problem solver with a track record "
                "of deploying end to end projects, from web scraping systems to spiritual "
                "and client-focused web platforms."
            ),
            skills_languages="Python, React, HTML, CSS, JavaScript, SQL",
            skills_frameworks="Django, Flask, Bootstrap, FastAPI",
            skills_tools="Git, GitHub, VS Code, Linux, Docker",
        )

        # Experience
        Experience.objects.create(
            profile=profile,
            company="Vanna Softleo AI",
            role="Software Engineer (Full-Time)",
            start_date="August 2025",
            end_date="Present",
            description=(
                "Engineered a conversational IVR system using Deepgram for real-time speech-to-text "
                "and Twilio for programmable voice, automating customer outreach.\n"
                "Optimized a critical data generation script — slashing execution time from 15s to 0.01s "
                "(99.9% improvement).\n"
                "Developed a high-throughput Amazon web scraper processing 2,000+ products per minute.\n"
                "Implemented CI/CD pipelines using Azure DevOps for automated deployment to IoT devices."
            ),
            order=1,
        )

        # Education
        Education.objects.create(
            profile=profile,
            institution="Panjab University, Chandigarh",
            degree="Post Graduate Diploma in Computer Applications (PGDCA)",
            year="2024-2025",
            grade="80%",
            order=1,
        )
        Education.objects.create(
            profile=profile,
            institution="Panjab University, Chandigarh",
            degree="Bachelor of Information Technology (BA-IT)",
            year="2020-2023",
            grade="80%",
            order=2,
        )

        # Projects
        Project.objects.create(
            title="E-Naam Jaap – Spiritual Companion Web App",
            description=(
                "A full-featured spiritual companion web app with mala counting, chalisa reader, "
                "verse bookmarks, analytics dashboard, and Google OAuth authentication. "
                "Built with Django, Tailwind CSS, JavaScript, and PostgreSQL."
            ),
            tech_stack="Django, Tailwind CSS, JavaScript, PostgreSQL, Vercel",
            live_url="https://naam-jap-mu.vercel.app/",
            github_url="https://github.com/Vigilante120/naam_jap",
            highlights=(
                "Django backend with mala counts, chalisa reading progress, and verse bookmarks\n"
                "Interactive chalisa reader with verse highlighting, auto-scroll, dark mode\n"
                "Google OAuth via Django Allauth for secure authentication\n"
                "Spiritual analytics dashboard with calendar-style activity visualization\n"
                "Deployed to Vercel with proper static files handling"
            ),
            order=1,
        )

        Project.objects.create(
            title="The Cosmic Aura",
            description=(
                "A client-focused web platform delivering a cosmic, spiritual digital experience. "
                "Beautifully designed with modern UI/UX principles."
            ),
            tech_stack="Web Development, Modern UI/UX",
            live_url="https://thecosmicaura.in/",
            highlights=(
                "Client-focused spiritual web platform\n"
                "Modern cosmic-themed design and UI/UX\n"
                "Fully responsive and production-ready"
            ),
            order=2,
        )

        Project.objects.create(
            title="AI Helpdesk – Support Automation Platform",
            description=(
                "Enterprise grade AI powered helpdesk system with automated ticket triage, "
                "classification, and response generation. Full-stack application with "
                "React 18, Node.js/Express, MongoDB, Redis, and Python FastAPI microservices."
            ),
            tech_stack="React 18, Node.js, Express, MongoDB, Redis, FastAPI, OpenAI API",
            github_url="https://github.com/Vigilante120/ai-helpdesk",
            highlights=(
                "Automated ticket triage and classification with 85%+ confidence scoring\n"
                "Full-stack: React 18, Node.js/Express, MongoDB, Redis, FastAPI\n"
                "OpenAI API integration for response generation and knowledge base retrieval\n"
                "Microservices architecture for scalability"
            ),
            order=3,
        )

        Project.objects.create(
            title="More Projects Coming Soon...",
            description="Exciting new projects are in the works. Stay tuned!",
            tech_stack="TBD",
            is_coming_soon=True,
            order=99,
        )

        self.stdout.write(self.style.SUCCESS('Portfolio data seeded successfully!'))
