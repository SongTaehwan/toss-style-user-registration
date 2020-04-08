import { useState, useCallback, useRef, useEffect } from 'react';

interface useTimerProps {
  startTime: number;
  onCompleted?: () => any;
}

type Trigger = () => void;
type Reset = () => void;

const useTimer = ({
  startTime,
  onCompleted,
}: useTimerProps): [number, Trigger, Reset] => {
  const [remainTime, setRemainTime] = useState(Math.max(startTime, 0));
  const [start, setStart] = useState(false);
  const prevTimerId = useRef<number>(0);

  useEffect(() => {
    if (start && prevTimerId.current === 0) {
      prevTimerId.current = setInterval(timer, 1000);
    }

    if (!start && prevTimerId.current !== 0) {
      clearInterval(prevTimerId.current);
      prevTimerId.current = 0;
    }
  }, [start]);

  useEffect(() => {
    if (remainTime === 0 && prevTimerId.current !== 0) {
      clearInterval(prevTimerId.current);
      setStart(false);
      prevTimerId.current = 0;

      if (onCompleted) {
        onCompleted();
      }
    }
  }, [remainTime]);

  const timer = () => {
    setRemainTime((prevTime) => {
      const remain = Math.max(--prevTime, 0);
      return remain;
    });
  };

  const triggerTimer = useCallback(() => setStart(!start), [start]);

  const resetTimer = () => {
    setRemainTime(startTime);
  };

  return [remainTime, triggerTimer, resetTimer];
};

export default useTimer;
