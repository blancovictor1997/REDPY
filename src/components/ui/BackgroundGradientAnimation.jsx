import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) {
  const interactiveRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    el.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    el.style.setProperty("--first-color", firstColor);
    el.style.setProperty("--second-color", secondColor);
    el.style.setProperty("--third-color", thirdColor);
    el.style.setProperty("--fourth-color", fourthColor);
    el.style.setProperty("--fifth-color", fifthColor);
    el.style.setProperty("--pointer-color", pointerColor);
    el.style.setProperty("--size", size);
    el.style.setProperty("--blending-value", blendingValue);
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    if (!interactive) return;

    function move() {
      if (!interactiveRef.current) return;
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;
      animationRef.current = requestAnimationFrame(move);
    }

    animationRef.current = requestAnimationFrame(move);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [interactive]);

  const handleMouseMove = (event) => {
    if (!interactiveRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    tgX.current = event.clientX - rect.left;
    tgY.current = event.clientY - rect.top;
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const gradientStyle = (color) =>
    `radial-gradient(circle at center, rgba(${color}, 0.8) 0, rgba(${color}, 0) 50%) no-repeat`;

  const blobBase =
    "absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [mix-blend-mode:var(--blending-value)]";

  return (
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn(
        "overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {children && <div className={cn("relative z-10", className)}>{children}</div>}

      <div
        className={cn(
          "absolute inset-0 opacity-40",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div className={cn(blobBase, "opacity-100 animate-first")} style={{ background: gradientStyle("var(--first-color)") }} />
        <div className={cn(blobBase, "opacity-100 animate-second")} style={{ background: gradientStyle("var(--second-color)") }} />
        <div className={cn(blobBase, "opacity-100 animate-third")} style={{ background: gradientStyle("var(--third-color)") }} />
        <div className={cn(blobBase, "opacity-70 animate-fourth")} style={{ background: gradientStyle("var(--fourth-color)") }} />
        <div className={cn(blobBase, "opacity-100 animate-fifth")} style={{ background: gradientStyle("var(--fifth-color)") }} />

        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70"
            style={{ background: gradientStyle("var(--pointer-color)") }}
          />
        )}
      </div>
    </div>
  );
}
