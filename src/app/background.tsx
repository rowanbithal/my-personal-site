"use client";
import React, { useState, useRef, useEffect } from "react";

type Bubble = {
  x: number;
  y: number;
  size: number;
};

function Background() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 40,
    }));
    setBubbles(newBubbles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const dx = mouse.x - position.current.x - 18;
      const dy = mouse.y - position.current.y - 15;

      // Velocity magnitude based on distance
      const speed = 0.2; // 10% of the distance per frame
      const vx = dx * speed;
      const vy = dy * speed;

      position.current.x += vx;
      position.current.y += vy;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current!);
    };
  }, [mouse]);

  return (
    <section>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 backdrop-blur-sm opacity-60 border-solid border-gray-500 border-2 rounded-full pointer-events-none z-50"
        style={{ transform: "translate(0px, 0px)" }}
      />
      <div
        className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
      >
        {bubbles.map((b, i) => {
          const dx = mouse.x - b.x;
          const dy = mouse.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 120; // distance of influence

          let offsetX = 0;
          let offsetY = 0;

          if (dist < radius) {
            const pushStrength = (radius - dist) / radius; // normalized [0, 1]
            offsetX = -dx * 0.5 * pushStrength;
            offsetY = -dy * 0.5 * pushStrength;
          }

          return (
            <div
              key={i}
              className="bubble"
              style={{
                top: b.y + offsetY,
                left: b.x + offsetX,
                width: b.size,
                height: b.size,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Background;
