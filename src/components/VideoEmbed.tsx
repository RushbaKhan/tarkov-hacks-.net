import { useRef, useEffect } from 'react';

type VideoEmbedProps = {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Load and play immediately — no lazy gate */
  eager?: boolean;
  ariaLabel?: string;
};

export function VideoEmbed({
  src,
  poster,
  className,
  style,
  eager = false,
  ariaLabel,
}: VideoEmbedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (eager) {
      void video.play().catch(() => undefined);
      return;
    }

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15, rootMargin: '80px' },
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [eager, src]);

  return (
    <div
      style={{ width: '100%', height: '100%', background: 'var(--bg-void)', ...style }}
      className={className}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload={eager ? 'auto' : 'metadata'}
        {...(poster ? { poster } : {})}
        aria-label={ariaLabel}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          background: 'var(--bg-void)',
        }}
      />
    </div>
  );
}
