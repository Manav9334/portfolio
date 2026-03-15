import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import profileImg from '../../assets/manav2.png';



export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={`${(i * 5 + 10) % 100}%`}
              cy={`${(i * 7 + 20) % 100}%`}
              r="2"
              fill="currentColor"
              className="text-blue-400"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manav Kumar
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Engineer | Data Analytics | Data Scientist
          </motion.p>

          <motion.p
            className="text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming complex real-world challenges into intelligent solutions through cutting-edge AI, machine learning, and Predictive Modeling. Building the future with data-driven innovation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
               href="/Manav_Kumar_Resume.pdf"
               download
                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
                <Download className="w-5 h-5" />
                 Download Resume
            </a>

            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://github.com/Manav9334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-blue-400 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manav-kumar-055607356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-blue-400 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="manav.kumar23@st.niituniversity.in"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-blue-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30" />
            
            {/* Image container */}
            <div className="relative">
              <img
                src={profileImg}
                alt="Manav Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
