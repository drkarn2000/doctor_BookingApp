'use client';

import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  target: number;
  label: string;
  suffix?: string;
};

export default function AnimatedCounter({ target, label, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // Reset to 0
    
    let animationFrame: NodeJS.Timeout;
    const increment = Math.ceil(target / 40);
    let current = 0;

    const animate = () => {
      current += increment;
      if (current >= target) {
        setCount(target);
      } else {
        setCount(current);
        animationFrame = setTimeout(animate, 30);
      }
    };

    const startDelay = setTimeout(animate, 100);
    
    return () => {
      clearTimeout(startDelay);
      clearTimeout(animationFrame);
    };
  }, [target]);

  return (
    <div className="rounded-3xl bg-white/5 p-6 shadow-card backdrop-blur-xl text-center" suppressHydrationWarning>
      <p className="text-4xl font-bold text-cyan-300" suppressHydrationWarning>
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm text-slate-300">{label}</p>
    </div>
  );
}
