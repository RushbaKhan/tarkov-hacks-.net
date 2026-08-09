import { useState, useEffect } from 'react';
import { TARKOV_SCREENSHOTS } from '../seo/site';

const SLIDER_ALTS = [
  'Escape From Tarkov skeleton ESP showing player pose through walls in Labs',
  'Escape From Tarkov player ESP with boxes, health and distance overlays',
  'Escape From Tarkov wallhack showing PMC positions and loot in raid',
  'Escape From Tarkov raid overview with extraction and map awareness',
  'Escape From Tarkov cheat HUD with player tracking overlays',
  'Escape From Tarkov loot ESP highlighting valuable items in raid',
] as const;

interface ScreenshotSliderProps {
  interval?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export function ScreenshotSlider({ interval = 3500, style, imgStyle }: ScreenshotSliderProps) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(cur => {
        setPrev(cur);
        return (cur + 1) % TARKOV_SCREENSHOTS.length;
      });
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {TARKOV_SCREENSHOTS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={SLIDER_ALTS[i] ?? 'Escape From Tarkov cheat screenshot'}
          width={1280}
          height={720}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.9s ease',
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : i === prev ? 1 : 0,
            display: 'block',
            ...imgStyle,
          }}
        />
      ))}

      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '6px',
        zIndex: 10,
      }}>
        {TARKOV_SCREENSHOTS.map((_, i) => (
          <button
            key={i}
            aria-label={`Show screenshot ${i + 1}`}
            onClick={() => { setPrev(active); setActive(i); }}
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
