import React from 'react';
import { Activity, Mail, Contact, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center h-12 w-12">
                <img
                  src="/auran.png"
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <Activity className="h-8 w-8 text-teal-600 hidden" />
              </div>
              <span className="text-xl font-bold text-white">Auran Solutions</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Innovating at the intersection of healthcare, technology, and human potential.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
            </div>
          </div>

          {/* Links Columns */}
          <FooterColumn 
            title="Solutions" 
            links={["Telemedicine Apps", "Cloud Migration", "Staff Augmentation", "AI & Machine Learning"]} 
          />
          <FooterColumn 
            title="Company" 
            links={["About Us", "Careers", "Blog", "Contact"]} 
          />

          {/* Contact Column */}
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
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const SocialIcon = ({ Icon }) => (
  <a href="#" className="hover:text-teal-400 transition-colors">
    <Icon className="w-5 h-5" />
  </a>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-6">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map(link => (
        <li key={link}><a href="#" className="hover:text-teal-400 transition-colors">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default Footer;