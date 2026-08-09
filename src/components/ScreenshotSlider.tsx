import { useState, useEffect } from 'react';
import { TARKOV_SCREENSHOTS } from '../seo/site';

const SLIDER_ALTS: Record<string, string> = {
  '/screenshots/slider-1.webp': 'Escape From Tarkov skeleton ESP showing player pose through walls',
  '/screenshots/slider-2.webp': 'Escape From Tarkov ESP menu with player and loot tracking overlays',
  '/screenshots/slider-5.webp': 'Escape From Tarkov chams highlighting enemy players in PvP',
  '/screenshots/slider-6.webp': 'Escape From Tarkov player ESP with loot and wallhack overlays',
};

interface ScreenshotSliderProps {
  interval?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export function ScreenshotSlider({ interval = 3500, style, imgStyle }: ScreenshotSliderProps) {
  const [active, setActive] = useState(0);
  const slides = TARKOV_SCREENSHOTS;
  const src = slides[active];

  useEffect(() => {
    const id = setInterval(() => {
      setActive(cur => (cur + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, slides.length]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <img
        key={src}
        src={src}
        alt={SLIDER_ALTS[src] ?? 'Escape From Tarkov cheat screenshot'}
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
    </div>
  );
}
