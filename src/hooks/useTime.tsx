import { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const ms = currentDate.getMilliseconds();
    const delay = (60 - seconds) * 1000 - ms;
    const setCurrentTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = `${hour < 10 ? "0": ""}${hour > 12 ? hour - 12 : hour}:${minute < 10 ? "0": ""}${minute} ${hour >= 12 ? "PM" : "AM"}`;
      setTime(currentTime);
    };
    setCurrentTime();
    let interval: number;
    const timeout = setTimeout(() => {
      setCurrentTime();
      interval = setInterval(() => {
        setCurrentTime();
      }, 60 * 1000);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return time;
};

export default useTime;
