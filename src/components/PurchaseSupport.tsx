import { AnimatedSection } from './AnimatedSection';
import { BUY_URL } from '../seo/site';

export function PurchaseSupport() {
  return (
    <AnimatedSection>
      <section className="discord-cta-section" aria-labelledby="purchase-support-heading">
        <div className="discord-cta-card">
          <div style={{ paddingLeft: '8px', flex: 1, minWidth: 0 }}>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '10px',
            }}>
              <span aria-hidden="true" style={{ color: 'var(--accent-bright)' }}>✦</span>
              Ready to run Escape From Tarkov raids with full awareness?
            </p>
            <h2 id="purchase-support-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              Get Escape From Tarkov Hacks — instant delivery from $35.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
            }}>
              Player ESP, aimbot, loot ESP, extraction tracking, and no recoil. Patch-ready loader updates and 24/7 support after checkout.
            </p>
          </div>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="discord-cta-btn"
            style={{ textDecoration: 'none', color: 'var(--bg-void)' }}
          >
            PURCHASE
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
}
