import { Linkedin } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Capt Tarun Jawa",
      role: "Director of Operations and Logistics",
      description: "Captain Tarun Jawa, an avid aviator with an unyielding passion for stones, is the driving force behind Graniters. Known for his strategic risk-taking, he leads as the Director of Operations and Logistics, steering the company's initiatives with vision and precision.",
      linkedin: "https://www.linkedin.com/in/tarun-jawa-b2315949/?originalSubdomain=in"
    },
    {
      name: "Pragati Srivastava",
      role: "Chief Human Resources Officer",
      description: "Pragati Srivastava, with extensive expertise in business administration, serves as the Chief Human Resources Officer. Deeply valuing the people who form the heart of Black Graniters, she plays a key role in ensuring their well-being and fostering their professional growth within the company.",
      linkedin: "https://www.linkedin.com/in/pragatisrivastava-eti/"
    },
    {
      name: "Anil Mehta",
      role: "CEO",
      description: "Anil Mehta, serving as CEO, is a dynamic leader who drives the company's Marketing and Sales strategies with unmatched expertise. His entrepreneurial journey has been truly remarkable, marked by the successful leadership of several businesses over the years. With a wealth of experience and a visionary approach, he continues to steer the organization toward innovation, new opportunities, and a future defined by lasting success.",
      linkedin: "https://www.linkedin.com/in/anil-mehta-29b928290/"
    },
    {
      name: "Archana Mehta",
      role: "Chief Financial Officer",
      description: "With deep expertise in economics, finance, and auditing, Archana Mehta serves as the Chief Financial Officer. Her sharp strategic insight and sound decision-making make her a vital part of the leadership team, steering the company through evolving financial landscapes with clarity and confidence.",
      linkedin: "https://www.linkedin.com/in/archana-mehta-b52928290/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            Seventeen years of passion, dedication, and excellence in natural stones
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#502b21]">Our Journey</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Seventeen years ago, an enduring admiration for monumental granite structures such as Bengaluru's Vidhan
                Soudha and the Brihadeeshwar Temple sparked a deep fascination with Indian Granite. This passion led to the
                founding of <span className="font-semibold text-[#502b21]">Graniters in 2012</span>, a company dedicated to the business of premium black granite from India. Our
                journey began with the opening of our first quarry in Karnataka's Coorg District, driven by a commitment to deliver
                authentic, world-class materials to the global market.
              </p>

              <p>
                In <span className="font-semibold text-[#502b21]">2021, Black Graniters Private Limited</span> was established, marking our strategic expansion into a wider spectrum
                of natural stones—granite in varied colors, marble, and sandstone. India is home to an incredible diversity of
                granite, ranging from fine to coarse textures and hues that span from pink to black. Today, our sourcing network
                extends across <span className="font-semibold">Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Madhya Pradesh</span>, with renowned quarries in
                Central India and Ballari District, Karnataka, recognized for producing superior-quality granite.
              </p>

              <p>
                Our advanced processing unit in <span className="font-semibold text-[#502b21]">Kishangarh, Rajasthan</span>, is powered by a team of highly skilled experts and workers who uphold
                the highest standards of craftsmanship.
              </p>

              <p>
                Our vision is rooted in showcasing the magnificence, versatility, and durability of Indian natural stones worldwide.
                With expertise in mining, cutting, polishing, and sculpting, we serve both domestic and international markets. Our
                products are shipped to clients across the globe—including <span className="font-semibold">France, Poland, Slovakia, Azerbaijan, Vietnam,
                Malaysia, the USA, Germany</span>, and many more.
              </p>

              <p>
                Strengthening this reach are our offices in <span className="font-semibold text-[#502b21]">Delhi and Chandigarh</span>, alongside the processing hub in Kishangarh.
              </p>

              <p className="text-xl font-semibold text-[#502b21] pt-4">
                We invite you to connect with us for more information, collaboration, or to share your passion for Indian natural
                stones. At Black Graniters, we take pride in turning aspirations into reality, while continuing our mission to enrich
                global appreciation of India's natural stone heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#502b21]">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#502b21] mb-2">{member.name}</h3>
                    <p className="text-[#F7A145] font-semibold text-lg">{member.role}</p>
                  </div>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#502b21] hover:text-[#F7A145] transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To showcase the magnificence, versatility, and durability of Indian natural stones worldwide, 
              enriching global appreciation of India's natural stone heritage while turning aspirations into reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
