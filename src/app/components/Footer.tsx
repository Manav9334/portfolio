import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Tagline */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manav Kumar
              </h3>

            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#research" className="hover:text-blue-400 transition-colors">Research</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Manav9334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/manav-kumar-055607356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:contact@manavkumar.com"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}
