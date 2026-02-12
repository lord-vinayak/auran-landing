import React from 'react';
import { motion } from 'framer-motion';
import { WHY_US_DATA } from '../../constants';

const WhyUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract lines bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

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
          {WHY_US_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-${item.color}-500/50 transition-colors group hover:-translate-y-2 duration-300`}
            >
              <div className={`bg-${item.color}-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`text-${item.color}-400 w-6 h-6`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;