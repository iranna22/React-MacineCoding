import React, { useEffect, useState } from "react";

export default function MyComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Optional cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: "1500px",
        fontWeight: "bold",
        backgroundColor: "skyblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Scroll position: {scrollY}px</p>
      {/* <div style={{ height: "2000px", backgroundColor: "blue" }}>hi</div> */}
    </div>
  );
}
