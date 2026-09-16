import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ children, minHeight = '50vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }} className="transition-opacity duration-700">
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
