export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const BLOG_CATEGORIES = ['All', 'ESP', 'Aimbot', 'Guide', 'Loot'] as const;

export const BLOG_POSTS_META: BlogPostMeta[] = [
  {
    slug: `escape-from-tarkov-cheats-esp-aimbot`,
    title: `Escape From Tarkov Cheats – ESP and Aimbot Features Explained`,
    category: `Guide`,
    date: `August 1, 2026`,
    readTime: `11 min read`,
    image: `/screenshots/ancient-eft-s1.webp`,
    excerpt:
      `A complete guide to Escape From Tarkov cheats — ESP overlays, Tarkov aimbot settings, no recoil, loot tracking, and what to expect when running EFT raids.`,
  },
  {
    slug: `escape-from-tarkov-esp-guide`,
    title: `Escape From Tarkov ESP – Player, Loot and Extraction ESP`,
    category: `ESP`,
    date: `July 28, 2026`,
    readTime: `12 min read`,
    image: `/screenshots/ancient-eft-s2.webp`,
    excerpt:
      `Learn how EFT ESP works in Tarkov raids — player wallhack, loot highlighting, extraction markers, Scav ID, and distance filters for Customs and Woods.`,
  },
  {
    slug: `eft-aimbot-no-recoil-guide`,
    title: `Escape From Tarkov Aimbot and No Recoil – Tarkov Cheat Features Explained`,
    category: `Aimbot`,
    date: `July 25, 2026`,
    readTime: `11 min read`,
    image: `/screenshots/ancient-eft-s1.webp`,
    excerpt:
      `Configure EFT aimbot and no recoil for Tarkov fights — FOV limits, bone selection, smoothing, visibility checks, and weapon recoil control for PMC runs.`,
  },
  {
    slug: `escape-from-tarkov-loot-esp-guide`,
    title: `Escape From Tarkov Loot ESP – Finding Containers, Quest Items and Valuable Loot`,
    category: `Loot`,
    date: `July 22, 2026`,
    readTime: `12 min read`,
    image: `/screenshots/ancient-eft-s2.webp`,
    excerpt:
      `Find valuable loot faster with Escape From Tarkov loot ESP — container tracking, quest item highlights, key spawns, and routes for Interchange and Reserve.`,
  },
  {
    slug: `battleye-streamproof-tarkov-cheats`,
    title: `BattlEye and Stream-Proof Tarkov Cheats – Stay Safe While Streaming`,
    category: `Guide`,
    date: `August 5, 2026`,
    readTime: `10 min read`,
    image: `/screenshots/ancient-eft-s1.webp`,
    excerpt:
      `How BattlEye works with Escape From Tarkov cheats, stream-proof overlay modes, screenshot protection, and realistic expectations after EFT patches.`,
  },
  {
    slug: `customs-pvp-player-esp-tarkov`,
    title: `Customs PvP with Player ESP – Dorms, Construction and Extract Rotations`,
    category: `ESP`,
    date: `August 3, 2026`,
    readTime: `9 min read`,
    image: `/screenshots/ancient-eft-s2.webp`,
    excerpt:
      `Use player ESP and wallhack overlays on Customs — Dorms fights, construction pushes, spawn reads, and extract timing for profitable PMC runs.`,
  },
  {
    slug: `extraction-esp-tarkov-raids`,
    title: `Extraction ESP for Tarkov Raids – Never Miss an Extract Again`,
    category: `Guide`,
    date: `July 30, 2026`,
    readTime: `10 min read`,
    image: `/screenshots/ancient-eft-s1.webp`,
    excerpt:
      `Extraction point ESP for Escape From Tarkov — conditional exits, co-op extracts, payment fees, and map-specific routing on Shoreline and Lighthouse.`,
  },
  {
    slug: `tarkov-cheat-loader-setup-windows`,
    title: `Tarkov Cheat Loader Setup on Windows – Install, Update and Configure`,
    category: `Guide`,
    date: `July 18, 2026`,
    readTime: `8 min read`,
    image: `/screenshots/ancient-eft-s2.webp`,
    excerpt:
      `Step-by-step Windows loader setup for Escape From Tarkov cheats — download, BattlEye compatibility checks, overlay hotkeys, and post-patch updates.`,
  }
];
