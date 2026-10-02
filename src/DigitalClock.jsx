import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-8">

      <div className="w-full max-w-lg rounded-3xl bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md ring-1 ring-white/20">

        {/* Clock Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-4xl">
          🕐
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-4xl font-bold text-white">
          Digital Clock
        </h1>

        <p className="mb-8 text-sm text-blue-200">
          Live time updated every second
        </p>

        {/* Digital Clock */}
        <div className="rounded-2xl bg-black/70 px-5 py-8 shadow-inner ring-1 ring-white/10">

          <p className="text-4xl font-bold tracking-widest text-white sm:text-5xl">
            {time.toLocaleTimeString()}
          </p>

        </div>

        {/* Date */}
        <div className="mt-6 rounded-xl bg-white/10 px-4 py-3">
          <p className="text-lg font-semibold text-white">
            {time.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm text-blue-200">
          The clock updates automatically every second.
        </p>

      </div>
    </div>
  );
}

export default DigitalClock;