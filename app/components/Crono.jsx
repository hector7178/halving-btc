import React, { useState, useEffect } from "react";

const CountdownTimer = (prop) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Fecha objetivo
  

  useEffect(() => {
    const endDate = new Date("17 April 2024, 14:14 UTC");
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endDate - now;

      // Calcula días restantes
      const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      setDays(remainingDays);

      // Calcula horas restantes
      const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(remainingHours);

      // Calcula minutos restantes
      const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(remainingMinutes);

      // Calcula segundos restantes
      const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setSeconds(remainingSeconds);

      // Limpia el intervalo cuando el tiempo se agota
      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div {...prop}>
        <h4 className="text-white text-4xl w-full text-center font-bold">COUNTDOWN</h4>
        <div className="grid grid-cols-4 h-fit gap-2">
        <p className="rounded-lg bg-white text-amber-500 flex flex-col  items-center justify-center shadow-lg text-2xl md:text-5xl py-10">{days}:<br/><span className="text-sm">Days</span></p>
        <p className="rounded-lg bg-white text-amber-500 flex flex-col  items-center justify-center shadow-lg text-2xl md:text-5xl py-10">{hours}:<br/><span className="text-sm">Hours</span></p>
        <p className="rounded-lg bg-white text-amber-500 flex  flex-col items-center justify-center shadow-lg text-2xl md:text-5xl py-10">{minutes}:<br/><span className="text-sm">Minutes</span></p>
        <p className="rounded-lg bg-white text-amber-500 flex  flex-col items-center justify-center shadow-lg text-2xl md:text-5xl py-10">{seconds}<br/><span className="text-sm">Seconds</span></p>
        </div>
        <span className="text-white text-xl w-full text-center font-bold">09 April 2024, 21:08 UTC</span>
    </div>
  );
};

export default CountdownTimer;