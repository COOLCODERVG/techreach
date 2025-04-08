
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LessonsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Technology Education
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Our Technology Lessons
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Explore our curriculum designed to empower seniors with essential technology skills for the digital age.
            </p>
          </div>
          
          {/* Lessons content will be added later */}
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Coming soon! Our lesson catalog is being updated.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LessonsPage;
