interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'tarkovhacks.net';

function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  let changed = false;

  if (host === `www.${CANONICAL_HOST}` || host.startsWith('www.')) {
    url.hostname = CANONICAL_HOST;
    changed = true;
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    changed = true;
  }

  if (changed) {
    return Response.redirect(url.toString(), 301);
  }

  return null;
}

function stripLangQueryRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (!url.searchParams.has('lang')) {
    return null;
  }

  url.searchParams.delete('lang');
  return Response.redirect(url.toString(), 301);
}

function withResponseHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  const contentType = headers.get('content-type') ?? '';

  if (contentType.includes('text/html')) {
    headers.set('Content-Type', 'text/html; charset=utf-8');
  }

  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) {
      return withResponseHeaders(redirect);
    }

    const langRedirect = stripLangQueryRedirect(request);
    if (langRedirect) {
      return withResponseHeaders(langRedirect);
    }

    const response = await env.ASSETS.fetch(request);
    return withResponseHeaders(response);
  },
};
