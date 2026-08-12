import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';

const espFeatures = [
  { name: 'Player ESP with skeleton overlay', desc: 'See PMCs and Scavs through walls with bone structure, distance tags, and health bars for every engagement.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>) },
  { name: 'Scav and PMC identification', desc: 'Separate AI Scavs, player Scavs, and PMCs with distinct colors so you know who is pushing your angle.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>) },
  { name: 'Stamina and health display', desc: 'Track opponent stamina and health before committing to a fight — push wounded targets or disengage early.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>) },
  { name: 'Extraction point ESP', desc: 'Mark available extracts for your raid, including conditional exits, so you route safely under timer pressure.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>) },
  { name: 'Distance display', desc: 'Exact range to players and loot helps you control engagement distance on maps like Customs, Woods, and Shoreline.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="12" x2="22" y2="12"/><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>) },
  { name: 'Visibility check', desc: 'Filter overlays by line-of-sight and distance so your EFT ESP stays readable during busy raids.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
];

const lootFeatures = [
  { label: 'Loot ESP', desc: 'Find rare items instantly — weapons, meds, keys, and high-value loot glow through walls and across the map.' },
  { label: 'Container ESP', desc: 'Med cases, weapon boxes, and stashes are marked so you skip empty rooms and hit profitable routes.' },
  { label: 'Quest item highlighting', desc: 'Active quest objectives surface on the overlay so you complete tasks without tabbing out mid-raid.' },
  { label: 'Maximum distance control', desc: 'Separate range sliders for players, loot, and containers keep your HUD clean on large maps.' },
];

const aimbotFeatures = [
  { name: 'Aimbot with distance limits', desc: 'Set FOV, smoothing, and max range so aim assistance stays controlled in CQB and mid-range fights.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/></svg>) },
  { name: 'No recoil for all weapons', desc: 'Compensate weapon kick during automatic fire for more consistent follow-up shots in PvP and PvE.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>) },
  { name: 'Bone selection', desc: 'Target head, thorax, or limbs with configurable priority for different weapon classes and ranges.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="14"/></svg>) },
  { name: 'Humanized smoothing', desc: 'Natural movement curves reduce snap behavior during intense firefights on Factory and Labs.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/></svg>) },
  { name: 'Customizable hotkey & FOV', desc: 'Bind activation to any key and tune the aimbot field of view for your playstyle.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>) },
  { name: 'Visibility check', desc: 'Aim assistance respects line-of-sight so you do not track targets through solid cover.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
];

const safetyFeatures = [
  { label: 'BattlEye bypass system', desc: 'External architecture with active patch maintenance designed for EFT anti-cheat compatibility.' },
  { label: 'Stream-proof mode', desc: 'Hide overlays from OBS, Discord, and most capture software when streaming or recording.' },
  { label: '24/7 Support', desc: 'Ticket and Discord support for setup, updates, and configuration help any time.' },
  { label: 'Auto-update loader', desc: 'Compatible builds ship after EFT patches without full re-downloads in most cases.' },
  { label: 'CLOUD-DMA option', desc: 'Optional remote execution on isolated cloud hardware for users who want maximum local separation.' },
  { label: 'AWS option', desc: 'Deploy CLOUD-DMA on Amazon Web Services for low-latency remote cheat execution.' },
];

interface FeatureCardProps {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accentColor?: string;
}

function FeatureCard({ name, desc, icon, accentColor = 'var(--accent)' }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card feature-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(20px, 2.5vw, 28px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        borderColor: hovered ? 'var(--border-bright)' : 'var(--border-ghost)',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'rgba(168,85,247,0.12)',
        border: '1px solid rgba(168,85,247,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accentColor,
        marginBottom: '14px',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '8px',
      }}>{name}</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}>{desc}</p>
    </div>
  );
}

function BulletItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li style={{
      display: 'flex',
      gap: '8px',
      paddingBottom: '10px',
      borderBottom: '1px solid var(--border-ghost)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      listStyle: 'none',
    }}>
      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>•</span>
      <span>
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</strong>
        {' – '}
        {desc}
      </span>
    </li>
  );
}

export function FeaturesGrid() {
  return (
    <>
      <section id="esp" style={{
        background: 'var(--bg-base)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Escape From Tarkov ESP</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                EFT ESP Features{' '}
                <span className="gradient-text">Total Awareness</span>
                {' '}in Every Raid
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                Escape From Tarkov ESP gives you raid clarity — player ESP with skeleton overlay,
                extract markers, Scav and PMC identification, and grenade awareness so you see fights before they start.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="features-split-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>Player ESP</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}>
                  Full visual control over every PMC and Scav on the map. Track skeleton lines, measure distance,
                  and read health before you commit to a fight on Interchange, Reserve, or Streets of Tarkov.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {espFeatures.map(f => (
                    <li key={f.name} style={{ display: 'flex', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{f.name}</strong>
                        {' – '}
                        {f.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
              }}>
                {espFeatures.map(f => <FeatureCard key={f.name} {...f} />)}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Loot ESP &amp; Container ESP – <span className="gradient-text">Find Valuable Loot Fast</span></h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>Loot ESP with price filters for Interchange, Lighthouse, and quest keys on wipe week. Container ESP and quest item highlighting cut search time on every raid.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {lootFeatures.map(f => <BulletItem key={f.label} label={f.label} desc={f.desc} />)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(40px, 6vw, 64px) max(16px, env(safe-area-inset-right), 4vw)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>
                Escape From Tarkov <span className="gradient-text">In-Game</span>
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}>
                Real EFT cheat interface screenshots with player ESP and loot overlays.
              </p>
            </div>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16/9',
              background: 'var(--bg-void)',
            }}>
              <ScreenshotSlider
                interval={4500}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>Escape From Tarkov Aimbot</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Tarkov Aimbot &amp; No Recoil{' '}
                <span className="gradient-text">Combat Control</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                The Tarkov aimbot includes FOV, bone selection, distance caps, and smoothing for map-specific presets.
                Pair it with no recoil for controlled engagements on Factory, Woods, and Shoreline.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              {aimbotFeatures.map(f => (
                <FeatureCard key={f.name} name={f.name} desc={f.desc} icon={f.icon} accentColor="var(--accent-bright)" />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Tarkov Cheat Updates &amp; Safety – <span className="gradient-text">Built for BattlEye</span></h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {safetyFeatures.map(f => <BulletItem key={f.label} label={f.label} desc={f.desc} />)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
