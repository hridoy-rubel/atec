import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newBreakpoint = "";

      if (width >= 1024) {
        newBreakpoint = "xl";
      } else if (width >= 768) {
        newBreakpoint = "lg";
      } else if (width >= 640) {
        newBreakpoint = "md";
      } else {
        newBreakpoint = "small";
      }

      setBreakpoint(newBreakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
