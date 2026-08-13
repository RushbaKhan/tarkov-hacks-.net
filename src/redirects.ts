import cannibalRedirects from '../functions/cannibal-redirects.json';

/** Static path 301s — keep in sync with functions/_middleware.js PATH_REDIRECTS */
export const PATH_REDIRECTS: Record<string, string> = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/escape-from-tarkov-cheats': '/tarkov-cheats/',
	'/escape-from-tarkov-cheats/': '/tarkov-cheats/',
	'/tarkov-esp-hack': '/tarkov-esp/',
	'/tarkov-esp-hack/': '/tarkov-esp/',
	'/tarkov-aimbot-hack': '/tarkov-aimbot/',
	'/tarkov-aimbot-hack/': '/tarkov-aimbot/',
	'/best-tarkov-cheats': '/tarkov-cheats/',
	'/best-tarkov-cheats/': '/tarkov-cheats/',
	'/tarkov-cheats-2026': '/tarkov-cheats/',
	'/tarkov-cheats-2026/': '/tarkov-cheats/',
	'/undetected-tarkov-cheats': '/tarkov-cheats/',
	'/undetected-tarkov-cheats/': '/tarkov-cheats/',
	'/tarkov-mod-menu': '/tarkov-cheats/',
	'/tarkov-mod-menu/': '/tarkov-cheats/',
	'/tarkov-unlock-all': '/tarkov-cheats/',
	'/tarkov-unlock-all/': '/tarkov-cheats/',
	'/tarkov-soft-aim': '/tarkov-aimbot/',
	'/tarkov-soft-aim/': '/tarkov-aimbot/',
	'/tarkov-wallhack': '/tarkov-esp/',
	'/tarkov-wallhack/': '/tarkov-esp/',
	'/tarkov-cheat-download': '/setup/',
	'/tarkov-cheat-download/': '/setup/',
	'/battleye-bypass': '/updates/',
	'/battleye-bypass/': '/updates/',
	'/reviews/tarkov-radar-hack-review-vanlifefn': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-radar-hack-review-vanlifefn/': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-radar-hack-review-vanlifewz': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-radar-hack-review-vanlifewz/': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99': '/reviews/tarkov-soft-aim-review-ctrl-player99/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99/':
		'/reviews/tarkov-soft-aim-review-ctrl-player99/',
};

export const CANNIBAL_REDIRECTS = cannibalRedirects as Record<string, string>;

const BRAND_STUDIO = /^\/(?:brand-studio|__brand)(?:\/|$)/;

export function isBrandStudioPath(pathname: string): boolean {
	return BRAND_STUDIO.test(pathname);
}

function xmlTrailingSlashRedirect(pathname: string): string | null {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname: string): string | null {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export function resolvePathRedirect(pathname: string): string | null {
	return (
		PATH_REDIRECTS[pathname] ??
		CANNIBAL_REDIRECTS[pathname] ??
		xmlTrailingSlashRedirect(pathname) ??
		trailingSlashRedirect(pathname)
	);
}
