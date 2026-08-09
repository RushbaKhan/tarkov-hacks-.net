import { useRef, useEffect, useState } from 'react';

type VideoEmbedProps = {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  ariaLabel?: string;
};

export function VideoEmbed({ src, poster, className, style, priority = false, ariaLabel }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    if (!isLoaded) {
      video.src = src;
      video.load();
      setIsLoaded(true);
    }

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [isVisible, isLoaded, src]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', background: 'var(--bg-void)', ...style }} className={className}>
      {isVisible ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label={ariaLabel}
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        />
      ) : (
        poster ? (
          <img
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : null
      )}
    </div>
  );
}
