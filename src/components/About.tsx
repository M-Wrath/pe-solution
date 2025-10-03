import { Clock } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-2 mb-8">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-inter font-medium">
              Über uns
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-pe-solutions font-black leading-tight text-black">
            Demnächst verfügbar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
