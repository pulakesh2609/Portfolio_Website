import React, { useState, useEffect } from 'react';
import {
    Menu, X, Github, Linkedin, Mail, ExternalLink,
    Code2, Terminal, User, Briefcase, MessageSquare,
    ChevronDown, Star
} from 'lucide-react';

// ============================================
// DATA STRUCTURE - Edit this to customize
// ============================================
const personalDetails = {
    name: "Pulakesh Deb Roy",
    title: "Full Stack Developer | Problem Solver",
    tagline: "Building elegant solutions to complex problems",
    bio: "Passionate software engineer with 5+ years of experience in building scalable web applications. I love turning ideas into reality through clean, efficient code. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
    email: "pulakesh2609@gmail.com",
    social: {
        github: "https://github.com/pulakesh2609",
        linkedin: "https://www.linkedin.com/in/pulakesh-deb-roy-7b058a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        leetcode: "https://leetcode.com/u/Pulakesh2609"
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Male&backgroundColor=1e293b"
};

const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS"],
    tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis", "Figma"]
};

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        liveDemo: "https://demo-ecommerce.example.com",
        github: "https://github.com/johndoe/ecommerce-platform"
    },
    {
        id: 2,
        title: "AI Task Manager",
        description: "Smart task management app with AI-powered suggestions, priority detection, and natural language processing.",
        techStack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
        liveDemo: "https://ai-tasks.example.com",
        github: "https://github.com/johndoe/ai-task-manager"
    },
    {
        id: 3,
        title: "Real-Time Analytics Dashboard",
        description: "Analytics platform featuring live data visualization, custom metrics, and exportable reports.",
        techStack: ["React", "D3.js", "WebSocket", "Redis"],
        liveDemo: "https://analytics-dash.example.com",
        github: "https://github.com/johndoe/analytics-dashboard"
    },
    {
        id: 4,
        title: "Social Media Aggregator",
        description: "Unified platform to manage multiple social media accounts with scheduled posting and analytics.",
        techStack: ["Vue.js", "Python", "Django", "PostgreSQL"],
        liveDemo: "https://social-hub.example.com",
        github: "https://github.com/johndoe/social-aggregator"
    },
    {
        id: 5,
        title: "Code Snippet Library",
        description: "Developer tool for storing, organizing, and sharing code snippets with syntax highlighting and search.",
        techStack: ["React", "Firebase", "Tailwind", "Prism.js"],
        liveDemo: "https://codesnips.example.com",
        github: "https://github.com/johndoe/code-snippets"
    },
    {
        id: 6,
        title: "Fitness Tracker App",
        description: "Mobile-responsive fitness tracking application with workout logging, progress charts, and goal setting.",
        techStack: ["React Native", "Node.js", "MongoDB", "Chart.js"],
        liveDemo: "https://fitness-track.example.com",
        github: "https://github.com/johndoe/fitness-tracker"
    }
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Smooth scroll handler
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Navbar */}
            <Navbar
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Hero Section */}
            <HeroSection scrollToSection={scrollToSection} />

            {/* About Section */}
            <AboutSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Contact Footer */}
            <ContactFooter />
        </div>
    );
}

