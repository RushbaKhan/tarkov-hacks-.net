/**
 * SINGLE SOURCE OF TRUTH for tarkovhacks.net
 */
export const brand = {
	name: 'Tarkov Hacks',
	shortName: 'Tarkov Hacks',
	url: 'https://tarkovhacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@tarkovhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fescape-from-tarkov',

	game: 'Escape from Tarkov',
	antiCheat: 'BattlEye',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Tarkov Hacks logo',
	defaultOgImage: '/images/tarkov-cheats-hero-1024w.webp',
	heroImage: '/images/tarkov-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	keywords: {
		primary: 'tarkov hacks',
		list: [
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
	},

	seo: {
		homeTitle: 'Tarkov Hacks | Official Windows PC Site',
		homeDescription:
			'Official Tarkov Hacks site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a raid on Windows PC today.',
		previewTitle: 'Tarkov Hacks | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected tarkov hacks for Escape from Tarkov on Windows PC. ESP, soft aim, radar, and BattlEye patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can raid faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Escape from Tarkov — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Escape from Tarkov on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who raid.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} hack package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Escape from Tarkov on Windows PC.',
		blogLabel: 'Tarkov Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro:
			'{brand} for Escape from Tarkov — ESP wallhack, soft aim, 2D radar, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'ESP overlay in Escape from Tarkov',
				caption: 'Player ESP boxes and distance readouts during a raid',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'Wallhack visibility for Tarkov raids',
				caption: 'PMC and Scav outlines through walls and terrain',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'Soft aim assist for Tarkov',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/tarkov-cheats-aimbot-view.webp',
				title: 'Aimbot view in Tarkov Hacks',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/tarkov-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near extracts',
			},
			{
				src: '/images/tarkov-cheats-raid.webp',
				title: 'Tarkov Hacks license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
