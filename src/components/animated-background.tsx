import type { CSSProperties } from "react";

const stars = Array.from({ length: 20 }, (_, i) => {
  const fromTop = i % 2 === 0;
  const startX = fromTop ? `${(i * 7) % 112 - 6}vw` : "-20vw";
  const startY = fromTop ? "-16vh" : `${(i * 9) % 108 - 6}vh`;
  const distance = 120 + (i % 8) * 10;

  return {
  key: i + 1,
  duration: 10.5 + (i % 9) * 0.9,
  delay: i * 0.62,
  length: 300 + (i % 8) * 24,
  thickness: i % 3 === 0 ? 2 : 1,
  endX: `calc(${startX} + ${distance}vw)`,
  endY: `calc(${startY} + ${Math.round(distance * 0.72)}vh)`,
  startX,
  startY,
  };
});

export function AnimatedBackground() {
  return (
    <div aria-hidden className="tech-bg">
      {stars.map((star) => (
        <span
          key={star.key}
          className="falling-star"
          style={
            {
              "--duration": `${star.duration}s`,
              "--delay": `${star.delay}s`,
              "--length": `${star.length}px`,
              "--thickness": `${star.thickness}px`,
              "--start-x": star.startX,
              "--start-y": star.startY,
              "--end-x": star.endX,
              "--end-y": star.endY,
              "--angle": "35deg",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
