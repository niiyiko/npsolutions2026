import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

interface MobileSolutionsProps {
  onOpenModal: () => void;
}

const copyBlocks = [
  {
    icon: <TrendingUp className="h-8 w-8 text-accent-300" />,
    headline: 'Stop Losing Money on Manual Processes',
    subheadline: 'Every minute spent on repetitive tasks is revenue walking out the door',
    copy: 'Respond faster and follow up consistently.',
    cta: 'Calculate Your Lost Revenue',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    icon: <Target className="h-8 w-8 text-accent-300" />,
    headline: 'Turn More Website Visitors Into Qualified Leads',
    subheadline: "97% of visitors leave without converting. We help capture the ones you're missing.",
    copy: 'Respond instantly and qualify visitors.',
    cta: 'See the System in Action',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-300" />,
    headline: 'Scale Without the Growing Pains',
    subheadline: "Growth shouldn't mean chaos. It should mean profit.",
    copy: '10x your workload without the 10x overhead.',
    cta: 'Break Your Revenue Ceiling',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
];

const MobileSolutions: React.FC<MobileSolutionsProps> = ({ onOpenModal }) => {
  return (
    <section id="solutions" className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-40" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-primary-800/70 rounded-full px-4 py-2 mb-4 border border-accent-300/20">
            <span className="text-xs font-light tracking-[0.2em] text-accent-300">SERVICES</span>
          </div>
          <h2 className="text-2xl font-light tracking-wide mb-4">
            Work Smarter.{' '}
            <span className="gradient-text font-black text-3xl transform -rotate-2 inline-block">AND</span>{' '}
            Harder
          </h2>
          <p className="text-light-500 text-sm mb-4">
            How <span className="font-extrabold italic">you</span> can benefit from what we do:
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-accent-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {copyBlocks.map((block, index) => (
            <div key={index} className="glass-card glass-card-hover border border-primary-600 overflow-hidden">
              {/* Image on top */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={block.image}
                  alt={block.headline}
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              {/* Content below */}
              <div className="p-5">
                <div className="inline-flex items-center justify-center p-2 rounded-xl bg-primary-800/80 mb-3 border border-accent-300/10 shadow-glow-sm">
                  {block.icon}
                </div>

                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-white to-light-400 bg-clip-text text-transparent">
                  {block.headline}
                </h3>

                <h4 className="text-sm text-accent-300 font-medium mb-3">
                  {block.subheadline}
                </h4>

                <p className="text-light-400 text-sm mb-5 leading-relaxed">{block.copy}</p>

                <button
                  onClick={onOpenModal}
                  className="btn-primary w-full text-sm py-3 font-thin"
                  style={{ fontFamily: 'Spartan, sans-serif' }}
                >
                  <span className="font-thin">{block.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSolutions;
