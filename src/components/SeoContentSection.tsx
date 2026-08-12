import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { BUY_URL } from '../seo/site';

const CONTENT_BLOCKS = [
  {
    title: 'Tarkov ESP, Aimbot & Wallhack — Built for Wipes and PvP',
    body: `If you searched Escape From Tarkov cheats or Tarkov hacks, you want clear docs on Tarkov ESP, aimbot tuning, and wallhack — not vague marketing. TarkovHacks.net lists modules, pricing from $35, patch-ready loader updates, and in-depth map guides on the blog. BattlEye is live on EFT; any EFT hack can ban. Use checkout refund rules, keep the loader current, and read the feature list before you buy.`,
  },
  {
    title: 'Raid Clarity — Player ESP, Extracts & Grenade Awareness',
    body: `Player ESP, extract markers, and grenade warnings help you see fights before they start. Skeleton overlays, Scav and PMC identification, and distance readouts give you the information to rotate safely on Customs, Labs, Factory, and Streets of Tarkov. Pair player ESP with extraction point ESP so you never scramble for an exit when the timer drops.`,
  },
  {
    title: 'Economy Speed — Loot ESP with Price Filters',
    body: `Loot ESP with price filters speeds profit runs on Interchange, Lighthouse, Reserve, and wipe week key hunts. Container ESP marks med cases and weapon boxes. Quest item highlighting surfaces active objectives without tabbing out mid-raid. Route toward high-value loot instead of searching every room blindly.`,
  },
  {
    title: 'Patch-Ready Loader Updates After BattlEye',
    body: `Loader updates ship after BattlEye patches — active keys get fresh builds via Discord and the auto-update loader. External architecture targets EFT anti-cheat compatibility after every Battlestate build. No provider can promise permanent undetected status, but active maintenance and conservative defaults matter on live servers.`,
  },
  {
    title: 'Best Escape From Tarkov Cheats for 2026 Wipes',
    body: `Ranking well for Tarkov cheats means more than a menu screenshot — it is ESP clarity on Labs, aimbot tuning on Woods, and honest docs when BattlEye updates. We target the same searches you type: Escape From Tarkov cheats, Escape From Tarkov hacks, Tarkov ESP, EFT aimbot, and Tarkov wallhack. Start with the features list, watch the hero demo, then read map guides before checkout.`,
  },
  {
    title: 'Tarkov Cheat Guides — ESP, Aimbot, Loot & BattlEye',
    body: `Our blog covers ESP filters, Labs PvP, BattlEye notes, aimbot FOV and bone selection, loot routing, and wipe prep. Each guide explains practical raid scenarios with realistic expectations for post-patch maintenance. New players should start with the ESP guide, then move to aimbot and loot articles before enabling advanced combat assists in live raids.`,
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
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Why Players Use EFT Cheats</span>
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
            Escape From Tarkov Hacks — ESP, Aimbot &amp; Wallhack
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            Every core page for Tarkov cheats and EFT hacks on tarkovhacks.net: full features list, pricing from $35, patch-ready loader updates, and long-form raid guides.
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
              Ready to buy? Instant delivery · ESP &amp; aimbot · From $35. Explore our{' '}
              <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>Tarkov cheat guides</Link>
              {' '}for ESP, aimbot, and map tutorials, or{' '}
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                purchase Escape From Tarkov hacks
              </a>
              {' '}with instant loader access.
            </p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Instant Access
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
