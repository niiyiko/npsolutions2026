import React from 'react';
import { Shield, Users, Zap, Calendar, Settings, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const ourApproach = [
  { icon: <Shield className="h-5 w-5 text-accent-300" />, title: "If it doesn't work, we refund you" },
  { icon: <Users className="h-5 w-5 text-accent-300" />, title: "Start small and see if we're a good fit" },
  { icon: <Zap className="h-5 w-5 text-accent-300" />, title: 'Tools, platforms, apps, we cover it all' },
  { icon: <Calendar className="h-5 w-5 text-accent-300" />, title: 'Stay flexible — no long-term commitments' },
  { icon: <Settings className="h-5 w-5 text-accent-300" />, title: 'Regular calls to review what\'s working' },
];

const otherAgencies = [
  { icon: <AlertTriangle className="h-5 w-5 text-gray-400" />, title: 'Lock you into 12-month contracts' },
  { icon: <DollarSign className="h-5 w-5 text-gray-400" />, title: 'Charge setup fees before delivering results' },
  { icon: <Clock className="h-5 w-5 text-gray-400" />, title: 'Take weeks to implement basic solutions' },
  { icon: <Users className="h-5 w-5 text-gray-400" />, title: 'Assign junior staff to your account' },
  { icon: <Settings className="h-5 w-5 text-gray-400" />, title: 'Use cookie-cutter templates for everyone' },
];

const MobileWhyChoose: React.FC = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-40" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-accent-300/20">
            <span className="text-xs font-light tracking-[0.2em] text-accent-300">THE DIFFERENCE</span>
          </div>
          <h2 className="text-xl font-bold tracking-wide leading-tight">
            <span className="text-white/90">Why choose </span>
            <span className="gradient-text">N.P. Solutions</span>
            <br />
            <span className="text-white/90">over </span>
            <span className="font-extrabold gradient-text italic pr-1 relative inline-block">
              everyone
              <svg className="absolute -bottom-1 left-0 w-full h-2 overflow-visible" viewBox="0 0 140 8" fill="none">
                <path d="M-5 4 L135 4" stroke="#FF6B20" strokeWidth="2" strokeLinecap="round" className="animate-draw-underline" />
              </svg>
            </span>
            <span className="text-white/90"> else?</span>
          </h2>
        </div>

        {/* Our Approach */}
        <div className="mb-8">
          <h3 className="text-lg font-bold gradient-text mb-4 text-center">Our Approach</h3>
          <div className="space-y-3">
            {ourApproach.map((item, i) => (
              <div
                key={i}
                className="glass-card p-4 border-2 border-accent-300/40 bg-accent-300/5 shadow-glow-sm flex items-center gap-3"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-accent-300/20">{item.icon}</div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Agencies */}
        <div>
          <h3 className="text-base font-semibold text-gray-400 mb-4 text-center">Other Agencies</h3>
          <div className="space-y-2">
            {otherAgencies.map((item, i) => (
              <div
                key={i}
                className="glass-card p-3 border border-gray-400/15 opacity-70 flex items-center gap-3"
              >
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-gray-500/15">{item.icon}</div>
                <p className="text-sm text-white/80">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileWhyChoose;
