"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString());
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-amber md:text-5xl">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate/80 md:text-base">{label}</p>
    </div>
  );
}
