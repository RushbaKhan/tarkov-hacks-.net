const loaders: Record<string, () => Promise<{ body: string }>> = {
  'escape-from-tarkov-cheats-esp-aimbot': () => import('./bodies/escape-from-tarkov-cheats-esp-aimbot'),
  'escape-from-tarkov-esp-guide': () => import('./bodies/escape-from-tarkov-esp-guide'),
  'eft-aimbot-no-recoil-guide': () => import('./bodies/eft-aimbot-no-recoil-guide'),
  'escape-from-tarkov-loot-esp-guide': () => import('./bodies/escape-from-tarkov-loot-esp-guide'),
  'battleye-streamproof-tarkov-cheats': () => import('./bodies/battleye-streamproof-tarkov-cheats'),
  'customs-pvp-player-esp-tarkov': () => import('./bodies/customs-pvp-player-esp-tarkov'),
  'extraction-esp-tarkov-raids': () => import('./bodies/extraction-esp-tarkov-raids'),
  'tarkov-cheat-loader-setup-windows': () => import('./bodies/tarkov-cheat-loader-setup-windows'),
};

export async function loadBlogBody(slug: string): Promise<string | null> {
  const loader = loaders[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.body;
}
