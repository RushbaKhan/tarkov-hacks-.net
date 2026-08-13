import { useState, useEffect, useCallback } from 'react';
import { TARKOV_SCREENSHOTS, SCREENSHOT_ALTS } from '../seo/screenshots';

interface ScreenshotSliderProps {
  interval?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export function ScreenshotSlider({ interval = 4000, style, imgStyle }: ScreenshotSliderProps) {
  const [active, setActive] = useState(0);
  const slides = TARKOV_SCREENSHOTS;
  const src = slides[active];

  const preloadNext = useCallback((index: number) => {
    const next = slides[(index + 1) % slides.length];
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = next;
    document.head.appendChild(link);
  }, [slides]);

  useEffect(() => {
    preloadNext(active);
    const id = setInterval(() => {
      setActive(cur => (cur + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, slides.length, active, preloadNext]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-void)', ...style }}>
      <img
        key={src}
        src={src}
        alt={SCREENSHOT_ALTS[src] ?? 'Escape From Tarkov cheat screenshot'}
        width={1280}
        height={720}
        loading={active === 0 ? 'eager' : 'lazy'}
        fetchPriority={active === 0 ? 'high' : 'auto'}
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...imgStyle,
        }}
      />

      {slides.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
          zIndex: 10,
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                borderRadius: 3,
                border: 'none',
                background: i === active ? 'rgba(168,85,247,0.9)' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
