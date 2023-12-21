import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TimerProps {
  duration: number;
  timeOut: () => void;
}

const Timer = (props: TimerProps) => {
  return (
    <div className="flex text-4xl m-[20px]">
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 5, 0]}
        onComplete={props.timeOut}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
