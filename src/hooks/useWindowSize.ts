import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWdith] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setWdith(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const resizeHandle = ():void => {
      setWdith(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, [width, height]);

  return [width, height];
};
