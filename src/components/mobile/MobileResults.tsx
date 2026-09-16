import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Diversified Plumbing Services Website',
    description: 'Residential service calls operation opened.',
    image: '/assets/Screenshot (13).png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Booking System'],
    category: 'Web Development',
    status: 'Live',
    url: 'https://www.diversifiedplumbingservices.com',
    metrics: {
      'Lead Conversion Rate': '+127%',
      'Customer Acquisition Cost': '-58%',
      'Monthly Revenue Growth': '+89%',
    },
  },
  {
    id: 2,
    title: 'Healthcare CRM Integration',
    description:
      'Seamless integration between multiple healthcare systems, automated patient scheduling, and intelligent follow-up campaigns.',
    image: '/assets/le_tiger.png',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'HIPAA Compliant'],
    category: 'Healthcare',
    status: 'Example',
    url: null,
    metrics: {
      'Patient Satisfaction Score': '98.5%',
      'Appointment No-Shows': '-73%',
      'Revenue Per Patient': '+156%',
    },
  },
  {
    id: 3,
    title: 'Real Estate Lead Generator',
    description:
      'AI-powered lead qualification system with automated property matching, client communication, and deal pipeline management.',
    image: '/assets/le_tiger.png',
    technologies: ['Vue.js', 'Django', 'Machine Learning', 'Twilio API'],
    category: 'Real Estate',
    status: 'Example',
    url: null,
    metrics: {
      'Qualified Leads Generated': '+245%',
      'Deal Closure Time': '-67%',
      'Agent Commission Growth': '+134%',
    },
  },
  {
    id: 4,
    title: 'Restaurant Management Suite',
    description:
      'Complete restaurant automation including online ordering, inventory tracking, staff scheduling, and customer loyalty programs.',
    image: '/assets/le_tiger.png',
    technologies: ['React Native', 'Express.js', 'MongoDB', 'Square API'],
    category: 'Hospitality',
    status: 'Example',
    url: null,
    metrics: {
      'Average Order Value': '+78%',
      'Customer Lifetime Value': '+192%',
      'Profit Margin Increase': '+43%',
    },
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const MobileResults: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="results" className="py-12 px-4 relative overflow-hidden scroll-mt-16">
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-accent-300/20">
            <span className="text-xs font-light tracking-[0.2em] text-accent-300">PORTFOLIO</span>
          </div>
          <h2 className="text-2xl font-bold tracking-wide">
            <span className="gradient-text">Explore</span>
            <span className="text-white/90"> Recent </span>
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-secondary-500 to-accent-400 text-white shadow-glow-md'
                  : 'bg-primary-800/50 text-light-400 border border-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filtered.map((project) => {
            const isOpen = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`glass-card border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-accent-300/50 shadow-glow-md' : 'border-primary-600/30'
                }`}
              >
                {/* Header row — always visible */}
                <button
                  className="w-full p-4 flex items-start justify-between gap-3 text-left"
                  onClick={() => setExpandedId(isOpen ? null : project.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white leading-snug">{project.title}</h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                          project.status === 'Live'
                            ? 'bg-success-500/20 text-success-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-accent-300/10 text-accent-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-light-500 text-xs py-0.5">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1 text-accent-300">
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                {/* Expanded detail panel */}
                {isOpen && (
                  <div className="px-4 pb-5 border-t border-primary-700/40">
                    {/* Image */}
                    <div className="mt-4 rounded-lg overflow-hidden aspect-video bg-primary-800/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${
                          project.id === 1
                            ? 'object-cover brightness-125 contrast-110'
                            : 'object-contain p-6 scale-75'
                        }`}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-light-400 text-sm mt-4 mb-4 leading-relaxed">{project.description}</p>

                    {/* Metrics */}
                    <div className="mb-4">
                      <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 text-accent-300">
                        Key Results
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center p-2 rounded-lg bg-primary-800/30 border border-primary-700/30"
                          >
                            <span className="text-light-400 text-xs">{key}</span>
                            <span className="text-accent-300 font-bold text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 text-accent-300">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gradient-to-r from-secondary-500/20 to-accent-400/20 text-accent-300 rounded-full text-xs font-medium border border-accent-300/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link if available */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent-300 font-medium hover:text-accent-200 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live Site
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileResults;
