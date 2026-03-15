import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Real Estate Management System',
      subtitle: 'Fully Normalized Relational Database (Highlighted)',
      description:
        'Designed and implemented a fully normalized MySQL-based real estate management system with 5 relational tables, foreign key constraints, stored procedures, and 100+ sample records. Includes advanced SQL analytics and ER modeling.',
      tags: ['MySQL', 'SQL', 'Stored Procedures', 'ER Modeling', 'Database Design'],
      metrics: [
        { label: 'Tables', value: '5 Normalized' },
        { label: 'Records', value: '100+ Entries' },
      ],
      gradient: 'from-yellow-500 to-orange-600',
      github: 'https://github.com/Manav9334/RealEstate-Management-System',
      demo: null,
      highlight: true,
    },
    {
      title: 'S&P 500 Risk & Return Analytics',
      subtitle: 'Large-Scale Financial Time-Series Modeling',
      description:
        'Performed quantitative risk-return analysis on 500+ S&P 500 companies using statistical modeling, correlation analysis, hypothesis testing, and regression-based forecasting.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'SciPy'],
      metrics: [
        { label: 'Companies Analyzed', value: '500+' },
        { label: 'Analysis Type', value: 'Risk & Volatility' },
      ],
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/Manav9334/SP500-Analytics',
      demo: null,
    },
    {
      title: 'Disease Prediction using Random Forest',
      subtitle: 'Supervised Machine Learning Model',
      description:
        'Built a classification model using Random Forest for disease prediction with feature engineering, model evaluation, and performance optimization.',
      tags: ['Python', 'Scikit-learn', 'Random Forest', 'Model Evaluation'],
      metrics: [
        { label: 'Algorithm', value: 'Random Forest' },
        { label: 'Task', value: 'Classification' },
      ],
      gradient: 'from-green-500 to-emerald-600',
      github: '#',
      demo: null,
    },
    {
      title: 'Capstone Project',
      subtitle: 'Major Academic Project (In Progress)',
      description:
        'Currently developing a comprehensive capstone project involving applied machine learning and system-level implementation.',
      tags: ['Machine Learning', 'System Design', 'In Progress'],
      metrics: [
        { label: 'Status', value: 'In Progress' },
        { label: 'Type', value: 'Capstone' },
      ],
      gradient: 'from-purple-500 to-pink-600',
      github: '#',
      demo: null,
      inProgress: true,
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
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full ${
                project.highlight ? 'ring-2 ring-yellow-500/40' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-400">{project.subtitle}</p>
                    </div>

                    {project.highlight && (
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-lg p-3"
                    >
                      <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                      <div className="font-bold text-sm">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <div className="flex-grow" />
                {project.github !== '#' && (
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                )}

                {project.inProgress && (
                  <div className="mt-4 text-xs text-yellow-400">
                    🚧 Currently Under Development
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}