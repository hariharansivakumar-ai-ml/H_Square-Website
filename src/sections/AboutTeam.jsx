import { motion } from 'framer-motion';

// Generated headshot images (5 available, 3 pending quota reset)
import harishImg    from '../assets/team/team_harish_kumar.png';
import priyaImg     from '../assets/team/team_priya_raman.png';
import arjunImg     from '../assets/team/team_arjun_prakash.png';
import kavyaImg     from '../assets/team/team_kavya_nair.png';
import sanjayImg    from '../assets/team/team_sanjay_kumar.png';

const initialsAvatar = (initials, bg) => ({ initials, bg, isPlaceholder: true });

const AboutTeam = () => {
  const team = [
    {
      name: "Mr. Harish Kumar",
      role: "Founder & Managing Director",
      bio: "A visionary leader with extensive experience in real estate development, investment planning, and customer relationship management.",
      image: harishImg,
    },
    {
      name: "Mrs. Priya Raman",
      role: "Director – Business Operations",
      bio: "Specializes in strategic planning, operational excellence, and delivering exceptional customer experiences.",
      image: priyaImg,
    },
    {
      name: "Mr. Arjun Prakash",
      role: "Head of Property Development",
      bio: "Expert in land acquisition, project planning, and sustainable property development.",
      image: arjunImg,
    },
    {
      name: "Mrs. Kavya Nair",
      role: "Legal & Compliance Advisor",
      bio: "Ensures seamless documentation processes and regulatory compliance across all projects.",
      image: kavyaImg,
    },
    {
      name: "Mr. Sanjay Kumar",
      role: "Investment Consultant",
      bio: "Provides market insights and investment strategies that help clients maximise long-term returns.",
      image: sanjayImg,
    },
    {
      name: "Ms. Nivetha Rajan",
      role: "Client Relations Manager",
      bio: "Dedicated to guiding clients through every stage of their property journey with professionalism and care.",
      ...initialsAvatar("NR", "from-teal-500 to-emerald-600"),
    },
    {
      name: "Mr. Rahul Menon",
      role: "Sales & Marketing Director",
      bio: "Leads property promotion initiatives and develops innovative marketing strategies.",
      ...initialsAvatar("RM", "from-indigo-500 to-blue-600"),
    },
    {
      name: "Ms. Ananya Iyer",
      role: "Property Research Analyst",
      bio: "Conducts market analysis and identifies emerging real estate opportunities for investors.",
      ...initialsAvatar("AI", "from-amber-500 to-orange-500"),
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs">Excellence in Collaboration</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            Our <span className="gold-gradient">Leadership Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A team of dedicated professionals committed to delivering excellence in every aspect of real estate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6B97B]/50 transition-all duration-500 flex flex-col"
            >
              {/* Photo or Initials Avatar */}
              <div className="aspect-[4/5] overflow-hidden relative">
                {member.isPlaceholder ? (
                  <div className={`w-full h-full bg-gradient-to-br ${member.bg} flex items-center justify-center`}>
                    <span className="text-white text-5xl font-serif font-bold tracking-widest opacity-80">
                      {member.initials}
                    </span>
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-base font-serif font-bold !text-white group-hover:!text-[#D6B97B] transition-colors leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest leading-snug">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Bottom gold bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#D6B97B] to-amber-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
