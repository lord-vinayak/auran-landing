// src/constants/index.js
import { HeartPulse, Code, Users, Zap, ShieldCheck, Globe } from 'lucide-react';

export const SERVICES_DATA = {
  medtech: {
    title: "MedTech Innovation",
    icon: HeartPulse, // We pass the component reference, not the JSX
    description: "Revolutionizing patient care with AI-driven diagnostics, telemedicine platforms, and smart wearable integrations. We bridge the gap between biological data and digital intelligence.",
    features: ["AI Diagnostic Tools", "Remote Patient Monitoring", "Hospital Management Systems", "IoT Wearable Integration"],
    color: "teal",
    image: "bg-teal-50"
  },
  tech: {
    title: "Tech Solutions",
    icon: Code,
    description: "Building the digital backbone of tomorrow. We deliver scalable cloud architecture, custom software, and robust cybersecurity protocols to keep your business ahead of the curve.",
    features: ["Custom Software Dev", "Cloud Infrastructure (AWS/Azure)", "Cybersecurity Audits", "Blockchain Solutions"],
    color: "indigo",
    image: "bg-indigo-50"
  },
  manpower: {
    title: "Elite Manpower",
    icon: Users,
    description: "Connecting top-tier talent with visionary companies. We specialize in sourcing niche medical and technical professionals who fit your culture and technical requirements.",
    features: ["Specialized IT Staffing", "Medical Professionals", "Executive Search", "Project-Based Teams"],
    color: "rose",
    image: "bg-rose-50"
  }
};

export const STATS_DATA = [
  { label: "Projects Delivered", value: "250" },
  { label: "Medical Partners", value: "45" },
  { label: "Talent Placed", value: "100" },
];

export const WHY_US_DATA = [
  {
    icon: Zap,
    color: "teal",
    title: "Rapid Deployment",
    text: "Our agile methodologies ensure your MVP hits the market in weeks, not months.",
  },
  {
    icon: ShieldCheck,
    color: "indigo",
    title: "HIPAA & GDPR Compliant",
    text: "Security isn't an afterthought. We build with compliance-first architecture.",
  },
  {
    icon: Globe,
    color: "rose",
    title: "Global Talent Pool",
    text: "Access a vetted network of 5,000+ developers and medical experts ready to integrate.",
  },
];