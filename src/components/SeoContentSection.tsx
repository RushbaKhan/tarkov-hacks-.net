import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { SEO_CONTENT_SECTIONS, fillBrandTokens } from '../seo/brand-content';
import { BUY_URL } from '../seo/site';

export function SeoContentSection() {
  return (
    <AnimatedSection>
      <section
        id="eft-hacks-guide"
        aria-labelledby="seo-content-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Why Players Choose Tarkov Hacks</span>
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
            {fillBrandTokens('Tarkov Hacks — Undetected ESP, Soft Aim & Radar')}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            {fillBrandTokens(
              '{brand} is the undetected {primaryKeyword} package for Windows PC — ESP wallhack, 2D radar, and soft aim with {antiCheat} maintenance after every major patch.',
            )}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {SEO_CONTENT_SECTIONS.map(block => (
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
                  marginBottom: 'body2' in block && block.body2 ? 12 : 0,
                }}>
                  {block.body}
                </p>
                {'body2' in block && block.body2 ? (
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {block.body2}
                  </p>
                ) : null}
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
              Ready to compare plans? Explore our{' '}
              <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>Tarkov Intel blog</Link>
              {' '}for raid guides, or{' '}
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                get Tarkov Hacks access
              </a>
              {' '}with instant delivery after checkout.
            </p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Access
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
