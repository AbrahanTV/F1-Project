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

  return (
    <div className="countdown">
      <h2>
        Next Race Countdown: <br /> {timeLeft.days} days, {timeLeft?.hours}{" "}
        hours, {timeLeft?.minutes} minutes, {timeLeft?.seconds} seconds
      </h2>
      <p>{nextRaceDate.toLocaleString()}</p>
    </div>
  );
}
