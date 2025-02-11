import React, { useState, useEffect } from 'react';

interface TimerProps {
    minutes: number;
}

const Timer: React.FC<TimerProps> = ({ minutes }) => {
    const [timeLeft, setTimeLeft] = useState(minutes * 60);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <div className='text-red-500'>{formatTime()}</div>;
};

export default Timer;