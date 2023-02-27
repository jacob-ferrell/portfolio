import React, { useEffect } from "react";

const NoScroll = ({ children }) => {
  useEffect(() => {
    const preventScrolling = (event) => {
      event.preventDefault();
    };

    document.addEventListener("touchmove", preventScrolling, { passive: false });
    document.addEventListener("mousewheel", preventScrolling, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventScrolling);
      document.removeEventListener("mousewheel", preventScrolling);
    };
  }, []);

  return <div>{children}</div>;
};

export default NoScroll;