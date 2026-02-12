import React, { useState } from "react";
import {
  Activity,
  Code,
  Users,
  ArrowRight,
  Menu,
  X,
  Cpu,
  HeartPulse,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ShieldCheck,
  Zap,
  Globe,
  Contact,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("medtech");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = {
    medtech: {
      title: "MedTech Innovation",
      icon: <HeartPulse className="w-12 h-12 text-teal-500 mb-4" />,
      description:
        "Revolutionizing patient care with AI-driven diagnostics, telemedicine platforms, and smart wearable integrations. We bridge the gap between biological data and digital intelligence.",
      features: [
        "AI Diagnostic Tools",
        "Remote Patient Monitoring",
        "Hospital Management Systems",
        "IoT Wearable Integration",
      ],
      color: "teal",
      image: "bg-teal-50",
    },
    tech: {
      title: "Tech Solutions",
      icon: <Code className="w-12 h-12 text-indigo-500 mb-4" />,
      description:
        "Building the digital backbone of tomorrow. We deliver scalable cloud architecture, custom software, and robust cybersecurity protocols to keep your business ahead of the curve.",
      features: [
        "Custom Software Dev",
        "Cloud Infrastructure (AWS/Azure)",
        "Cybersecurity Audits",
        "Blockchain Solutions",
      ],
      color: "indigo",
      image: "bg-indigo-50",
    },
    manpower: {
      title: "Elite Manpower",
      icon: <Users className="w-12 h-12 text-rose-500 mb-4" />,
      description:
        "Connecting top-tier talent with visionary companies. We specialize in sourcing niche medical and technical professionals who fit your culture and technical requirements.",
      features: [
        "Specialized IT Staffing",
        "Medical Professionals",
        "Executive Search",
        "Project-Based Teams",
      ],
      color: "rose",
      image: "bg-rose-50",
    },
  };

  const activeService = services[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="flex items-center justify-center h-12 w-12">
                <img
                  src="/auran.png"
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide broken image link
                    e.target.nextSibling.style.display = "block"; // Show fallback icon
                  }}
                />
                <Activity
                  className="h-8 w-8 text-teal-600"
                  style={{ display: "none" }}
                />
              </div>

              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                Auran Solutions
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#services"
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                Solutions
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                About
              </a>
              <a
                href="#careers"
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                Careers
              </a>
              <button className="active:scale-95 bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 font-medium text-sm hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-4 py-6 shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-lg text-slate-600 font-medium"
                onClick={toggleMenu}>
                Solutions
              </a>
              <a
                href="#about"
                className="text-lg text-slate-600 font-medium"
                onClick={toggleMenu}>
                About
              </a>
              <a
                href="#careers"
                className="text-lg text-slate-600 font-medium"
                onClick={toggleMenu}>
                Careers
              </a>
              <button className="active:scale-95 bg-teal-600 text-white px-6 py-3 rounded-xl w-full font-bold shadow-lg shadow-teal-500/20 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-600">
              The Future of Health & Tech is Here
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
            We Build Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600">
              That Empower Humanity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Auran Solutions bridges the gap between medical innovation,
            cutting-edge software, and world-class talent. We are the engine
            behind next-gen healthcare ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold  hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center group hover:scale-105 active:scale-95">
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
              Find Talent
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Delivered", value: "250+" },
            { label: "Medical Partners", value: "45+" },
            { label: "Talent Placed", value: "1.2k" },
            { label: "Client Growth", value: "300%" },
          ].map((stat, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              A Triple Threat Approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don't just write code or find resumes. We create ecosystems
              where technology, healthcare, and people thrive together.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Tab Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <button
                onClick={() => setActiveTab("medtech")}
                className={`w-full text-left active:scale-95 p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === "medtech" ? "bg-teal-50 border-teal-500 shadow-md transform scale-[1.02]" : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"}`}>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${activeTab === "medtech" ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${activeTab === "medtech" ? "text-teal-900" : "text-slate-900"}`}>
                      MedTech
                    </h3>
                    <p className="text-sm text-slate-500">
                      Healthcare Innovation
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("tech")}
                className={`w-full text-left p-6 active:scale-95 rounded-2xl transition-all duration-300 border-2 ${activeTab === "tech" ? "bg-indigo-50 border-indigo-500 shadow-md transform scale-[1.02]" : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"}`}>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${activeTab === "tech" ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${activeTab === "tech" ? "text-indigo-900" : "text-slate-900"}`}>
                      Tech Solutions
                    </h3>
                    <p className="text-sm text-slate-500">Software & Cloud</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("manpower")}
                className={`w-full text-left active:scale-95 p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === "manpower" ? "bg-rose-50 border-rose-500 shadow-md transform scale-[1.02]" : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"}`}>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${activeTab === "manpower" ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${activeTab === "manpower" ? "text-rose-900" : "text-slate-900"}`}>
                      Manpower
                    </h3>
                    <p className="text-sm text-slate-500">
                      Staffing & Recruitment
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab} // This key triggers the animation on change
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      {activeService.icon}
                      <div
                        className={`hidden md:block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-${activeService.color}-100 text-${activeService.color}-700`}>
                        Core Service
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                      {activeService.title}
                    </h3>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                      {activeService.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeService.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 text-${activeService.color}-500`}
                          />
                          <span className="font-medium text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 pt-8 border-t border-slate-100">
                      <button
                        className={`text-${activeService.color}-600 font-bold active:scale-95 flex items-center group hover:text-${activeService.color}-700`}>
                        Learn more about {activeService.title}
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Value Prop */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract lines bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Startups & Enterprises Choose Auran Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We move at the speed of innovation without breaking things.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-${item.color}-500/50 transition-colors group hover:-translate-y-2 duration-300`}>
                <div
                  className={`bg-${item.color}-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`text-${item.color}-400 w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Accelerate Your Vision?
          </h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Whether you need a full-stack medical platform or a team of 20
            developers by Monday, we are ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-900 active:scale-95 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-50 transition-colors text-lg">
              Schedule a Consultation
            </button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center h-12 w-12">
                  <img
                    src="/auran.png"
                    alt="Logo"
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide broken image link
                      e.target.nextSibling.style.display = "block"; // Show fallback icon
                    }}
                  />
                  <Activity
                    className="h-8 w-8 text-teal-600"
                    style={{ display: "none" }}
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  Auran Solutions
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Innovating at the intersection of healthcare, technology, and
                human potential.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Telemedicine Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Cloud Migration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Staff Augmentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    AI & Machine Learning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-teal-500 mt-0.5" />
                  <span>info@auransolutions.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Contact className="w-5 h-5 text-teal-500 mt-0.5" />
                  <span>+91-7347790831</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 Auran Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
