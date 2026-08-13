/**
 * Cloudflare Worker — host canonicalization and path redirects before static assets.
 * Canonical site: https://tarkovhacks.net (matches brand.url)
 *
 * Redirects live in src/redirects.ts (not public/_redirects — Workers assets cap at 100 rules).
 */
import { isBrandStudioPath, resolvePathRedirect } from './redirects';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'tarkovhacks.net';

const LEGACY_HOSTS = new Set(['www.tarkovhacks.net']);

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const canonical = canonicalUrl(request);
		const url = canonical ?? new URL(request.url);

		if (isBrandStudioPath(url.pathname)) {
			const rewrite = new URL('/404.html', url.origin);
			rewrite.search = url.search;
			return env.ASSETS.fetch(new Request(rewrite.toString(), request));
		}

		const pathRedirect = resolvePathRedirect(url.pathname);
		if (pathRedirect) {
			const target = new URL(pathRedirect + url.search, url.origin);
			return Response.redirect(target.toString(), 301);
		}

		if (canonical) {
			return Response.redirect(url.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
