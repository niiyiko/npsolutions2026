import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Diversified Plumbing Services Website",
    description: "Residential service calls operation opened.",
    image: "/assets/Screenshot (13).png",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    technologies: ["React", "Tailwind CSS", "Node.js", "Booking System"],
    category: "Web Development",
    status: "Live",
    url: "https://www.diversifiedplumbingservices.com",
    metrics: {
      "Lead Conversion Rate": "+127%",
      "Customer Acquisition Cost": "-58%",
      "Monthly Revenue Growth": "+89%"
    }
  },
  {
    id: 2,
    title: "Healthcare CRM Integration",
    description: "Seamless integration between multiple healthcare systems, automated patient scheduling, and intelligent follow-up campaigns.",
    image: "/assets/le_tiger.png",
    video: null,
    technologies: ["Python", "FastAPI", "PostgreSQL", "HIPAA Compliant"],
    category: "Healthcare",
    status: "Example",
    metrics: {
      "Patient Satisfaction Score": "98.5%",
      "Appointment No-Shows": "-73%",
      "Revenue Per Patient": "+156%"
    }
  },
  {
    id: 3,
    title: "Real Estate Lead Generator",
    description: "AI-powered lead qualification system with automated property matching, client communication, and deal pipeline management.",
    image: "/assets/le_tiger.png",
    video: null,
    technologies: ["Vue.js", "Django", "Machine Learning", "Twilio API"],
    category: "Real Estate",
    status: "Example",
    metrics: {
      "Qualified Leads Generated": "+245%",
      "Deal Closure Time": "-67%",
      "Agent Commission Growth": "+134%"
    }
  },
  {
    id: 4,
    title: "Restaurant Management Suite",
    description: "Complete restaurant automation including online ordering, inventory tracking, staff scheduling, and customer loyalty programs.",
    image: "/assets/le_tiger.png",
    video: null,
    technologies: ["React Native", "Express.js", "MongoDB", "Square API"],
    category: "Hospitality",
    status: "Example",
    metrics: {
      "Average Order Value": "+78%",
      "Customer Lifetime Value": "+192%",
      "Profit Margin Increase": "+43%"
    }
  }
];

const Results: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="results" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-conic from-secondary-500/5 via-accent-400/5 to-secondary-500/5 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-accent-300/20">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-accent-300">PORTFOLIO</span>
          </div>
          <div className="relative">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
              <span className="gradient-text">Explore</span>
              <span className="text-white/90 ml-2 sm:ml-4">Recent</span>
              <span className="gradient-text ml-2 sm:ml-4">Projects</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-1 bg-gradient-to-r from-secondary-500 to-accent-400 rounded-full opacity-60"></div>
            <div className="absolute -top-4 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 bg-accent-400/10 rounded-full blur-xl animate-pulse-slow hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-8 sm:-left-12 w-20 sm:w-32 h-20 sm:h-32 bg-secondary-500/10 rounded-full blur-2xl animate-pulse-slow hidden sm:block" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-secondary-500 to-accent-400 text-white shadow-glow-md'
                  : 'bg-primary-800/50 text-light-400 hover:bg-primary-700/50 border border-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                }}
                className={`glass-card p-4 sm:p-6 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] lg:hover:scale-105 ${
                  selectedProject.id === project.id
                    ? 'border-accent-300/50 shadow-glow-md bg-primary-800/60'
                    : 'border-primary-600/30 hover:border-accent-300/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-base sm:text-xl font-bold text-white">{project.title}</h3>
                      <span className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live'
                          ? 'bg-success-500/20 text-success-400'
                          : project.status === 'Example'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-warning-500/20 text-warning-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-light-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-accent-300/10 text-accent-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-light-500 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary-700/50">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-accent-300 font-bold text-xs sm:text-sm">{value}</div>
                      <div className="text-light-500 text-[10px] sm:text-xs truncate">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="glass-card p-4 sm:p-6 lg:p-8 border border-accent-300/20 shadow-glow-lg">
              <div className="flex items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-1 sm:mb-2 truncate">{selectedProject.title}</h3>
                  <span className="text-accent-300 text-xs sm:text-sm font-medium">{selectedProject.category}</span>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary-700/50 hover:bg-primary-600/50 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 text-accent-300" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden bg-primary-900/50">
                {selectedProject.video ? (
                  <div className="relative aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted={isMuted}
                      loop
                      poster={selectedProject.image}
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex gap-2">
                      <button
                        onClick={toggleVideo}
                        className="p-1.5 sm:p-2 rounded-full bg-primary-800/80 backdrop-blur-sm hover:bg-primary-700/80 transition-colors duration-300"
                      >
                        {isVideoPlaying ? (
                          <Pause className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        ) : (
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-1.5 sm:p-2 rounded-full bg-primary-800/80 backdrop-blur-sm hover:bg-primary-700/80 transition-colors duration-300"
                      >
                        {isMuted ? (
                          <VolumeX className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        ) : (
                          <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video relative bg-primary-800/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`w-full h-full ${
                        selectedProject.id === 1
                          ? 'object-cover brightness-125 contrast-110'
                          : 'object-contain p-8 scale-75'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent pointer-events-none"></div>
                  </div>
                )}
              </div>

              <p className="text-light-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{selectedProject.description}</p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-secondary-500/20 to-accent-400/20 text-accent-300 rounded-full text-xs sm:text-sm font-medium border border-accent-300/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Key Results</h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-4">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 sm:p-3 rounded-lg bg-primary-800/30 border border-primary-700/30">
                      <span className="text-light-400 text-xs sm:text-sm">{key}</span>
                      <span className="text-accent-300 font-bold text-sm sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;