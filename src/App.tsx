import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { BLOG_POSTS_META } from './seo/blog-meta';
import { I18nProvider } from './i18n';
import { DEFAULT_OG_IMAGE, Seo } from './components/Seo';
import { SmoothScroll } from './components/SmoothScroll';
import { HOME_TITLE, HOME_DESCRIPTION } from './seo/constants';
import { HOME_FAQ, BUY_URL, LOGO_URL_LOCAL, SITE_NAME, SITE_URL } from './seo/site';
import { buildProductSchema } from './seo/product-schema';
import './globals.css';

const PrivacyPage = lazy(() => import('./pages/Privacy').then(m => ({ default: m.PrivacyPage })));
const BlogListPage = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPostPage })));

function PageFallback() {
  return <div style={{ minHeight: '40vh', background: 'var(--bg-void)' }} aria-hidden="true" />;
}

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

const FAQ_SCHEMA = HOME_FAQ.map(({ q, a }) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: { '@type': 'Answer', text: a },
}));

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  if (currentPath === '/blog') {
    return (
      <Seo
        title="Escape From Tarkov Cheats Blog – ESP, Aimbot & Loot Guides"
        description="Expert guides on EFT ESP, player and loot tracking, aimbot setup, no recoil, BattlEye compatibility, and Tarkov cheat updates."
        path="/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'TarkovHacks.net Blog',
          description: 'Escape From Tarkov cheat guides covering ESP, aimbot, loot ESP, and raid strategy',
          url: `${SITE_URL}/blog`,
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: { '@type': 'ImageObject', url: LOGO_URL_LOCAL },
          },
        }}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_POSTS_META.find(entry => entry.slug === slug);
    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = `${SITE_URL}${canonicalPath}`;
      const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;
      return (
        <Seo
          title={`${post.title} | TarkovHacks.net`}
          description={post.excerpt}
          path={canonicalPath}
          image={imageUrl}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                datePublished: toIsoDate(post.date),
                author: { '@type': 'Organization', name: SITE_NAME },
                publisher: {
                  '@type': 'Organization',
                  name: SITE_NAME,
                  logo: { '@type': 'ImageObject', url: LOGO_URL_LOCAL },
                },
                url: canonicalUrl,
                image: imageUrl || DEFAULT_OG_IMAGE,
                mainEntityOfPage: canonicalUrl,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
                  { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
                ],
              },
            ],
          }}
        />
      );
    }
  }

  if (currentPath === '/privacy') {
    return (
      <Seo
        title="Privacy Policy | TarkovHacks.net"
        description="Privacy policy for TarkovHacks.net — how we handle visitor data, cookies, and third-party links on our Escape From Tarkov cheats website."
        path="/privacy"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy',
          url: `${SITE_URL}/privacy`,
          isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
        }}
      />
    );
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      structuredData={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: HOME_DESCRIPTION,
            inLanguage: 'en-US',
            publisher: { '@type': 'Organization', name: SITE_NAME, logo: LOGO_URL_LOCAL },
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/blog?search={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            url: `${SITE_URL}/`,
            inLanguage: 'en-US',
            isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            ],
          },
          {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: LOGO_URL_LOCAL,
            sameAs: [BUY_URL],
          },
          buildProductSchema('Escape From Tarkov Cheats', HOME_DESCRIPTION),
          {
            '@type': 'ItemList',
            name: 'TarkovHacks.net Site Pages',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', url: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', url: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: 'Privacy', url: `${SITE_URL}/privacy` },
              ...BLOG_POSTS_META.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 4,
                name: post.title,
                url: `${SITE_URL}/blog/${post.slug}`,
              })),
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: FAQ_SCHEMA,
          },
        ],
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <SmoothScroll />
        <RouteSeo />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Suspense fallback={<PageFallback />}><BlogListPage /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<PageFallback />}><BlogPostPage /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<PageFallback />}><PrivacyPage /></Suspense>} />
        </Routes>
        <Footer />
      </I18nProvider>
    </BrowserRouter>
  );
}
