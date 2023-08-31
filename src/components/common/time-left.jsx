import { useEffect, useState } from 'react';

const TimeLeft = ({ endDateStr }) => {
  const calculateTimeLeft = (endDateStr) => {
    const endDate = new Date(endDateStr);
    const currentDate = new Date();

    if (isNaN(endDate)) {
      return '';
    }

    let totalSeconds = Math.floor((endDate - currentDate) / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [time, setTime] = useState(() => calculateTimeLeft(endDateStr));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft(endDateStr));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDateStr]);

  return <>Time left {time}</>;
};

export default TimeLeft;
