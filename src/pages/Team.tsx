
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#ecc719] text-tech-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-alfa text-tech-blue mb-8">
              Meet Our Volunteers
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our dedicated team of volunteers is committed to bridging the digital divide and empowering seniors with technology skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member cards will be added here */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#ecc719]">
              <div className="w-24 h-24 bg-tech-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ecc719]">JD</span>
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-2 text-center">Wisdom Enendu</h3>
              <p className="text-muted-foreground text-center">Founder and President</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#ecc719]">
              <div className="w-24 h-24 bg-tech-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ecc719]">HA</span>
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-2 text-center">Harsha</h3>
              <p className="text-muted-foreground text-center">Director of Public Relations</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#ecc719]">
              <div className="w-24 h-24 bg-tech-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ecc719]">JE</span>
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-2 text-center">Jenna</h3>
              <p className="text-muted-foreground text-center">Director of Instruction</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#ecc719]">
              <div className="w-24 h-24 bg-tech-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ecc719]">JE</span>
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-2 text-center">Advita</h3>
              <p className="text-muted-foreground text-center">Director of Content</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
