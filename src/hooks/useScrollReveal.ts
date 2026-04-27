import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered GSAP animations
 * Usage: const ref = useScrollReveal({ from: { opacity: 0, y: 60 }, duration: 0.8 })
 */
export function useScrollReveal(options: {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  toggleActions?: string;
} = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
      toggleActions = 'play none none none',
    } = options;

    // Set initial state
    gsap.set(el.children.length > 0 ? el.children : el, from);

    // Create timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: toggleActions as ScrollTrigger.Vars['toggleActions'],
      },
    });

    tl.to(el.children.length > 0 ? el.children : el, {
      ...to,
      duration,
      delay,
      stagger: el.children.length > 1 ? stagger : 0,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

/**
 * Hook for ink-reveal animation (like a tattoo being inked)
 */
export function useInkReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial clip-path to hide element
    gsap.set(el, {
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Ink reveal: reveals from bottom to top like ink soaking through paper
    tl.to(el, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power2.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return ref;
}
