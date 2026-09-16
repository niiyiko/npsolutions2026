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
      {/* Backdrop — solid, no blur (blur forces GPU compositing and is slow on mobile) */}
      <div
        className="absolute inset-0 bg-black/85"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-6xl max-h-[90vh] mx-4 my-4 overflow-y-auto">
        <div className="bg-[#141414] border border-accent-300/30 rounded-xl p-4 md:p-6 lg:p-8 relative overflow-hidden">


          {/* Header */}
          <div className="relative mb-6 md:mb-8 z-10">
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 z-20 p-2 rounded-full bg-primary-800 border border-accent-300/30 text-light-400 hover:text-white active:scale-95 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center bg-primary-800/70 rounded-full px-6 py-2 mb-4 border border-accent-300/20">
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
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.title)}
                className="group bg-primary-800/60 border border-primary-600/40 rounded-xl p-4 md:p-6 cursor-pointer active:scale-95 hover:border-accent-300/40 transition-colors duration-150 relative overflow-hidden"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center p-3 md:p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-3 md:mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-accent-300 transition-colors duration-150">
                  {service.title}
                </h3>

                <p className="text-light-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-light-500">
                      <div className="w-1.5 h-1.5 bg-accent-300 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Call to action */}
                <div className="flex items-center justify-between">
                  <span className="text-accent-300 font-medium text-xs md:text-sm">
                    Learn More
                  </span>
                  <div className="w-6 h-6 rounded-full bg-accent-300/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
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