import { SITE_URL } from '../seo/site';

const SHARE_URL = encodeURIComponent(`${SITE_URL}/`);
const SHARE_TEXT = encodeURIComponent('Escape From Tarkov Hacks – ESP, Aimbot & Wallhack');

const SHARE_LINKS = [
  {
    label: 'Share on X',
    href: `https://twitter.com/intent/tweet?url=${SHARE_URL}&text=${SHARE_TEXT}`,
  },
  {
    label: 'Share on Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${SHARE_URL}`,
  },
  {
    label: 'Share on Reddit',
    href: `https://www.reddit.com/submit?url=${SHARE_URL}&title=${SHARE_TEXT}`,
  },
] as const;

const linkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8125rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.18s ease',
} as const;

export function SocialShare() {
  return (
    <div
      aria-label="Share this page"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '10px 18px',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}>
        Share
      </span>
      {SHARE_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
