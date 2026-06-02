import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactFormSection = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6 text-[#D6B97B]" />,
      title: "Location",
      content: "xxxxxxxx, xxxxxxxx, xxxxxxxx - xxxxxx."
    },
    {
      icon: <Phone className="w-6 h-6 text-[#D6B97B]" />,
      title: "Phone",
      content: (
        <div className="flex flex-col">
          <span>xxxxxxxxxx</span>
          <span>xxxxxxxxxx</span>
          <span>xxxxxxxxxx</span>
        </div>
      )
    },
    {
      icon: <Mail className="w-6 h-6 text-[#D6B97B]" />,
      title: "Email",
      content: "xxxxxxxxxx@xxxxxxxx.com"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs">Reach Out</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                For More Details <span className="gold-gradient">Contact Us!</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connectivity and comfort are key to the ideal home office. Here we offer some tips to create the perfect study zone in your share house. Create your best-ever home in style right here, right now. We bring you lifestyle advice, inspiration and ideas from some of leading.
              </p>
            </div>

            <div className="space-y-8 bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
              {contactDetails.map((detail, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1A335E]">
                    {detail.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 text-lg">{detail.title}</h4>
                    <div className="text-gray-600 leading-relaxed font-medium">
                      {detail.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-black/5 border border-gray-100"
          >
            <div className="mb-10 space-y-4">
              <h3 className="text-3xl font-serif font-bold text-gray-900">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we will get back to you shortly.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-900 ml-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D6B97B] focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-900 ml-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D6B97B] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-900 ml-2">Message</label>
                <textarea 
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D6B97B] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full group flex items-center justify-center gap-3 bg-[#1A335E] text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#D6B97B] transition-all duration-500 shadow-xl shadow-blue-900/10"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
