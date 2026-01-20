import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.05 : 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Molecular patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="molecules" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="3" fill="#06b6d4" />
            <circle cx="150" cy="100" r="2" fill="#10b981" />
            <circle cx="100" cy="150" r="2.5" fill="#06b6d4" />
            <line x1="50" y1="50" x2="150" y2="100" stroke="#06b6d4" strokeWidth="0.5" />
            <line x1="150" y1="100" x2="100" y2="150" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#molecules)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Logo */}
        <motion.div
          className="mb-8 inline-block"
          animate={{ scale: pulseScale }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h1 className="relative text-8xl md:text-9xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                NOVERA
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-cyan-400">Early Detection.</span>{' '}
          <span className="text-emerald-400">Intelligent Care.</span>{' '}
          <span className="text-white">Zero Invasion.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            See How It Works
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
            Request Demo
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
