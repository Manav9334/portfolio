import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';

import { useState } from 'react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const experiences = [
  {
    type: 'Job Simulation',
    icon: Briefcase,
    title: 'GenAI Powered Data Analytics Job Simulation',
    organization: 'TATA Group (Forage Platform)',
    date: 'June 2025',
    description:
      'Completed practical tasks including EDA, risk profiling, delinquency prediction, and AI-driven collections strategy.',
    skills: ['EDA', 'Predictive Modeling', 'AI Strategy'],
    gradient: 'from-blue-500 to-cyan-500',
    image: '/certificates/tata.png',
  },
  {
    type: 'Certification',
    icon: Award,
    title: 'Machine Learning Training',
    organization: 'Acmegrade (IIT Bombay Collaboration)',
    date: 'Nov 2023 – Dec 2023',
    description:
      'Structured ML training covering supervised learning and implementation.',
    skills: ['Supervised Learning', 'Model Evaluation'],
    gradient: 'from-purple-500 to-pink-500',
    image: '/certificates/acmegrade.jpg',
  },
  {
    type: 'Workshop',
    icon: GraduationCap,
    title: 'Design & Implementation Workshop',
    organization: 'NIIT University',
    date: 'Sept 2025',
    description:
      'Three-day workshop focused on system design and structured problem-solving.',
    skills: ['System Design', 'Problem Solving'],
    gradient: 'from-green-500 to-emerald-500',
    image: '/certificates/niit.jpeg',
  },
  {
    type: 'Hackathon',
    icon: Award,
    title: 'RECKON 6.0 Hackathon',
    organization: 'JIET Universe',
    date: 'March 2025',
    description:
      'National-level hackathon participation in team-based innovation challenge.',
    skills: ['Teamwork', 'Rapid Prototyping'],
    gradient: 'from-orange-500 to-red-500',
    image: '/certificates/Reckon.jpeg',
  },
];

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center border-4 border-[#0a0a0f]`}>
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <div
  onClick={() => setSelectedImage(exp.image)}
  className="cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                              {exp.type}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" />
                              {exp.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-blue-400">{exp.organization}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-sm text-gray-400">Certifications & Workshops</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              Industry
            </div>
            <div className="text-sm text-gray-400">Standard Training</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Continuous
            </div>
            <div className="text-sm text-gray-400">Learning Path</div>
          </div>
        </motion.div>
      </div>

      {/* 🔥 Certificate Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
