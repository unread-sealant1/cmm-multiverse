import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Zap, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && <p className="text-white/60 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const about = [
  {
    icon: <Zap size={24} />, title: "Innovation First",
    desc: "Technology evolves every day, and so do we. We embrace emerging technologies, challenge conventional thinking, and continuously explore better ways to solve complex problems.",
  },
  {
    icon: <Shield size={24} />, title: "Excellence Without Compromise",
    desc: "Quality is not an option. It is a standard. Every project we deliver is built with precision, attention to detail, and a commitment to production-grade performance, security, and reliability.",
  },
  {
    icon: <Users size={24} />, title: "People Before Products",
    desc: "Technology is ultimately about people. We design every experience with users in mind, ensuring accessibility, usability, and meaningful value in every interaction.",
  },
  {
    icon: <Shield size={24} />, title: "Integrity and Accountability",
    desc: "Trust is earned through consistent action. We take ownership of our work, communicate transparently, and hold ourselves accountable for delivering results.",
  },
  {
    icon: <Lightbulb size={24} />, title: "Continuous Growth",
    desc: "Learning never stops. We invest in knowledge, embrace challenges, and continually improve our skills, processes, and solutions to stay ahead of an ever-changing technological landscape.",
  },
  {
    icon: <Target size={24} />, title: "Impact Driven",
    desc: "Success is measured by the value we create. We focus on building products, services, and ventures that generate meaningful outcomes for businesses, communities, and future generations.",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">CMM Multiverse</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Building the future through technology. We design, develop, and deliver transformative digital solutions
            that help businesses innovate, scale, and succeed.
          </p>
        </motion.div>

        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Building the Future Through Technology</h2>
              <p className="text-white/60 leading-relaxed">
                CMM Multiverse is a technology company dedicated to building scalable digital ecosystems, developing
                innovative products, and incubating ventures that solve real-world problems. We combine strategic
                thinking, cutting-edge technology, and world-class execution to help businesses thrive in an
                increasingly digital world.
              </p>
              <p className="text-white/60 leading-relaxed">
                Founded by <strong className="text-white">Cassidy Mahlatse Masila</strong>, CMM Multiverse was
                created with a simple but ambitious vision: to transform ideas into impactful digital realities.
                What started as a passion for technology and innovation has evolved into a growing ecosystem
                focused on software development, digital transformation, business solutions, and venture creation.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today, we design and develop modern websites, web applications, enterprise systems, and digital
                platforms that empower organizations to operate more efficiently, reach more customers, and scale
                with confidence. From intuitive user interfaces to secure backend infrastructure, every solution
                we create is engineered for performance, reliability, and long-term growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-white/60 leading-relaxed">
                But CMM Multiverse is more than a software company.
              </p>
              <p className="text-white/60 leading-relaxed">
                We are building an ecosystem of technology-driven ventures designed to create opportunities, solve
                meaningful challenges, and contribute to economic growth. Through our innovation and incubation
                initiatives, we actively invest in ideas that have the potential to transform industries and
                improve lives.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 backdrop-blur-sm">
                <p className="text-white font-bold mb-2">Leikantse Tech</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our technology and hardware division focused on providing accessible technology solutions,
                  technical support services, and future-focused innovations that help individuals and businesses
                  stay connected in a rapidly evolving digital landscape.
                </p>
                <Link to="/ventures/leikantse-tech" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mt-3 font-medium">
                  Explore Leikantse Tech <ArrowRight size={14} />
                </Link>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-brand-primary font-bold uppercase tracking-widest mb-1">Our Belief</p>
                <p className="text-white/80 italic leading-relaxed">
                  &ldquo;Technology should not create complexity. It should eliminate it.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle subtitle="The principles that define how we work, build, and grow.">
            Our Core Values
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye size={32} />,
                title: "Our Vision",
                desc: "To become a global catalyst for digital evolution by building innovative technologies, empowering businesses, and creating opportunities that shape the future.",
              },
              {
                icon: <Target size={32} />,
                title: "Our Mission",
                desc: "To design, develop, and deliver transformative digital solutions that help businesses innovate, scale, and succeed while fostering technological advancement and economic empowerment.",
              },
              {
                icon: <Heart size={32} />,
                title: "Our Purpose",
                desc: "To simplify complexity through technology and create solutions that unlock growth, opportunity, and meaningful impact.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center group hover:border-brand-primary/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 text-brand-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 px-6 rounded-[3rem] bg-gradient-to-b from-brand-primary/10 to-brand-secondary/10 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&rsquo;s Build Something Impactful</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Whether you need a modern web application, a full digital transformation, or have an idea
            worth incubating, we&rsquo;d love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-secondary transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
