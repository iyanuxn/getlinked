import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Define the target date and time for the countdown
  const targetDate = new Date("2023-09-23T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        daysAsHours: days * 24 + hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    // If the target date has passed, return all zeros
    return {
      daysAsHours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex gap-5 md:mt-16 mt-8 font-time text-5xl md:px-0 px-12">
      <div className="countdown-item">
        <span>{timeLeft.daysAsHours.toString().padStart(2, "0")}</span>
        <span className="text-base">H</span>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-base">M</span>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-base">S</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
