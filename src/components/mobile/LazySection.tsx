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
      // Require the section to actually enter the screen by 50px before triggering the load
      { rootMargin: '-50px 0px 0px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ minHeight: isVisible ? 'auto' : minHeight }} 
      className={isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
