import { useEffect, useState } from "react";

export default function Countdown({ nextRaceDate }) {
  const calculateTimeLeft = () => {
    const race = new Date(nextRaceDate);
    const difference = race - new Date();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [nextRaceDate]);

  if (!timeLeft) return <h2>Race Weekend! 🏁</h2>;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="countdown">
      <div className="countdown-grid">
        <div className="countdown-unit">
          <span className="countdown-value">{pad(timeLeft.days)}</span>
          <span className="countdown-label">Days</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-unit">
          <span className="countdown-value">{pad(timeLeft.hours)}</span>
          <span className="countdown-label">Hrs</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-unit">
          <span className="countdown-value">{pad(timeLeft.minutes)}</span>
          <span className="countdown-label">Min</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-unit">
          <span className="countdown-value">{pad(timeLeft.seconds)}</span>
          <span className="countdown-label">Sec</span>
        </div>
      </div>
      <p className="countdown-date">
        {new Date(nextRaceDate).toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "UTC",
        })}
      </p>
    </div>
  );
}
