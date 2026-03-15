import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Brain, Server, Wrench } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const skillCategories = [
  {
    category: 'Languages',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    ],
  },
  {
    category: 'Libraries',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      {name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    category: 'Databases & Visualization',
    icon: Server,
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Tableau', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tableau.svg' },
      { name: 'Excel', icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg" },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
];



  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* Category header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              {/* Skills list */}
              <div className="grid grid-cols-2 gap-4">
  {category.skills.map((skill, skillIndex) => (
    <motion.div
      key={skill.icon}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
className="flex flex-col items-center justify-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
>
<img
  src={skill.icon}
  alt={skill.name}
  className={`w-10 h-10 mb-2 ${skill.name === 'Tableau' ? 'invert' : ''}`}
/>


  <span className="text-sm text-gray-300">{skill.name}</span>
</motion.div>

  ))}
</div>

            </motion.div>
          ))}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
     
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              15+ Technologies
            </div>
            <div className="text-sm text-gray-400">Proficient In</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              Continuous Learning
            </div>
            <div className="text-sm text-gray-400">Always Evolving</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
