import { Link } from 'react-router-dom';
import { BUY_URL, SITE_NAME } from '../seo/site';
import { SiteLogo } from './SiteLogo';
import { BrandName } from './BrandName';
import { SocialShare } from './SocialShare';

const NAV = [
  { label: 'Homepage', to: '/' as const },
  { label: 'EFT Guides', to: '/blog' as const },
  { label: 'Privacy Policy', to: '/privacy' as const },
];

const footLink = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.18s ease',
} as const;

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border-ghost)',
      padding: `clamp(40px, 5vw, 56px) max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(24px, 4vw, 40px)',
          paddingBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 'min(100%, 240px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SiteLogo size={36} />
              <BrandName size="footer" />
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '320px',
              margin: 0,
            }}>
              Tarkov cheats and EFT hacks with ESP, aimbot, wallhack, loot filters, and patch-ready updates. Instant delivery from $35.
            </p>
          </div>

          <nav
            aria-label="Footer"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px 22px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
            }}
          >
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{ ...footLink }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
              >
                {label}
              </Link>
            ))}
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...footLink }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              Shop Now
            </a>
          </nav>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-ghost)',
          padding: '16px 0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <SocialShare />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 {SITE_NAME}. Not affiliated with Battlestate Games.
          </span>
        </div>
      </div>
    </footer>
  );
}
