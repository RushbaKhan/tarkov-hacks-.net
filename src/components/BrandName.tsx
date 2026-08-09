type BrandNameProps = {
  size?: 'nav' | 'footer';
};

export function BrandName({ size = 'nav' }: BrandNameProps) {
  const fontSize = size === 'footer' ? 'clamp(0.85rem, 2vw, 1.25rem)' : 'clamp(0.62rem, 1.8vw, 1.05rem)';

  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0.35em',
      lineHeight: 1.15,
      maxWidth: size === 'nav' ? 'min(52vw, 320px)' : '100%',
    }}>
      <span style={{
        background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Escape From Tarkov
      </span>
      <span style={{ color: '#ffffff' }}>Cheats</span>
    </span>
  );
}
