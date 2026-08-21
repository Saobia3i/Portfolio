"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 2;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.life = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 2;
    if (this.size > 0.2) this.size -= 0.05;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(115, 210, 222, ${this.life / 100})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** Mouse-follow particle glow rendered behind the hero content. */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest(".hero") as HTMLElement | null;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      canvas!.width = hero!.offsetWidth;
      canvas!.height = hero!.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let mouseX = 0;
    let mouseY = 0;
    let particles: Particle[] = [];
    const maxParticles = 80;
    let lastMove = 0;
    let animationFrame: number;

    function handleMouseMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastMove < 16) return;
      lastMove = now;
      const rect = hero!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      for (let i = 0; i < 2; i++) particles.push(new Particle(mouseX, mouseY));
      if (particles.length > maxParticles) particles.splice(0, particles.length - maxParticles);
    }

    function handleTouchMove(e: TouchEvent) {
      const rect = hero!.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;
      for (let i = 0; i < 3; i++) particles.push(new Particle(mouseX, mouseY));
      if (particles.length > maxParticles) particles.splice(0, particles.length - maxParticles);
    }

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    hero.addEventListener("touchmove", handleTouchMove, { passive: true });

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      const gradient = ctx!.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
      gradient.addColorStop(0, "rgba(115, 210, 222, 0.3)");
      gradient.addColorStop(0.5, "rgba(115, 210, 222, 0.1)");
      gradient.addColorStop(1, "rgba(115, 210, 222, 0)");

      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });

      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} id="hero-canvas" />;
}
