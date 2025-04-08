
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50">
      {/* Yellow dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFD60A_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      {/* Yellow accent blobs */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-10 w-48 h-48 bg-yellow-200/30 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Technology for Everyone
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-foreground mb-8">
            Bridging The Digital Divide
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering seniors with the technology skills they need to thrive in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-tech-blue hover:bg-tech-darkblue text-white text-lg py-6 px-8 rounded-md accessible-focus large-touch-target"
              aria-label="Explore our technology lessons"
            >
              <Link to="/lessons">
                Explore Lessons
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-yellow-600 text-yellow-800 hover:bg-yellow-50 text-lg py-6 px-8 rounded-md accessible-focus large-touch-target"
              aria-label="Join our volunteer team"
            >
              <Link to="/join">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