// ============================================
// NAVBAR COMPONENT
// ============================================
function Navbar({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) {
    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        &lt;PDR /&gt;
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`transition-all duration-300 hover:scale-105 ${activeSection === link.id
                                    ? 'text-emerald-400'
                                    : 'text-slate-300 hover:text-emerald-400'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${activeSection === link.id
                                    ? 'bg-emerald-900/30 text-emerald-400'
                                    : 'text-slate-300 hover:bg-slate-800'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
function HeroSection({ scrollToSection }) {
    const [typedText, setTypedText] = useState('');
    const fullText = personalDetails.title;

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let loopTimeout;

        const type = () => {
            if (!isDeleting && currentIndex <= fullText.length) {
                // Typing forward
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
                loopTimeout = setTimeout(type, 100);
            } else if (!isDeleting && currentIndex > fullText.length) {
                // Pause at end before deleting
                isDeleting = true;
                loopTimeout = setTimeout(type, 2000);
            } else if (isDeleting && currentIndex > 0) {
                // Deleting backward
                currentIndex--;
                setTypedText(fullText.slice(0, currentIndex));
                loopTimeout = setTimeout(type, 50);
            } else if (isDeleting && currentIndex === 0) {
                // Pause at beginning before typing again
                isDeleting = false;
                loopTimeout = setTimeout(type, 500);
            }
        };

        type();

        return () => clearTimeout(loopTimeout);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    {personalDetails.name}
                </h1>

                {/* Typing Effect */}
                <div className="h-16 mb-4">
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light">
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>

                {/* Tagline */}
                <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                    {personalDetails.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center items-center">
                    <a
                        href={personalDetails.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={28} />
                    </a>
                    <a
                        href={personalDetails.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href={personalDetails.social.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="LeetCode"
                    >
                        <Terminal size={28} />
                    </a>
                    <a
                        href={`mailto:${personalDetails.email}`}
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail size={28} />
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-slate-500" />
                </div>
            </div>
        </section>
    );
}

// ============================================
// ABOUT SECTION COMPONENT
// ============================================
function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Avatar */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <img
                                src={personalDetails.avatar}
                                alt={personalDetails.name}
                                className="relative w-64 h-64 rounded-full border-4 border-slate-900 object-cover"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <User className="text-emerald-400" size={28} />
                            <h3 className="text-2xl font-semibold text-slate-200">Who I Am</h3>
                        </div>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            {personalDetails.bio}
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                                <span className="text-emerald-400 font-semibold">5+</span>
                                <span className="text-slate-400 ml-2">Years Experience</span>
                            </div>
                            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                                <span className="text-emerald-400 font-semibold">50+</span>
                                <span className="text-slate-400 ml-2">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// SKILLS SECTION COMPONENT
// ============================================
function SkillsSection() {
    const skillCategories = [
        { name: 'Languages', icon: Code2, items: skills.languages, color: 'emerald' },
        { name: 'Frameworks', icon: Briefcase, items: skills.frameworks, color: 'cyan' },
        { name: 'Tools', icon: Terminal, items: skills.tools, color: 'blue' }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.name}
                                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Icon className={`text-${category.color}-400`} size={24} />
                                    <h3 className="text-2xl font-semibold text-slate-200">
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1.5 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-${category.color}-500 hover:text-${category.color}-400 transition-colors cursor-default`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ============================================
// PROJECTS SECTION COMPONENT
// ============================================
function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// PROJECT CARD COMPONENT
// ============================================
function ProjectCard({ project }) {
    return (
        <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2">
            {/* Card Header */}
            <div className="p-6 border-b border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>
                    <Star className="text-slate-600 group-hover:text-yellow-400 transition-colors" size={20} />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Tech Stack */}
            <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-slate-800 text-emerald-400 rounded-md text-xs font-medium border border-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-700 rounded-lg text-sm font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                        aria-label="GitHub Repository"
                    >
                        <Github size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}

// ============================================
// CONTACT FOOTER COMPONENT
// ============================================
function ContactFooter() {
    const [typedText, setTypedText] = useState('');
    const fullText = "Let's Connect";

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let loopTimeout;

        const type = () => {
            if (!isDeleting && currentIndex <= fullText.length) {
                // Typing forward
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
                loopTimeout = setTimeout(type, 100);
            } else if (!isDeleting && currentIndex > fullText.length) {
                // Pause at end before deleting
                isDeleting = true;
                loopTimeout = setTimeout(type, 2000);
            } else if (isDeleting && currentIndex > 0) {
                // Deleting backward
                currentIndex--;
                setTypedText(fullText.slice(0, currentIndex));
                loopTimeout = setTimeout(type, 50);
            } else if (isDeleting && currentIndex === 0) {
                // Pause at beginning before typing again
                isDeleting = false;
                loopTimeout = setTimeout(type, 500);
            }
        };

        type();

        return () => clearTimeout(loopTimeout);
    }, []);

    return (
        <footer id="contact" className="py-16 px-4 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>

                {/* Email */}
                <a
                    href={`mailto:${personalDetails.email}`}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 mb-8"
                >
                    <Mail size={20} />
                    {personalDetails.email}
                </a>

                {/* Social Links */}
                <div className="flex gap-6 justify-center items-center mb-8">
                    <a
                        href={personalDetails.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={personalDetails.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={personalDetails.social.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                        aria-label="LeetCode"
                    >
                        <Terminal size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
