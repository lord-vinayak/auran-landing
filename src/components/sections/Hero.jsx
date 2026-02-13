import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/ui/animated-word";

const Hero = () => {
  return (
    <section className="h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Replace this src with the path to your actual video */}
        <source src="/optimized-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay: Helps text stand out against the video */}
      <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-[2px] z-0"></div>

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

        <AnimatedText
          text="We Build Solutions"
          effect="word-variation-3"
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]"
        />
        <AnimatedText
          text="That Empower Humanity"
          effect="word-variation-3"
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 "
        />

        <AnimatedText
          text="Auran Solutions bridges the gap between medical innovation,
          cutting-edge software, and world-class talent. We are the engine
          behind next-gen healthcare ecosystems."
          effect="char-variation-5"
          className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center group hover:scale-105 active:scale-95">
            Explore Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
            Find Talent
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;