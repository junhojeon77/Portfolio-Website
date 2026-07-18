"use client";

import React from "react";

export default function FadeInSection({ children }) {
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const domRef = React.useRef(null);

  React.useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      // fire once ~10% of the section is visible
      { threshold: 0.1 }
    );
    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-section ${hasAnimated ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
