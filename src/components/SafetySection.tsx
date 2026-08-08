import { AnimatedSection } from './AnimatedSection';
import { VideoEmbed } from './VideoEmbed';
import { VIDEO_DEMO, VIDEO_HERO } from '../seo/site';

export function SafetySection() {
  return (
    <AnimatedSection>
      <section style={{
        position: 'relative',
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(300px, 40vw, 600px)',
          height: 'clamp(300px, 40vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          animation: 'orb-drift-2 22s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="safety-split-grid" style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <div>
            <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>BattlEye Bypass</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Built for Escape From Tarkov.<br />
              <span className="gradient-text">Engineered to Stay Safe.</span>
            </h2>
            {[
              'Our Escape From Tarkov cheat is the undetected ESP and aimbot package built for EFT raids. It bypasses BattlEye with external architecture, stream-proof mode, and rapid updates after every patch so your loader stays aligned with live servers.',
              'After every EFT update, compatible builds ship through the loader — usually without a full re-download. Player ESP, loot ESP, extraction tracking, and aimbot stay available when you need them most.',
              'Need help with setup? Dedicated guides, video walkthroughs, and 24/7 support are available. Get direct answers about EFT ESP configuration, BattlEye compatibility, and CLOUD-DMA on AWS.',
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>{p}</p>
            ))}
          </div>

          <div className="safety-videos-col" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(168,85,247,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-ghost)',
              overflow: 'hidden',
              aspectRatio: '16/9',
              position: 'relative',
            }}>
              <VideoEmbed
                src={VIDEO_HERO}
                ariaLabel="Escape From Tarkov cheat demonstration with ESP and aimbot"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-ghost)',
              overflow: 'hidden',
            }}>
              <VideoEmbed
                src={VIDEO_DEMO}
                ariaLabel="Escape From Tarkov ESP overlay and loot tracking demo"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
