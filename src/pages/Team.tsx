
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Meet Our Volunteers
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our dedicated team of volunteers is committed to bridging the digital divide and empowering seniors with technology skills.
            </p>
          </div>
          
          {/* Team content will be added later */}
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Coming soon! We're currently updating our volunteer profiles.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
