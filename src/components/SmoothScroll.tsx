import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    let lenis: import('lenis').default | null = null;
    let frame = 0;
    let cancelled = false;

    const start = async () => {
      const { default: Lenis } = await import('lenis');
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.1,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => { void start(); }, { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        cancelAnimationFrame(frame);
        lenis?.destroy();
      };
    }

    const timeoutId = setTimeout(() => { void start(); }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
