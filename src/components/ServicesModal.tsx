import React, { useEffect } from 'react';
import { X, MessageSquare, Target, Zap, Globe, Database, Workflow } from 'lucide-react';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  onSelectService: (service: string) => void;
}

const services = [
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'AI-powered lead qualification and nurturing systems that work 24/7',
    icon: <Target className="h-8 w-8" />,
    features: ['Automated lead scoring', 'Multi-channel outreach', 'CRM integration'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'smart-chat',
    title: 'Agents',
    description: 'Intelligent conversational AI that handles customer inquiries naturally',
    icon: <MessageSquare className="h-8 w-8" />,
    features: ['Natural language processing', 'Context awareness', 'Seamless handoffs'],
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    description: 'Automated appointment booking and calendar management',
    icon: <Zap className="h-8 w-8" />,
    features: ['Smart scheduling', 'Automated reminders', 'Calendar sync'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'website-app',
    title: 'Website/App Creation',
    description: 'Custom web and mobile applications built for your business needs',
    icon: <Globe className="h-8 w-8" />,
    features: ['Responsive design', 'SEO optimization', 'Performance focused'],
    color: 'from-orange-500 to-red-400'
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration',
    description: 'Seamless connection with your existing business tools and platforms',
    icon: <Database className="h-8 w-8" />,
    features: ['Data synchronization', 'Custom workflows', 'Real-time updates'],
    color: 'from-indigo-500 to-blue-400'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and optimize business processes',
    icon: <Workflow className="h-8 w-8" />,
    features: ['Process optimization', 'Task automation', 'Performance analytics'],
    color: 'from-teal-500 to-cyan-400'
  }
];

const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose, onOpenContact, onSelectService }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleServiceClick = (serviceTitle: string) => {
    onClose();
    onSelectService(serviceTitle);
    onOpenContact();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-6xl max-h-[90vh] mx-4 my-4 overflow-y-auto animate-modal-entrance">
        <div className="glass-card p-4 md:p-6 lg:p-8 border-2 border-accent-300/50 shadow-glow-lg relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-accent-300/10 via-secondary-500/10 to-accent-300/10 rounded-full animate-spin-slow"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-accent-300/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Header */}
          <div className="relative mb-6 md:mb-8 z-10">
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 z-20 p-2 rounded-full bg-primary-800/90 hover:bg-primary-700/90 transition-all duration-300 border border-accent-300/30 hover:border-accent-300/50 shadow-glow-sm hover:shadow-glow-md"
            >
              <X className="h-5 w-5 text-light-400 hover:text-white transition-colors" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-accent-300/20">
                <span className="text-sm font-light tracking-[0.2em] text-accent-300">OUR SERVICES</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="gradient-text">Choose Your</span>
                <span className="text-white ml-3">Growth Solution</span>
              </h2>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10 mb-6 md:mb-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.title)}
                className="group glass-card p-4 md:p-6 border border-primary-600/30 hover:border-accent-300/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-glow-md relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center p-3 md:p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-3 md:mb-4 shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-accent-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-light-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-light-500">
                      <div className="w-1.5 h-1.5 bg-accent-300 rounded-full mr-2 group-hover:bg-white transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Call to action */}
                <div className="flex items-center justify-between">
                  <span className="text-accent-300 font-medium text-xs md:text-sm group-hover:text-white transition-colors duration-300">
                    Learn More
                  </span>
                  <div className="w-6 h-6 rounded-full bg-accent-300/20 flex items-center justify-center group-hover:bg-accent-300 transition-all duration-300">
                    <svg className="w-3 h-3 text-accent-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center relative z-10">
            <p className="text-light-400 mb-4 text-sm md:text-base">
              Not sure which service is right for you?
            </p>
            <button
              onClick={() => handleServiceClick('')}
              className="btn-primary px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
            >
              <span className="font-thin">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;