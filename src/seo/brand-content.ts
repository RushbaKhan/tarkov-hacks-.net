/**
 * SEO-1.1 template content adapted for tarkovhacks.net (Vite SPA).
 * Single source for meta, hero, FAQ, and long-form homepage copy.
 */
export const brand = {
	name: 'Tarkov Hacks',
	shortName: 'Tarkov Hacks',
	url: 'https://tarkovhacks.net',
	supportEmail: 'support@tarkovhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fescape-from-tarkov',
	game: 'Escape from Tarkov',
	antiCheat: 'BattlEye',
	primaryKeyword: 'tarkov hacks',
	keywords: [
		'tarkov hacks',
		'escape from tarkov hacks',
		'tarkov cheats',
		'escape from tarkov cheats',
		'tarkov esp',
		'tarkov aimbot',
		'tarkov wallhack',
		'undetected tarkov hacks',
		'best tarkov hacks',
	] as const,
	plans: {
		monthly: { label: 'Monthly', price: 35 },
		lifetime: { label: 'Lifetime', price: 150 },
	},
} as const;

export function fillBrandTokens(text: string): string {
	return text
		.replace(/\{brand\}/g, brand.name)
		.replace(/\{game\}/g, brand.game)
		.replace(/\{antiCheat\}/g, brand.antiCheat)
		.replace(/\{email\}/g, brand.supportEmail)
		.replace(/\{primaryKeyword\}/g, brand.primaryKeyword);
}

/** SEO-1.1 homeTitle / homeDescription — token-filled, SERP-safe lengths */
export const HOME_TITLE = fillBrandTokens('Tarkov Hacks | Official Windows PC Site');
export const HOME_DESCRIPTION = fillBrandTokens(
	'Official Tarkov Hacks site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
);

export const HERO_COPY = {
	badge: 'Undetected · ESP · Soft Aim · Radar',
	h1Primary: 'Tarkov Hacks',
	h1Secondary: 'Undetected ESP, Soft Aim & Radar',
	lede: fillBrandTokens(
		'Undetected ESP, soft aim, and radar for Escape from Tarkov on Windows PC. Monthly and lifetime plans with BattlEye maintenance after patches.',
	),
	ctaPrimary: 'Get Access',
	ctaSecondary: 'See pricing & features',
	chips: ['ESP / wallhack', 'Soft aim', '2D radar', 'Patch updates'] as const,
	footnote: 'Windows 10 & 11 · BSG & Steam · Instant delivery · Setup support',
};

/** SEO-1.1 home page sections (pages-en.mjs → adapted for Hacks) */
export const SEO_CONTENT_SECTIONS = [
	{
		title: fillBrandTokens('Why players choose {primaryKeyword} in 2026'),
		body: fillBrandTokens(
			'{game} rewards map awareness. {brand} combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable soft aim so you can read fights before committing — in PMC raids and Scav runs.',
		),
		body2: fillBrandTokens(
			'Official seasons, patches, and anti-cheat updates come from Battlestate Games and {antiCheat}. We rebuild ESP, radar, and aimbot modules when those patches require maintenance. Licenses ship digitally after payment — monthly ($35) and lifetime ($150) plans include {antiCheat} rebuilds when patches require updates.',
		),
	},
	{
		title: fillBrandTokens('ESP wallhack, radar hack, and soft aim in one license'),
		body: fillBrandTokens(
			'Instead of stacking separate tools, {brand} bundles player ESP wallhack, loot markers, 2D radar overlays, and soft aim profiles in one undetected package built for PMC raids and Scav runs — covering both “tarkov hacks” and “escape from tarkov hacks” search intent.',
		),
		body2: fillBrandTokens(
			'Before patch days, check Battlestate service health, then confirm our maintenance notes so you are not queueing on an outdated build. After checkout, follow setup steps and keep support bookmarked for license questions.',
		),
	},
	{
		title: fillBrandTokens('What {primaryKeyword} include on Windows PC'),
		body: fillBrandTokens(
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable soft aim in one license. Player boxes, distance readouts, extract cues, and toggleable overlay categories help you control engagement range during rotations on Customs, Labs, Factory, and Streets of Tarkov.',
		),
	},
	{
		title: fillBrandTokens('Undetected status and {antiCheat} maintenance'),
		body: fillBrandTokens(
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. No hack can guarantee permanent undetected status — maintenance and responsible use matter. Check status notes before you queue after a major patch.',
		),
	},
	{
		title: fillBrandTokens('Pricing, delivery, and support for {brand}'),
		body: fillBrandTokens(
			'Monthly ($35) and lifetime ($150) plans include the same ESP, soft aim, and radar features. After payment is confirmed, license details are delivered digitally through checkout. Email {email} with your order ID for setup, delivery, or billing help.',
		),
	},
] as const;

/** SEO-1.1 homeFaqs — adapted for Hacks branding */
const HOME_FAQ_RAW = [
	{
		q: 'What is {brand}?',
		a: '{brand} is an undetected {primaryKeyword} package for Escape from Tarkov on Windows PC. It includes ESP wallhack, 2D radar, and soft aim controls, with {antiCheat} maintenance and setup support.',
	},
	{
		q: 'Are {primaryKeyword} undetected in 2026?',
		a: '{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. No hack can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	{
		q: 'Does this work in PMC raids and Scav runs?',
		a: 'Yes. ESP, radar, and soft aim are built for {game} raid flow — reading PMCs and Scavs, spotting loot, and staying aware near extracts.',
	},
	{
		q: 'What is included — ESP, wallhack, radar, or soft aim?',
		a: '{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable soft aim in one license. See the features section for the full list.',
	},
	{
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review.',
	},
	{
		q: 'Where do I check updates after an Escape from Tarkov or {antiCheat} patch?',
		a: 'Maintenance notes are posted when an Escape from Tarkov or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
	},
	{
		q: 'How do I contact support?',
		a: 'Email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
] as const;

export const HOME_FAQ = HOME_FAQ_RAW.map(({ q, a }) => ({
	q: fillBrandTokens(q),
	a: fillBrandTokens(a),
}));

/** Static HTML blocks for index.html crawlers (SEO-1.1 home intro + sections) */
export const STATIC_CRAWL_SECTIONS = [
	{
		h2: fillBrandTokens('Tarkov Hacks — Undetected ESP, Soft Aim & Radar'),
		p: fillBrandTokens(
			'{brand} is the undetected {primaryKeyword} package for Windows PC — built for Escape from Tarkov. Tarkov ESP wallhack, 2D radar, and soft aim with {antiCheat} maintenance after every major patch.',
		),
	},
	...SEO_CONTENT_SECTIONS.map((s) => ({
		h2: s.title,
		p: [s.body, 'body2' in s ? s.body2 : ''].filter(Boolean).join(' '),
	})),
] as const;
