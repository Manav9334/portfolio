import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FileText, Download, Award, Target, Github } from 'lucide-react';

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const researchProject = {
    title: 'AI-Powered Crop Disease Monitoring System',
    institution: 'NIIT University – NU 302 R&D Project',
    year: '2026 (Ongoing)',
    abstract:
      'A dual-pathway AI system for potato leaf disease detection integrating environmental tabular data with visual deep learning. The framework combines a KNN-based environmental classifier with a lightweight CNN-Transformer hybrid (LitePLDNet) optimized for edge deployment.',
    contributions: [
      'Designed dual-pathway architecture (Environmental + Vision)',
      'Achieved 98.13% accuracy using KNN on tabular weather data',
      'Developed lightweight CNN-Transformer hybrid (LitePLDNet)',
      'Applied MixUp and CutMix augmentation for field robustness',
      'Optimized for edge deployment (Raspberry Pi target)',
    ],
    status: 'In Progress',
    gradient: 'from-green-500 to-emerald-600',
    github: 'https://github.com/Manav9334/AGROAI',
    report: '/research/NU-302-RnD-Project.pdf',
  };

  return (
    <section id="research" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research & Innovation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
        >
          {/* Top Gradient Accent */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${researchProject.gradient}`} />

          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Left Content */}
              <div className="lg:col-span-2 space-y-6">

                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {researchProject.title}
                    </h3>

                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {researchProject.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {researchProject.institution}
                    </span>
                    <span>•</span>
                    <span>{researchProject.year}</span>
                  </div>
                </div>

                {/* Abstract */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {researchProject.abstract}
                  </p>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Contributions
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {researchProject.contributions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">

                  <a
                    href={researchProject.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>

                  <a
                    href={researchProject.report}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${researchProject.gradient} rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </a>

                </div>
              </div>

              {/* Right Architecture Preview */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">
                    System Architecture
                  </h4>

                  <div className={`relative aspect-square bg-gradient-to-br ${researchProject.gradient} bg-opacity-10 rounded-xl border border-white/10 p-6 flex items-center justify-center`}>

                    <div className="text-center space-y-4">
                      <FileText className="w-10 h-10 mx-auto text-white/60" />
                      <p className="text-sm text-gray-300">
                        Dual Pathway Model
                      </p>
                      <p className="text-xs text-gray-400">
                        Environmental (KNN) + Visual (LitePLDNet)
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}