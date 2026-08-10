import { ScreenshotSlider } from './ScreenshotSlider';
import { BUY_URL } from '../seo/site';

export function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-void)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <ScreenshotSlider
          interval={4000}
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ position: 'absolute', height: '100%' }}
        />
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(6,4,9,0.95) 0%, rgba(6,4,9,0.75) 50%, rgba(6,4,9,0.5) 100%)',
        zIndex: 3,
      }} />

      <div className="grid-overlay" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        width: 'clamp(300px, 50vw, 700px)',
        height: 'clamp(300px, 50vw, 700px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)',
        animation: 'orb-drift 18s ease-in-out infinite',
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
        paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
        paddingTop: 'clamp(100px, 15vw, 140px)',
        paddingBottom: 'clamp(60px, 10vw, 100px)',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.25)',
          borderRadius: '100px',
          marginBottom: 'clamp(20px, 3vw, 28px)',
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent-bright)',
            letterSpacing: '0.04em',
          }}>Patch-Ready · Legit ESP · External Loader</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          marginBottom: 'clamp(16px, 2.5vw, 24px)',
          maxWidth: '900px',
        }}>
          <span className="gradient-text" style={{ display: 'block' }}>
            Escape From Tarkov Hacks
          </span>
          <span style={{
            display: 'block',
            marginTop: 'clamp(8px, 1.5vw, 14px)',
            fontSize: 'clamp(1.35rem, 3.2vw, 2.25rem)',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
          }}>
            ESP, Aimbot &amp; Wallhack
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: '560px',
          marginBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          Undetected Escape From Tarkov cheat with private player ESP, precision aimbot, wallhack,
          loot filters, extraction tracking, and no recoil. Instant delivery from $35, patch-ready updates,
          and Discord setup help after checkout.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'clamp(24px, 3vw, 32px)' }}>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get EFT Hacks
          </a>
          <a href="#pricing" className="btn-ghost">
            See pricing &amp; features
          </a>
          <a href="#esp" className="btn-ghost">
            See Features ↓
          </a>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
          marginBottom: '12px',
        }}>
          Windows 10 &amp; 11 · BSG &amp; Steam · Instant Delivery · 24/7 Support · CLOUD-DMA Available
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['From $35', 'Patch-ready', 'Discord support', 'Loot ESP filters'].map(label => (
            <span
              key={label}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '5px 10px',
                borderRadius: '100px',
                border: '1px solid var(--border-ghost)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 'clamp(20px, 4vw, 40px)',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          animation: 'bounce-y 2s ease-in-out infinite',
          opacity: 0.4,
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
