import { VideoEmbed } from './VideoEmbed';
import { VIDEO_DEMO, VIDEO_HERO, VIDEO_HERO_POSTER } from '../seo/site';

export function SafetySection() {
  return (
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
            <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Patch-Ready · BattlEye Bypass</span>
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
              'Private player ESP, precision aimbot, and wallhack for Escape From Tarkov raids — patch-ready loader updates after BattlEye changes, loot filters for Interchange and Lighthouse, and Discord setup help after checkout.',
              'After every EFT wipe or hotfix, compatible builds ship through the loader — usually without a full re-download. Player ESP, loot ESP, extraction tracking, and aimbot stay aligned with live servers.',
              'Plans start from $35 with instant delivery, 24/7 support, and Windows 10 & 11 compatibility on both the BSG launcher and Steam builds.',
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
              background: 'var(--bg-void)',
            }}>
              <VideoEmbed
                src={VIDEO_HERO}
                poster={VIDEO_HERO_POSTER}
                eager
                ariaLabel="Escape From Tarkov cheat demonstration with ESP and aimbot"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-ghost)',
              overflow: 'hidden',
              aspectRatio: '16/9',
              position: 'relative',
              background: 'var(--bg-void)',
            }}>
              <VideoEmbed
                src={VIDEO_DEMO}
                eager
                ariaLabel="Escape From Tarkov cheat overlay and feature demonstration"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
  );
}
