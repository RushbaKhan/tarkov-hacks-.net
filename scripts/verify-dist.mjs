#!/usr/bin/env node
/** Fail the deploy if Astro-era artifacts (_redirects) are present in dist. */
import { accessSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const forbidden = ['_redirects', '_routes.json'];

for (const name of forbidden) {
	try {
		accessSync(join(dist, name));
		console.error(`✗ dist/${name} must not exist — remove Astro redirects before deploy`);
		process.exit(1);
	} catch {
		/* ok */
	}
}

function walk(dir, hits = []) {
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) walk(path, hits);
		else if (entry === '_redirects' || entry.endsWith('.astro')) hits.push(path);
	}
	return hits;
}

const stray = walk(dist);
if (stray.length) {
	console.error('✗ Forbidden deploy artifacts found:');
	for (const p of stray) console.error('  ', p);
	process.exit(1);
}

console.log('✓ dist verified — no _redirects or Astro artifacts');
