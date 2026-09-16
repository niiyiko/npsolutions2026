import React from 'react';
import { MessageSquare, Layers, Users, PieChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    value: "smart-communication",
    icon: <MessageSquare className="h-auto w-4 shrink-0" />,
    label: "Smart Communication",
    content: {
      badge: "AI-Powered",
      title: "Intelligent conversational agents that understand context and intent.",
      description:
        "Our system understands context, sentiment, and intent to provide human-like interactions with customers, ensuring 24/7 support and consistent engagement.",
      buttonText: "Learn More",
      imageSrc: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "Smart Communication",
    },
  },
  {
    value: "crm-integration",
    icon: <Layers className="h-auto w-4 shrink-0" />,
    label: "CRM Integration",
    content: {
      badge: "Seamless Connection",
      title: "Connect with your existing business tools effortlessly.",
      description:
        "Integrate with Salesforce, HubSpot, and other major CRM platforms for streamlined data management and enhanced customer relationship tracking.",
      buttonText: "Explore Integration",
      imageSrc: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "CRM Integration",
    },
  },
  {
    value: "customer-journeys",
    icon: <Users className="h-auto w-4 shrink-0" />,
    label: "Customer Journeys",
    content: {
      badge: "Personalized Experience",
      title: "Create tailored experiences for every customer.",
      description:
        "Customize interactions based on customer history, preferences, and behavior patterns to deliver personalized experiences that drive engagement and loyalty.",
      buttonText: "See Features",
      imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "Customer Journeys",
    },
  },
  {
    value: "analytics",
    icon: <PieChart className="h-auto w-4 shrink-0" />,
    label: "Analytics",
    content: {
      badge: "Data Insights",
      title: "Make data-driven decisions with comprehensive analytics.",
      description:
        "Gain actionable insights with detailed reports on performance metrics, customer interactions, and conversion rates to optimize your business strategy.",
      buttonText: "View Analytics",
      imageSrc: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Analytics Dashboard",
    },
  },
];

const Features = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const contactElement = document.getElementById('contact');
    if (!contactElement) return;

    const headerOffset = 80;
    const elementPosition = contactElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-primary-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-primary-900/95 backdrop-blur-md border border-primary-600 rounded-2xl px-4 sm:px-8 md:px-12 py-6 sm:py-8 mb-4 shadow-2xl relative z-20 w-full max-w-4xl">
            <div className="absolute inset-0 bg-primary-900 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Badge variant="outline" className="bg-accent-300/10 text-accent-300 mb-3 sm:mb-4">Ascendrix</Badge>
              <h2 className="max-w-4xl text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-white mb-3 sm:mb-4 extended-underline">
                Advanced Features That Drive <span className="gradient-text font-bold">Results</span>
              </h2>
              <p className="text-white max-w-2xl mx-auto font-medium text-sm sm:text-base lg:text-lg">
                Our solutions are built with cutting-edge technology to deliver measurable business outcomes.
                Experience the power of intelligent automation tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue={tabs[0].value} className="mt-6 sm:mt-8">
          <TabsList className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white bg-primary-800 border border-primary-700 data-[state=active]:bg-accent-300 data-[state=active]:text-primary-900 hover:bg-primary-700 transition-all duration-300"
              >
                {tab.icon} <span className="hidden xs:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-6 sm:mt-8 max-w-screen-xl rounded-xl sm:rounded-2xl bg-primary-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-16 border border-accent-300/10">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-3 sm:gap-5">
                  <Badge variant="outline" className="w-fit bg-accent-300/10 text-accent-300 text-xs sm:text-sm">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold gradient-text">
                    {tab.content.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                    {tab.content.description}
                  </p>
                  <Button
                    className="mt-2 sm:mt-2.5 w-fit gap-2 btn-primary text-sm sm:text-base"
                    size="lg"
                    onClick={handleButtonClick}
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="relative w-full aspect-video">
                  <div className="absolute -inset-4 rounded-2xl hidden sm:block">
                    <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter">
                      <div className="aspect-square w-full h-full bg-gradient-conic from-accent-300 via-secondary-500 to-accent-300 rounded-full animate-spin-slow"></div>
                    </div>
                  </div>
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-lg sm:rounded-xl relative z-10 w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;