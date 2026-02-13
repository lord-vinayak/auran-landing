import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import StackingCards, { StackingCardItem } from "../ui/stacking-cards";
import { CheckCircle } from "lucide-react";

const cards = [
  {
    bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
    title: "MedTech Innovation",
    description:
      "Revolutionizing patient care with AI-driven diagnostics, telemedicine platforms, and smart wearable integrations. We bridge the gap between biological data and digital intelligence.",
    features: [
      "AI Diagnostic Tools",
      "Remote Patient Monitoring",
      "Hospital Management Systems",
      "IoT Wearable Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
  },
  {
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    title: "Tech Solutions",
    description:
      "Building the digital backbone of tomorrow. We deliver scalable cloud architecture, custom software, and robust cybersecurity protocols to keep your business ahead of the curve.",
    features: [
      "Custom Software Dev",
      "Cloud Infrastructure",
      "Cybersecurity Audits",
      "Blockchain Solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },
  {
    bgColor: "bg-gradient-to-br from-rose-500 to-rose-700",
    title: "Elite Manpower",
    description:
      "Connecting top-tier talent with visionary companies. We specialize in sourcing niche medical and technical professionals who fit your culture and technical requirements.",
    features: [
      "Specialized IT Staffing",
      "Medical Professionals",
      "Executive Search",
      "Project-Based Teams",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
];

export default function Services() {
//   const container = useRef(null);
  return (
    <section id="services" className="bg-slate-50 relative pb-32">
      <div className="relative w-full">
        {/* 2. Stacking Cards Section */}
        <StackingCards
          totalCards={cards.length}
          scrollOptions={{ offset: ["start center", "end end"] }}>
          {/* 1. Header Section */}
          <div className="pt-20 max-w-3xl mx-auto text-center px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              A Triple Threat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                Approach
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
              We don't just write code or find resumes. We create ecosystems
              where technology, healthcare, and people thrive together.
            </p>
          </div>
          {cards.map(
            ({ bgColor, description, image, title, features }, index) => {
              return (
                <StackingCardItem
                  key={index}
                  index={index}
                  topPosition={`${15 + index * 2}%`}
                  className="h-screen w-full">
                  {/* THE CARD */}
                  <div className="w-full h-full flex items-start justify-center">
                    <div
                      className={cn(
                        bgColor,
                        "w-[92%] max-w-5xl h-[75vh] min-h-[500px] max-h-[700px] rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row relative overflow-hidden text-white border border-white/20",
                      )}>
                      {/* Decorative background glow inside the card */}
                      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

                      {/* Left Content Column */}
                      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10">
                        <h3 className="font-extrabold text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
                          {title}
                        </h3>
                        <p className="mb-10 text-lg opacity-90 leading-relaxed max-w-md">
                          {description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 bg-black/10 hover:bg-black/20 transition-colors rounded-xl px-4 py-3 border border-white/10">
                              <CheckCircle className="w-5 h-5 opacity-80 shrink-0" />
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Image Column */}
                      <div className="w-full md:w-[45%] h-64 md:h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10 md:hidden"></div>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent z-10 md:from-black/20 md:to-transparent"></div>
                        <img
                          src={image}
                          alt={title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                      </div>
                    </div>
                  </div>
                </StackingCardItem>
              );
            },
          )}
          <div className="w-full h-[30vh]"></div>
        </StackingCards>
      </div>
    </section>
  );
}
