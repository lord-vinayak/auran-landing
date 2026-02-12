import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { SERVICES_DATA } from '../../constants';

const Services = () => {
  const [activeTab, setActiveTab] = useState("medtech");
  const activeService = SERVICES_DATA[activeTab];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            A Triple Threat Approach
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We don't just write code or find resumes. We create ecosystems where technology, healthcare, and people thrive together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tab Navigation - Left Side */}
          <div className="lg:col-span-4 space-y-4">
            {Object.entries(SERVICES_DATA).map(([key, service]) => {
              const Icon = service.icon;
              const isActive = activeTab === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left active:scale-95 p-6 rounded-2xl transition-all duration-300 border-2 ${
                    isActive
                      ? `bg-${service.color}-50 border-${service.color}-500 shadow-md transform scale-[1.02]`
                      : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? `bg-${service.color}-500 text-white` : "bg-slate-100 text-slate-500"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isActive ? `text-${service.color}-900` : "text-slate-900"}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {key === 'medtech' && "Healthcare Innovation"}
                        {key === 'tech' && "Software & Cloud"}
                        {key === 'manpower' && "Staffing & Recruitment"}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area - Right Side */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <activeService.icon className={`w-12 h-12 text-${activeService.color}-500 mb-4`} />
                    <div className={`hidden md:block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-${activeService.color}-100 text-${activeService.color}-700`}>
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
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 text-${activeService.color}-500`} />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <button className={`text-${activeService.color}-600 font-bold active:scale-95 flex items-center group hover:text-${activeService.color}-700`}>
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
  );
};

export default Services;