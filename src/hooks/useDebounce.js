import { useEffect, useRef } from "react";

const useDebounce = (callBackFunction, delay) => {
  const timeoutID = useRef(null);

  const debounce = (...args) => {
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }
    timeoutID.current = setTimeout(() => {
      callBackFunction(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
    };
  }, []);

  return debounce;
};

export default useDebounce;
