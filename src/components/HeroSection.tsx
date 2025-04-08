
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-yellow-50">
      <div className="absolute inset-0 bg-[radial-gradient(#FFD60A_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Building Tech Communities
          </div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-tech-blue">
            Connect, Learn & Grow Together
          </h1>
          <p className="text-lg md:text-xl text-tech-gray max-w-lg">
            Join TechBridge to bridge the gap between learning and industry, connecting with mentors, peers, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-6 py-6">
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/5 text-lg px-6 py-6">
              Explore Programs
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10 animate-float">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-yellow-200 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 className="font-semibold text-tech-blue">5,000+</h3>
                  <p className="text-sm text-tech-gray">Community Members</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
                  </div>
                  <h3 className="font-semibold text-tech-blue">50+</h3>
                  <p className="text-sm text-tech-gray">Tech Events</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path><circle cx="17" cy="7" r="5"></circle></svg>
                  </div>
                  <h3 className="font-semibold text-tech-blue">25+</h3>
                  <p className="text-sm text-tech-gray">Tech Partners</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </div>
                  <h3 className="font-semibold text-tech-blue">100+</h3>
                  <p className="text-sm text-tech-gray">Success Stories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
