import React from 'react';
import { Shield, Users, Zap, Calendar, Settings, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const ourApproach = [
    {
      icon: <Shield className="h-6 w-6 text-accent-300" />,
      title: "If it doesn't work, we refund you",
      description: "100% satisfaction guarantee - your success is our priority"
    },
    {
      icon: <Users className="h-6 w-6 text-accent-300" />,
      title: "Start small and see if we're a good fit",
      description: "Begin with a pilot project to test our partnership"
    },
    {
      icon: <Zap className="h-6 w-6 text-accent-300" />,
      title: "Tools, platforms, apps, we cover it all",
      description: "Complete integration across all your business tools"
    },
    {
      icon: <Calendar className="h-6 w-6 text-accent-300" />,
      title: "Stay flexible - no long-term commitments required",
      description: "Month-to-month flexibility that adapts to your needs"
    },
    {
      icon: <Settings className="h-6 w-6 text-accent-300" />,
      title: "Regular calls to review what's working",
      description: "Ongoing optimization and performance reviews"
    }
  ];

  const otherAgencies = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-gray-400" />,
      title: "Lock you into 12-month contracts",
      description: "Forcing commitment before proving value"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-gray-400" />,
      title: "Charge setup fees before delivering results",
      description: "Taking money upfront with no guarantee of success"
    },
    {
      icon: <Clock className="h-6 w-6 text-gray-400" />,
      title: "Take weeks to implement basic solutions",
      description: "Slow deployment that delays your ROI"
    },
    {
      icon: <Users className="h-6 w-6 text-gray-400" />,
      title: "Assign junior staff to your account",
      description: "You get inexperienced team members, not experts"
    },
    {
      icon: <Settings className="h-6 w-6 text-gray-400" />,
      title: "Use cookie-cutter templates for everyone",
      description: "One-size-fits-all approach that ignores your unique needs"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-50"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-accent-300/20">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-accent-300">THE DIFFERENCE</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 tracking-wide leading-tight">
            <span className="text-white/90">Why choose</span>
            <span className="gradient-text ml-2 sm:ml-4">N.P. Solutions</span>
            <br className="sm:hidden" />
            <span className="text-white/90 ml-2 sm:ml-4">over</span>
            <span className="font-extrabold gradient-text ml-2 sm:ml-4 italic pr-1 relative inline-block">
              everyone
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 overflow-visible"
                viewBox="0 0 140 8"
                fill="none"
              >
                <path
                  d="M-5 4 L135 4"
                  stroke="#FF6B20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-draw-underline"
                />
              </svg>
            </span>
            <span className="text-white/90 ml-2 sm:ml-4">else?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="text-center lg:text-left mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-2 sm:mb-4">Our Approach</h3>
              <p className="text-white text-sm sm:text-base">How we deliver results</p>
            </div>

            {ourApproach.map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-5 lg:p-6 border-2 border-accent-300/40 hover:border-accent-300/60 transition-all duration-300 transform hover:scale-[1.02] lg:hover:scale-105 shadow-glow-sm hover:shadow-glow-md bg-accent-300/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-accent-300/20 shadow-glow-sm">
                    <div className="[&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="text-center lg:text-left mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2 sm:mb-4">Other Agencies</h3>
              <p className="text-light-300 text-sm sm:text-base">What you typically experience</p>
            </div>

            {otherAgencies.map((item, index) => (
              <div
                key={index}
                className="glass-card p-3 sm:p-4 lg:p-5 border border-gray-400/15 hover:border-gray-400/25 transition-all duration-300 opacity-75 hover:opacity-90"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-gray-500/15">
                    <div className="[&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-medium text-white/90">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;