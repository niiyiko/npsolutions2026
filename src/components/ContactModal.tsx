import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  contactMethod: string;
  message: string;
  services: string[];
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, preSelectedService }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    contactMethod: '',
    message: '',
    services: [],
  });
  
  const [result, setResult] = useState("");
  
  // Update services when preSelectedService changes
  useEffect(() => {
    if (preSelectedService && isOpen) {
      setFormData(prev => ({
        ...prev,
        services: [preSelectedService]
      }));
    }
  }, [preSelectedService, isOpen]);
  
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
        onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] mx-2 sm:mx-4 overflow-y-auto animate-modal-entrance">
        <div className="glass-card p-3 sm:p-4 md:p-6 border-2 border-accent-300/50 shadow-glow-lg relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-accent-400/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-secondary-500/20 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

          <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-bl from-accent-300/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-tr from-secondary-500/30 to-transparent"></div>

          <div className="relative mb-3 sm:mb-4 z-10">
            <button
              onClick={onClose}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20 p-1.5 sm:p-2 rounded-full bg-primary-800/90 hover:bg-primary-700/90 transition-all duration-300 border border-accent-300/30 hover:border-accent-300/50 shadow-glow-sm hover:shadow-glow-md"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-light-400 hover:text-white transition-colors" />
            </button>

            <div className="pr-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-300 rounded-full animate-ping"></div>
                <h2 className="text-base sm:text-xl md:text-2xl font-light tracking-wide">
                  <span className="gradient-text font-bold">Book a FREE Workshop</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                <span className="text-success-400 text-xs sm:text-sm font-medium">Available Now</span>
              </div>
                            <div className="mt-2 p-1.5 sm:p-2 bg-accent-300/10 rounded-lg border border-accent-300/20">
                <p className="text-accent-300 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-spin flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Limited slots available this month
                </p>
              </div>
            </div>
          </div>
          
          {/* Success state with enhanced visibility */}
          {result === "Form Submitted Successfully" ? (
            <div className="text-center py-4 sm:py-6 relative z-10">
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-success-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-success-500 to-success-400 rounded-full flex items-center justify-center mx-auto shadow-glow-md">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text">Thank You!</h3>
              <p className="text-light-300 text-sm sm:text-base leading-relaxed">
                We've received your request and will contact you shortly to schedule your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-light-500 focus:outline-none input-glow"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-light-500 focus:outline-none input-glow"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-light-500 focus:outline-none input-glow"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="contactMethod" className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                  Preferred Contact Method *
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-light-500 focus:outline-none input-glow"
                >
                  <option value="">Select contact method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="video">Video Call</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                  Services of Interest *
                </label>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service.replace(/\s+/g, '')}
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary-900 border-primary-700 text-secondary-500 focus:ring-secondary-500 rounded flex-shrink-0"
                      />
                      <label
                        htmlFor={service.replace(/\s+/g, '')}
                        className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-light-400"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-light-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full bg-primary-900/80 border border-primary-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-light-500 focus:outline-none input-glow"
                  placeholder="Tell us about your business needs"
                ></textarea>
              </div>

              {result && (
                <div className={`text-center p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                  result === "Sending...." ? "bg-blue-500/20 text-blue-300" :
                  result === "Form Submitted Successfully" ? "bg-success-500/20 text-success-300" :
                  "bg-error-500/20 text-error-300"
                }`}>
                  {result}
                </div>
              )}

              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={result === "Sending...." || formData.services.length === 0 || !formData.contactMethod}
                  className={`btn-primary w-full text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 ${
                    (result === "Sending...." || formData.services.length === 0 || !formData.contactMethod) ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {result === "Sending...." ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Ascend Now'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;