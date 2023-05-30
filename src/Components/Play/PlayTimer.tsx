import { useEffect, useState } from "react";

const PlayTimer = () => {
  // timer bar
  // controlled with useEffect
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft <= 0) setTimeLeft(time);
      else
      setTimeLeft(s => s - 0.01);
    }, 10);
    return () => clearTimeout(timer);
  }, [timeLeft]);


  const time = 10;

  return (
    <div className="w-full flex flex-row justify-center p-4">
      <div className="w-full mx-4 h-4 bg-gray-300 rounded-full">
        <div
          className={`h-full bg-green-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${(timeLeft / time) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PlayTimer;
