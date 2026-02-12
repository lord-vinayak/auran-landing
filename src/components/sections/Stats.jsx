import React from 'react';
import { STATS_DATA } from '../../constants';

const Stats = () => {
  return (
    <section className="py-12 border-y border-slate-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS_DATA.map((stat, idx) => (
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
  );
};

export default Stats;