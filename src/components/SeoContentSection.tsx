import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { BUY_URL } from '../seo/site';

const CONTENT_BLOCKS = [
  {
    title: 'What Are Escape From Tarkov Hacks?',
    body: `Escape From Tarkov cheats are external tools built for EFT raids on Windows. Our package combines player ESP with skeleton overlay, loot ESP, extraction point ESP, Scav and PMC identification, aimbot with distance limits, no recoil, container ESP, quest item highlighting, stream-proof mode, and optional CLOUD-DMA on AWS. Whether you run solo PMC raids or squad extracts, EFT cheats give you the information to survive longer, find valuable loot faster, and extract safely without guessing where threats are hiding.`,
  },
  {
    title: 'Escape From Tarkov Aimbot — Precision for Every Engagement',
    body: `The Tarkov aimbot is configurable for close-quarters fights in Factory and longer engagements on Woods or Shoreline. Set activation hotkeys, FOV, target bone, smoothing, and maximum distance. Visibility checks prevent tracking through solid cover, while humanized smoothing keeps movement natural during PvP. Pair aimbot with no recoil for all weapons to stabilize automatic fire during sustained fights against PMCs and Scavs.`,
  },
  {
    title: 'Escape From Tarkov ESP & Wallhack — Full Raid Awareness',
    body: `EFT ESP reveals players, health, stamina, distance, and team status through walls and terrain. Player ESP with skeleton overlay helps you track movement before someone swings a corner. Loot ESP highlights weapons, meds, keys, and valuables. Container ESP marks med cases and weapon boxes. Extraction point ESP shows available exits so you plan routes early. Quest item highlighting surfaces active objectives without constantly checking your tasks menu mid-raid.`,
  },
  {
    title: 'Loot ESP, Container ESP & Extraction Tracking',
    body: `Tarkov rewards efficient loot routing. Loot ESP finds rare items instantly across the map. Container ESP focuses searches on med cases, weapon boxes, and stashes that actually hold profit. Extraction point ESP marks your exits — critical when the raid timer drops and you need a safe path out. Combined with Scav and PMC identification, you avoid unnecessary fights and push toward high-value areas with confidence.`,
  },
  {
    title: 'BattlEye Bypass, Stream-Proof Mode & Tarkov Cheat Updates',
    body: `Our Escape From Tarkov cheat runs externally with a BattlEye bypass system focused on patch compatibility. Stream-proof mode hides overlays from OBS, Discord, and capture software. Updates ship through the loader after EFT patches — usually within hours of a new build. CLOUD-DMA and AWS options provide remote execution for users who want maximum local isolation. No cheat eliminates ban risk entirely, but active maintenance and conservative defaults matter on live servers.`,
  },
  {
    title: 'System Requirements & Getting Started',
    body: `Escape From Tarkov cheats support Windows 10 and Windows 11 on Intel and AMD systems with 8 GB RAM or more. After purchase you receive instant loader access, setup instructions, and 24/7 support. Configuration takes under two minutes: adjust Windows settings, launch the loader, open EFT, and enable ESP, aimbot, or loot tracking from the overlay. Read our blog for detailed guides on EFT ESP, aimbot setup, loot ESP, and staying updated after every patch.`,
  },
];

export function SeoContentSection() {
  return (
    <AnimatedSection>
      <section
        id="eft-cheats-guide"
        aria-labelledby="seo-content-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Complete Guide</span>
          <h2
            id="seo-content-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Escape From Tarkov Hacks — ESP, Aimbot &amp; Wallhack Explained
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            Everything you need to know about EFT cheats — player ESP, loot ESP, extraction tracking, aimbot, no recoil, BattlEye compatibility, and how to get started on tarkovhacks.net.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {CONTENT_BLOCKS.map(block => (
              <article key={block.title}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: 10,
                }}>
                  {block.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {block.body}
                </p>
              </article>
            ))}
          </div>

          <div style={{
            marginTop: 36,
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(168,85,247,0.06)',
            border: '1px solid rgba(168,85,247,0.18)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}>
              Ready to run EFT raids with full awareness? Explore our{' '}
              <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>Tarkov cheats blog guides</Link>
              {' '}for in-depth ESP and aimbot tutorials, or{' '}
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                get Escape From Tarkov cheats
              </a>
              {' '}with instant delivery and 24/7 support.
            </p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              BUY HACKS
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
