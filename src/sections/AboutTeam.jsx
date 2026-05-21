import { motion } from 'framer-motion';

// Import Team Images
import rathna from '../assets/Rathna_Sabapathy.webp';
import narayana from '../assets/Narayana Moorthy.webp';
import sindhu from '../assets/Sindhu.webp';
import rajendran from '../assets/Rajendran.webp';
import ravichandran from '../assets/Ravichandran.webp';
import sivakumar from '../assets/Sivakumar.webp';
import sriYalini from '../assets/Sri Yalini.webp';
import karthik from '../assets/Karthik.webp';
import roshini from '../assets/Roshini.webp';
import divya from '../assets/Divya.webp';

const AboutTeam = () => {
  const team = [
    { name: "MR.V.RATHNA SABAPATHY", role: "B.Sc., B.Ed., MBA., LL.B., MBL., ADNEC., FOUNDER", image: rathna },
    { name: "MR.NARAYANA MOORTHY", role: "Fmr. District Revenue Officer", image: narayana },
    { name: "MRS.SINDHU ARUNKUMAR", role: "BE., LLB., (Legal Expert)", image: sindhu },
    { name: "MR.RAJENDRAN", role: "Fmr.IRS Officer – Finance & GST Expert", image: rajendran },
    { name: "MR.RAVICHANDRAN", role: "ADDL SP (Due Diligence)", image: ravichandran },
    { name: "MR.SIVAKUMAR", role: "Fmr. Tahsildar – Revenue Specialist", image: sivakumar },
    { name: "MS.V.SRI YALINI", role: "B.A. LL.B, LL.M (UK) Advocate", image: sriYalini },
    { name: "MR.P.P.KARTHIK", role: "B.Com., MBA., LLB., CS (Land Transaction Expert)", image: karthik },
    { name: "MS.S.ROSHNI", role: "B.A. LL.B Advocate", image: roshini },
    { name: "MRS.DIVYA PREETHA", role: "MSc CS., IT- Network Management", image: divya },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Excellence in Collaboration</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Our <span className="gold-gradient">Team Members</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our team is a group of dedicated professionals committed to delivering excellence in every aspect of our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6B97B]/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden transition-all duration-700">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-lg font-serif font-bold !text-white group-hover:!text-[#D6B97B] transition-colors">{member.name}</h4>
                <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">
                  {member.role}
                </p>
              </div>
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D6B97B] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
