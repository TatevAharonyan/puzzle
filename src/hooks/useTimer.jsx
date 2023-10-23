import React, {useCallback, useEffect, useRef, useState} from 'react';

export const useTimer = ({seconds}) => {
  const [time, setTime] = useState(seconds || 70);

  let timer = useRef(null);

  const onClock = useCallback(() => {
    setTime(time => {
      if (time - 1 > 0) {
        return time - 1;
      } else {
        if (timer.current) {
          clearInterval(timer.current);
        }
        return 0;
      }
    });
  }, []);

  useEffect(() => {
    timer.current = setInterval(onClock, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const onReset = useCallback(() => {
    setTime(seconds);

    timer.current = setInterval(onClock, 1000);
  }, [seconds]);

  return {time, onReset};
};
