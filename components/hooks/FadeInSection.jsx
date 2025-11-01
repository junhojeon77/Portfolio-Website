"use client";

import React from "react";

export default function FadeInSection(props) {
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 1. Set the state to true to trigger the animation
          setHasAnimated(true);

          // 2. STOP observing the element once it has intersected
          // This prevents the state from ever being set back to false
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(currentRef);

    // Cleanup function to ensure observer stops if component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      // Use the new state name 'hasAnimated'
      className={`fade-in-section ${hasAnimated ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
