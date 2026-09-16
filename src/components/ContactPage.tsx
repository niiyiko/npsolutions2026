import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { createParticles } from '../utils/animations';

interface FormData {
  name: string;
  email: string;
  company: string;
  contactMethod: string;
  message: string;
  services: string[];
}

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const particlesRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    contactMethod: '',
    message: '',
    services: [],
  });
  
  const [result, setResult] = useState("");

  useEffect(() => {
    // Initialize particles
    if (particlesRef.current) {
      createParticles(particlesRef.current, 50);
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup particles
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
        
      return {
        ...prev,
        services: updatedServices,
      };
    });
  };
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "7e3895d2-0351-47c8-96dd-33c91b541ee5");
    
    // Add services as a comma-separated string
    formData.append("services", formData.getAll("services").join(", "));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      setFormData({
        name: '',
        email: '',
        company: '',
        contactMethod: '',
        message: '',
        services: [],
      });
      
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  const services = [
    'Lead Generation',
    'Scheduling',
    'Agents',
    'Website/App Creation',
    'CRM Integration',
    'Workflow Automation',
  ];

  return (
    <div className="min-h-screen bg-primary-900 text-white relative overflow-hidden">
      {/* Particles background */}
      <div ref={particlesRef} className="particles"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-secondary-500/5 via-accent-400/5 to-secondary-500/5 rounded-full animate-spin-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-light-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <img
              src="/assets/le_tiger.png"
              alt="N.P. Solutions Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>N.P. Solutions</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-accent-300/20">
            <span className="text-sm font-light tracking-[0.2em] text-accent-300">CONTACT US</span>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/assets/le_tiger.png"
              alt="Le Tiger Mascot"
              className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wide">
            <span className="gradient-text">Get in Touch</span>
            <span className="text-white/90 ml-4">with</span>
            <span className="gradient-text ml-4">N.P. Solutions</span>
          </h1>
          <p className="text-light-500 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with intelligent automation? We're here to help you ascend to new heights.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300 border border-accent-300/20 hover:border-accent-300/40">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-secondary-500 to-accent-400 mb-4 shadow-glow-sm">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Visit Us</h3>
            <p className="text-light-400 leading-relaxed">
              9413 Drovers View Trail<br />
              Fort Worth, TX 76131
            </p>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300 border border-accent-300/20 hover:border-accent-300/40">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-secondary-500 to-accent-400 mb-4 shadow-glow-sm">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Phone</h3>
            <p className="text-light-400">
              <a href="tel:+19726392513" className="hover:text-accent-300 transition-colors duration-300">
                (972) 639-2513
              </a>
            </p>
          </div>

          {/* Email Card */}
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300 border border-accent-300/20 hover:border-accent-300/40">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-secondary-500 to-accent-400 mb-4 shadow-glow-sm">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Email</h3>
            <p className="text-light-400">
              <a href="mailto:ntpruitt26@gmail.com" className="hover:text-accent-300 transition-colors duration-300">
                ntpruitt26@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Book Your Free</span>
              <span className="text-white ml-3">Consultation</span>
            </h2>
            <p className="text-light-400 text-lg">
              Discover how our growth automation solutions can transform your business.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 border-2 border-accent-300/30 shadow-glow-lg relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-400/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Success state */}
            {result === "Form Submitted Successfully" ? (
              <div className="text-center py-8 relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-success-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-success-500 to-success-400 rounded-full flex items-center justify-center mx-auto shadow-glow-md">
                    <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Thank You!</h3>
                <p className="text-light-300 text-lg leading-relaxed">
                  We've received your request and will contact you shortly to schedule your consultation.
                </p>
                <div className="mt-6 p-4 bg-success-500/10 rounded-lg border border-success-500/20">
                  <p className="text-success-400 font-medium text-lg">
                    🎉 You're one step closer to transforming your business!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-4 py-3 text-white placeholder-light-500 focus:outline-none input-glow"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-4 py-3 text-white placeholder-light-500 focus:outline-none input-glow"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-light-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-4 py-3 text-white placeholder-light-500 focus:outline-none input-glow"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-light-400 mb-2">
                    Preferred Contact Method *
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-4 py-3 text-white placeholder-light-500 focus:outline-none input-glow"
                  >
                    <option value="">Select preferred contact method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-light-400 mb-2">
                    Services of Interest *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={service.replace(/\s+/g, '')}
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="w-4 h-4 bg-primary-900 border-primary-700 text-secondary-500 focus:ring-secondary-500 rounded"
                        />
                        <label
                          htmlFor={service.replace(/\s+/g, '')}
                          className="ml-3 text-sm text-light-400"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-4 py-3 text-white placeholder-light-500 focus:outline-none input-glow"
                    placeholder="Tell us about your business needs"
                  ></textarea>
                </div>
                
                {result && (
                  <div className={`text-center p-4 rounded-lg ${
                    result === "Sending...." ? "bg-blue-500/20 text-blue-300" :
                    result === "Form Submitted Successfully" ? "bg-success-500/20 text-success-300" :
                    "bg-error-500/20 text-error-300"
                  }`}>
                    {result}
                  </div>
                )}
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={result === "Sending...." || formData.services.length === 0 || !formData.contactMethod}
                    className={`btn-primary w-full sm:w-auto px-8 py-4 text-lg ${
                      (result === "Sending...." || formData.services.length === 0 || !formData.contactMethod) ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {result === "Sending...." ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Book Your Free Consultation'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;