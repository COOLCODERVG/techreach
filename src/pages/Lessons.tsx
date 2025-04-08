
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LessonsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              Technology Education
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Our Technology Lessons
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Explore our curriculum designed to empower seniors with essential technology skills for the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-tech-blue hover:transform hover:scale-105 transition-all">
              <div className="h-3 bg-[#ecc719]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-tech-blue mb-3">Smartphone Basics</h3>
                <p className="text-muted-foreground mb-4">Learn the fundamentals of using smartphones, including making calls, texting, and managing contacts.</p>
                <span className="inline-block bg-tech-blue text-[#ecc719] px-3 py-1 rounded text-sm font-medium">Beginner</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-tech-blue hover:transform hover:scale-105 transition-all">
              <div className="h-3 bg-[#ecc719]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-tech-blue mb-3">Internet Navigation</h3>
                <p className="text-muted-foreground mb-4">Discover how to browse the web safely, use search engines, and bookmark favorite websites.</p>
                <span className="inline-block bg-tech-blue text-[#ecc719] px-3 py-1 rounded text-sm font-medium">Beginner</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-tech-blue hover:transform hover:scale-105 transition-all">
              <div className="h-3 bg-[#ecc719]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-tech-blue mb-3">Email Essentials</h3>
                <p className="text-muted-foreground mb-4">Master sending, receiving, and organizing emails, as well as managing attachments.</p>
                <span className="inline-block bg-tech-blue text-[#ecc719] px-3 py-1 rounded text-sm font-medium">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LessonsPage;
