import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-commerce Customer Segmentation',
      subtitle: 'RFM Analysis + K-Means + Streamlit Dashboard',
      description:
        'Analyzed 4,300+ customers and £8.5M revenue using RFM analysis and K-Means clustering. Built an interactive Streamlit dashboard with real-time filters and PCA visualization explaining 93.7% variance.',
      tags: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'RFM Analysis',
        'K-Means',
        'PCA',
        'Streamlit',
        'Plotly'
      ],
      metrics: [
        { label: 'Customers', value: '4300+' },
        { label: 'Revenue', value: '£8.5M' },
      ],
      gradient: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/Manav9334/customer-segmentation-analysis',
      demo: 'https://customer-segmentation-analysis-manav.streamlit.app/',
      highlight: true,
    },

    {
      title: 'CampusCash',
      subtitle: 'AI-Powered Finance Manager for Students',
      description:
        'Full-stack finance management system built with React, FastAPI, and MySQL. Features AI-powered expense insights using Gemini API, budget tracking, split expenses, gamification (streaks, savings goals), and friend-based leaderboard system.',
      tags: [
        'React',
        'FastAPI',
        'MySQL',
        'JWT Auth',
        'Gemini AI',
        'Full Stack'
      ],
      metrics: [
        { label: 'Architecture', value: '3-Tier + AI' },
        { label: 'Modules', value: '10+ Features' },
      ],
      gradient: 'from-pink-500 to-red-600',
      github: 'https://github.com/Manav9334/Campuscash',
      demo: "https://campuscash-zeta.vercel.app",
    },

    {
      title: 'Real Estate Management System',
      subtitle: 'Fully Normalized Relational Database',
      description:
        'Designed a fully normalized MySQL-based system with 5 relational tables, foreign keys, stored procedures, and 100+ records. Includes advanced SQL queries and ER modeling.',
      tags: ['MySQL', 'SQL', 'Stored Procedures', 'ER Modeling'],
      metrics: [
        { label: 'Tables', value: '5' },
        { label: 'Records', value: '100+' },
      ],
      gradient: 'from-yellow-500 to-orange-600',
      github: 'https://github.com/Manav9334/RealEstate-Management-System',
      demo: null,
    },

    {
      title: 'S&P 500 Risk & Return Analytics',
      subtitle: 'Financial Data Analysis Project',
      description:
        'Performed risk-return analysis on 500+ companies using statistical modeling, correlation, and regression techniques.',
      tags: ['Python', 'Pandas', 'NumPy', 'ML'],
      metrics: [
        { label: 'Companies', value: '500+' },
        { label: 'Focus', value: 'Risk Analysis' },
      ],
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/Manav9334/SP500-Analytics',
      demo: null,
    },

    {
      title: 'Disease Prediction using Random Forest',
      subtitle: 'Machine Learning Classification',
      description:
        'Built a Random Forest model for disease prediction with feature engineering and performance evaluation.',
      tags: ['Python', 'ML', 'Random Forest'],
      metrics: [
        { label: 'Type', value: 'Classification' },
        { label: 'Model', value: 'Random Forest' },
      ],
      gradient: 'from-green-500 to-emerald-600',
      github: '#',
      demo: null,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col h-full ${
                project.highlight ? 'ring-2 ring-yellow-500/40' : ''
              }`}
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition`} />

              <div className="relative flex flex-col h-full">

                <div className="mb-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-blue-400">{project.subtitle}</p>
                    </div>
                    {project.highlight && <TrendingUp className="text-yellow-400" />}
                  </div>

                  <p className="text-gray-300 mt-3">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">{m.label}</div>
                      <div className="font-bold">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs bg-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}