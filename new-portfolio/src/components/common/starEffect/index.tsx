import { useEffect, useRef } from "react";
import styles from "./star-effect.module.scss";

const StarEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fullscreen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create stars
    const stars: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      phase: number;
    }[] = [];

    for (let i = 0; i < 2500; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.25 + .75, 
        speed: 0.02 + Math.random() * 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const brightness =
          0.1 + 0.9 * Math.abs(Math.sin(tick * star.speed + star.phase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 3
        );
        gradient.addColorStop(0, `rgba(255,255,255,${brightness})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
      });

      tick += 0.07; 
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.starEffects} />;
};

export default StarEffect;
