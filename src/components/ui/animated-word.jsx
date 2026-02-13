import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Helper function to wrap characters (needed for masking effects)
const wrapElements = (elems, wrapType, wrapClass) => {
  Array.from(elems).forEach((elem) => {
    // Prevent double-wrapping in React Strict Mode
    if (elem.parentNode.classList.contains(wrapClass)) return;
    const wrapEl = document.createElement(wrapType);
    wrapEl.className = wrapClass;
    elem.parentNode.insertBefore(wrapEl, elem);
    wrapEl.appendChild(elem);
  });
};

const AnimatedText = ({ 
  text, 
  effect = "char-variation-1", 
  className = "", 
  delay = 0 
}) => {
  const scope = useRef(null);
  const [splitting, setSplitting] = useState(null);

  // Dynamically import splitting to avoid SSR/Vite build issues
  useEffect(() => {
    import("splitting").then((Splitting) => {
      setSplitting(() => Splitting.default);
    });
  }, []);

  useGSAP(
    async () => {
      if (!splitting || !scope.current) return;
      
      // Split the text into words and chars
      await splitting({ target: scope.current });

      const chars = scope.current.querySelectorAll(".char");
      const words = scope.current.querySelectorAll(".word");

      if (!chars.length || !words.length) return;

      // Create a GSAP timeline with the requested delay
      const tl = gsap.timeline({ delay });

      switch (effect) {
        case "char-variation-1":
          tl.fromTo(chars,
            { skewX: -30, filter: "blur(10px) brightness(0%)", willChange: "filter, transform" },
            { skewX: 0, filter: "blur(0px) brightness(100%)", duration: 0.5, stagger: 0.05, ease: "none" }
          );
          break;

        case "char-variation-2":
          tl.fromTo(chars,
            { scaleY: 0.1, scaleX: 1.8, filter: "blur(10px) brightness(50%)", willChange: "filter, transform" },
            { scaleY: 1, scaleX: 1, filter: "blur(0px) brightness(100%)", duration: 0.5, stagger: 0.05, ease: "none" }
          );
          break;

        case "char-variation-3":
          tl.fromTo(chars,
            { willChange: "opacity, transform", opacity: 0, xPercent: () => gsap.utils.random(-200, 200), yPercent: () => gsap.utils.random(-150, 150) },
            { ease: "power1.inOut", opacity: 1, xPercent: 0, yPercent: 0, stagger: { each: 0.05, grid: "auto", from: "random" } }
          );
          break;

        case "char-variation-4":
          wrapElements(chars, "span", "char-wrap");
          tl.fromTo(chars,
            { willChange: "transform", xPercent: -250, rotationZ: 45, scaleX: 6, transformOrigin: "100% 50%" },
            { duration: 1, ease: "power2", xPercent: 0, rotationZ: 0, scaleX: 1, stagger: 0.06 }
          );
          break;

        case "char-variation-5":
          wrapElements(chars, "span", "char-wrap");
          tl.fromTo(chars,
            { willChange: "transform", transformOrigin: "0% 50%", xPercent: 105 },
            { duration: 0.5, ease: "expo", xPercent: 0, stagger: 0.02 }
          );
          break;

        case "char-variation-6":
          tl.fromTo(chars,
            { willChange: "transform", transformOrigin: "50% 100%", scaleY: 0 },
            { ease: "power3.in", opacity: 1, scaleY: 1, stagger: 0.05 }
          );
          break;

        case "word-variation-1":
          tl.fromTo(words,
            { willChange: "opacity", opacity: 0, filter: "blur(20px)" },
            { duration: 1, ease: "power1.inOut", opacity: 1, filter: "blur(0px)", stagger: { each: 0.05, from: "random" } }
          );
          break;

        case "word-variation-2":
          tl.fromTo(words,
            { willChange: "transform", transformOrigin: "50% 0%", scaleY: 0, overflow: "hidden" },
            { ease: "back.inOut", opacity: 1, scaleY: 1, yPercent: 0, stagger: 0.1, duration: 1 }
          );
          break;

        case "word-variation-3":
          words.forEach((word) => gsap.set(word.parentNode, { perspective: 1000 }));
          tl.fromTo(words,
            { willChange: "opacity, transform", z: () => gsap.utils.random(500, 950), opacity: 0, xPercent: () => gsap.utils.random(-100, 100), yPercent: () => gsap.utils.random(-10, 10), rotationX: () => gsap.utils.random(-90, 90) },
            { ease: "expo", opacity: 1, rotationX: 0, rotationY: 0, xPercent: 0, yPercent: 0, duration: 2, stagger: { each: 0.1, from: "random" }, z: 0 }
          );
          break;

        default:
          break;
      }
    },
    { scope, dependencies: [splitting, effect, text, delay] }
  );

  return (
    <div
      ref={scope}
      data-splitting
      className={`
        [&_.char-wrap]:inline-grid [&_.char-wrap]:overflow-hidden 
        [&_.char]:inline-block [&_.word]:inline-block [&_.word]:whitespace-nowrap
        ${className}
      `}
    >
      {text}
    </div>
  );
};

export default AnimatedText;