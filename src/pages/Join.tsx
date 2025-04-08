
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JoinPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Volunteer With Us
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-foreground mb-8">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Help us bridge the digital divide by sharing your knowledge and skills with seniors in your community.
            </p>
          </div>
          
          {/* Join content will be added later */}
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Coming soon! We're updating our volunteer application process.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinPage;
