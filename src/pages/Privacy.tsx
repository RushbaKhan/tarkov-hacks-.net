import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

export function PrivacyPage() {
  return (
    <main style={{
      paddingTop: 'clamp(100px, 14vw, 120px)',
      paddingBottom: 'clamp(60px, 8vw, 80px)',
      paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
      paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
      background: 'var(--bg-void)',
      minHeight: '70vh',
    }}>
      <AnimatedSection>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Legal</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: 16,
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            marginBottom: 32,
          }}>
            Last updated: August 8, 2026
          </p>

          {[
            {
              title: 'Overview',
              body: 'TarkovHacks.net ("we", "our", "the site") provides information about Escape From Tarkov cheat features, guides, and product access links. This policy explains what data we may collect when you visit the website and how it is used.',
            },
            {
              title: 'Information We Collect',
              body: 'When you browse tarkovhacks.net, standard web server logs may record your IP address, browser type, referring page, pages viewed, and timestamps. If you contact support through linked channels, information you provide voluntarily is handled by those platforms under their own policies.',
            },
            {
              title: 'Cookies & Analytics',
              body: 'The site may use essential cookies for basic functionality. We do not sell personal data. Third-party analytics or payment processors linked from BUY HACKS buttons operate under their own privacy terms when you leave this website.',
            },
            {
              title: 'External Links',
              body: 'Purchase links, Discord support, and embedded media may redirect to third-party services. We are not responsible for the content or privacy practices of external websites. Review their policies before submitting personal or payment information.',
            },
            {
              title: 'Children',
              body: 'This website is not directed at individuals under 18. We do not knowingly collect information from minors.',
            },
            {
              title: 'Changes',
              body: 'We may update this privacy policy from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised policy.',
            },
            {
              title: 'Contact',
              body: 'For privacy-related questions, use the support channels linked from our homepage or Discord community.',
            },
          ].map(section => (
            <section key={section.title} style={{ marginBottom: 28 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: 10,
              }}>
                {section.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0,
              }}>
                {section.body}
              </p>
            </section>
          ))}

          <p style={{ marginTop: 32 }}>
            <Link to="/" style={{ color: 'var(--accent-bright)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
              ← Back to Home
            </Link>
          </p>
        </article>
      </AnimatedSection>
    </main>
  );
}
