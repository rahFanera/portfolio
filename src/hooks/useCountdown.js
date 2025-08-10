import { useState, useEffect, useMemo } from "react";

export function useCountdown(targetDate) {
  const [distance, setDistance] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setDistance((prev) => (prev <= 1000 ? 0 : prev - 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeLeft = useMemo(() => {
    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [distance]);

  return timeLeft;
}