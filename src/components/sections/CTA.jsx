import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Ready to Accelerate Your Vision?
        </h2>
        <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
          Whether you need a full-stack medical platform or a team of 20 developers by Monday, we are ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-900 active:scale-95 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-50 transition-colors text-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;