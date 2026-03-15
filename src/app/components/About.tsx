import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Eye, Database, Server, BarChart3 } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const focusAreas = [
  { icon: Brain, title: 'Machine Learning & Predictive Modeling', color: 'from-blue-500 to-cyan-500' },
  { icon: BarChart3, title: 'Statistical Analysis & Hypothesis Testing', color: 'from-purple-500 to-pink-500' },
  { icon: Database, title: 'Feature Engineering & Data Preprocessing', color: 'from-yellow-500 to-amber-500' },
  { icon: Server, title: 'Model Evaluation & Performance Optimization', color: 'from-orange-500 to-red-500' },
];


  const education = [
    {
      year: '2023-2027',
      degree: 'B.Tech in Computer Science',
      Spacialization: 'Data Science',
      institution: 'NIIT University',
    },
    {
      year: '2022',
      degree: 'Class 12th',
      institution: 'DAV Public School'
    },
        {
      year: '2020',
      degree: 'Class 10th',
      institution: 'DAV Public School'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio and Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Professional Bio</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm an AI & Data Analytics Engineer passionate about leveraging machine learning and advanced analytics to solve complex, real-world problems. Skilled in predictive modeling, statistical analysis, and data-driven decision-making, with experience building high-performance models that deliver measurable impact.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My work focuses on transforming raw data into actionable insights and scalable AI solutions that support strategic business outcomes.
              </p>

              <h4 className="text-xl font-bold mb-6">Focus Areas</h4>
              <div className="grid gap-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${area.color}`}>
                        <area.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{area.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8">Education</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                      className="relative pl-12"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-sm text-blue-400 font-semibold mb-2">{edu.year}</div>
                        <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                        <p className="text-gray-400 mb-2">{edu.institution}</p>
                        {edu.Spacialization && (
                          <p className="text-sm text-gray-500">{edu.Spacialization}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-400 mt-1">Tech Stacks</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
