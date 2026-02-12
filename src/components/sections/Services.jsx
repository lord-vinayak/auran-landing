import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { SERVICES_DATA } from "../../constants";
import StackingCards, { StackingCardItem } from "../ui/stacking-cards";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";

// Map your theme colors to bold Tailwind classes for the card backgrounds
const colorStyles = {
  teal: "bg-teal-600 text-white",
  indigo: "bg-indigo-600 text-white",
  rose: "bg-rose-600 text-white",
  default: "bg-slate-800 text-white",
};

const iconStyles = {
  teal: "text-teal-600 bg-white",
  indigo: "text-indigo-600 bg-white",
  rose: "text-rose-600 bg-white",
  default: "text-slate-900 bg-white",
};

const Services = () => {
  const containerRef = useRef(null);
  const servicesArray = Object.values(SERVICES_DATA);

  return (
    <div id="services" className="relative w-full bg-slate-50">
      <StackingCards totalCards={servicesArray.length} className="relative">
        {/* --- Intro Section (Scrolls away) --- */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-3xl mx-auto space-y-2">
            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 leading-tight">
              A Triple Threat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                Approach
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-xl mx-auto">
              We don't just write code or find resumes. We create ecosystems
              where technology, healthcare, and people thrive together.
            </p>
            <div className="pt-8 flex justify-center items-center text-slate-400 font-medium animate-bounce">
              Scroll Down <ArrowRight className="ml-2 w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>

        {/* --- Stacking Cards Loop --- */}
        {servicesArray.map((service, index) => {
          const cardColorClass =
            colorStyles[service.color] || colorStyles.default;
          const iconColorClass =
            iconStyles[service.color] || iconStyles.default;
          const Icon = service.icon;

          return (
            <StackingCardItem
              key={index}
              index={index}
              className="h-screen flex items-center justify-center p-4 md:p-8">
              <div
                className={cn(
                  cardColorClass,
                  "w-full max-w-6xl h-[85vh] md:h-[70vh] rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden relative",
                )}>
                {/* Decorative Background Circle */}
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left Content: Text */}
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10">
                  <div className="mb-8">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8",
                        iconColorClass,
                      )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 shrink-0 opacity-80" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-fit bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform flex items-center group">
                    Explore {service.title}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Content: Visual/Image Placeholder */}
                <div className="hidden md:flex w-1/3 h-full bg-black/10 items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                  <h4 className="text-[12rem] font-black opacity-10 rotate-90 select-none">
                    0{index + 1}
                  </h4>
                </div>
              </div>
            </StackingCardItem>
          );
        })}

        {/* --- Outro / Spacer --- */}
        <div className="h-[50vh] w-full flex items-center justify-center bg-slate-50">
          <h2 className="text-4xl md:text-8xl font-black text-slate-200 uppercase tracking-tighter">
            Build Future
          </h2>
        </div>
      </StackingCards>
    </div>
  );
};

export default Services;
