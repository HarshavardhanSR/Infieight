"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  createdAt: number;
};

const rippleLifetime = 900;

export function HeroWaterTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !stage || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;
    let lastPoint: { x: number; y: number } | null = null;
    let ripples: Ripple[] = [];

    const resizeCanvas = () => {
      const bounds = stage.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(bounds.width * scale);
      canvas.height = Math.round(bounds.height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = (now: number) => {
      const bounds = stage.getBoundingClientRect();
      context.clearRect(0, 0, bounds.width, bounds.height);
      ripples = ripples.filter((ripple) => now - ripple.createdAt < rippleLifetime);

      for (const ripple of ripples) {
        const progress = (now - ripple.createdAt) / rippleLifetime;
        const alpha = (1 - progress) * 0.3;
        const radius = 16 + progress * 56;

        context.save();
        context.translate(ripple.x, ripple.y);
        context.scale(1, 0.58);

        const wash = context.createRadialGradient(0, 0, 0, 0, 0, radius);
        wash.addColorStop(0, `rgba(176, 222, 255, ${alpha * 0.22})`);
        wash.addColorStop(0.55, `rgba(142, 194, 255, ${alpha * 0.1})`);
        wash.addColorStop(1, "rgba(142, 194, 255, 0)");
        context.fillStyle = wash;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = `rgba(221, 239, 255, ${alpha * 0.6})`;
        context.lineWidth = 1.2;
        context.beginPath();
        context.arc(0, 0, radius * 0.78, 0, Math.PI * 2);
        context.stroke();
        context.restore();
      }

      if (ripples.length > 0) {
        frame = window.requestAnimationFrame(draw);
      } else {
        frame = 0;
      }
    };

    const scheduleDraw = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = stage.getBoundingClientRect();
      const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };

      if (!lastPoint) {
        lastPoint = point;
        return;
      }

      const distance = Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y);
      const steps = Math.floor(distance / 20);
      for (let step = 1; step <= steps; step += 1) {
        const progress = step / (steps + 1);
        ripples.push({
          x: lastPoint.x + (point.x - lastPoint.x) * progress,
          y: lastPoint.y + (point.y - lastPoint.y) * progress,
          createdAt: performance.now(),
        });
      }

      if (distance >= 20) {
        ripples.push({ ...point, createdAt: performance.now() });
        ripples = ripples.slice(-32);
        lastPoint = point;
        scheduleDraw();
      }
    };

    const handlePointerLeave = () => {
      lastPoint = null;
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(stage);
    stage.addEventListener("pointermove", handlePointerMove, { passive: true });
    stage.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      resizeObserver.disconnect();
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas aria-hidden="true" className="hero-water-trail" ref={canvasRef} />;
}
