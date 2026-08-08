import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SITE_URL = 'https://tarkovhacks.net';
const INDEXNOW_KEY = '7f3c9a2e-1b4d-4e8f-9c6a-2d5e8f1a3b7c';
const today = new Date().toISOString().slice(0, 10);
const root = resolve(process.cwd());
const publicDir = resolve(root, 'public');
const blogPostsPath = resolve(root, 'src/seo/blog-posts.ts');
const blogSource = readFileSync(blogPostsPath, 'utf8');

const blogEntries = [...blogSource.matchAll(
  /slug: [`']([^`']+)[`'][\s\S]*?date: [`']([^`']+)[`']/g,
)].map(([, slug, date]) => ({
  slug,
  lastmod: new Date(date).toISOString().slice(0, 10),
}));

const staticRoutes = [
  { loc: `${SITE_URL}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
  { loc: `${SITE_URL}/blog`, lastmod: today, changefreq: 'daily', priority: '0.9' },
  { loc: `${SITE_URL}/privacy`, lastmod: today, changefreq: 'yearly', priority: '0.4' },
];

const blogRoutes = blogEntries.map(({ slug, lastmod }) => ({
  loc: `${SITE_URL}/blog/${slug}`,
  lastmod,
  changefreq: 'weekly',
  priority: slug.includes('guide') || slug.includes('esp') || slug.includes('aimbot') ? '0.85' : '0.8',
}));

const urls = [...staticRoutes, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(publicDir, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);

console.log(`Generated sitemap with ${urls.length} URLs`);
console.log(`IndexNow key file: /${INDEXNOW_KEY}.txt`);

export { INDEXNOW_KEY, urls };
