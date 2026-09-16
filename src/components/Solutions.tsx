import React, { useEffect, useRef } from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';

interface SolutionsProps {
  onOpenModal: () => void;
}

const copyBlocks = [
  {
    icon: <TrendingUp className="h-12 w-12 text-accent-300" />,
    headline: "Stop Losing Money on Manual Processes",
    subheadline: "Every minute spent on repetitive tasks is revenue walking out the door",
    copy: "Respond faster and follow up consistently.",
    cta: "Calculate Your Lost Revenue",
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Target className="h-12 w-12 text-accent-300" />,
    headline: "Turn More Website Visitors Into Qualified Leads",
    subheadline: "97% of visitors leave without converting. We help capture and qualify the ones you're missing.",
    copy: "Respond instantly and qualify visitors.",
    cta: "See the System in Action",
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: <Zap className="h-12 w-12 text-accent-300" />,
    headline: "Scale Without the Growing Pains",
    subheadline: "Growth shouldn't mean chaos. It should mean profit.",
    copy: "10x your workload without the 10x overhead.",
    cta: "Break Your Revenue Ceiling",
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Solutions: React.FC<SolutionsProps> = ({ onOpenModal }) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('opacity-0');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-accent-300/20">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-accent-300">SERVICES</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4 sm:mb-6">
            Work Smarter. <span className="gradient-text font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl transform -rotate-2 inline-block">AND</span> Harder
          </h2>
          <p className="text-light-500 max-w-3xl mx-auto text-base sm:text-lg mb-6 sm:mb-8 px-2">
            How <span className="font-extrabold italic">you</span> can benefit from what we do:
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-400 mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {copyBlocks.map((block, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`min-h-[auto] lg:min-h-[50vh] flex flex-col lg:flex-row items-center py-8 sm:py-12 ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="w-full lg:w-1/2 p-2 sm:p-4">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <div className="glass-card glass-card-hover p-5 sm:p-8 md:p-10 transform hover:scale-[1.02] lg:hover:scale-105 transition-all duration-500">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary-500 to-accent-400 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-primary-800/80 backdrop-blur-sm mb-3 sm:mb-4 border border-accent-300/10 shadow-glow-sm">
                        <div className="[&>svg]:h-8 [&>svg]:w-8 sm:[&>svg]:h-12 sm:[&>svg]:w-12">
                          {block.icon}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-light-400 bg-clip-text text-transparent">
                        {block.headline}
                      </h3>
                      <h4 className="text-base sm:text-lg text-accent-300 font-medium mb-4 sm:mb-6">
                        {block.subheadline}
                      </h4>
                      <p className="text-light-400 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                        <span className="text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>{block.copy}</span>
                      </p>
                      <div>
                        <button
                          onClick={onOpenModal}
                          className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-thin"
                          style={{ fontFamily: 'Spartan, sans-serif' }}
                        >
                          <span className="font-thin">{block.cta}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-2 sm:p-4 mt-4 lg:mt-0">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-4 rounded-2xl hidden sm:block">
                  <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter">
                    <div className="aspect-square w-full h-full bg-gradient-conic from-accent-300 via-secondary-500 to-accent-300 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
                <div className="relative glass-card p-1.5 sm:p-2 rounded-xl overflow-hidden transform hover:scale-[1.02] lg:hover:scale-105 transition-all duration-500">
                  <div className="aspect-video rounded-lg overflow-hidden bg-primary-800">
                    <img
                      src={block.image}
                      alt={block.headline}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;