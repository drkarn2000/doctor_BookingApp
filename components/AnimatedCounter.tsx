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
    let animationFrame: NodeJS.Timeout;
    const increment = target / 50;
    let current = 0;

    const animate = () => {
      if (current < target) {
        current += increment;
        setCount(Math.floor(current));
        animationFrame = setTimeout(animate, 50);
      } else {
        setCount(target);
      }
    };

    animate();
    return () => clearTimeout(animationFrame);
  }, [target]);

  return (
    <div className="rounded-3xl bg-white/5 p-6 shadow-card backdrop-blur-xl text-center">
      <p className="text-4xl font-bold text-cyan-300">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm text-slate-300">{label}</p>
    </div>
  );
}
