import { motion } from 'motion/react';
import { ArrowRight, Cpu, Database, Brain } from 'lucide-react';

export function Technology() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-slate-400">
            From sample to diagnosis in minutes, powered by advanced biosensors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Sensor Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-12 shadow-lg shadow-cyan-500/10">
              {/* Sensor visualization */}
              <div className="relative aspect-square">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main sensor device */}
                <div className="relative z-10">
                  {/* Device body */}
                  <motion.div
                    className="w-full h-64 bg-gradient-to-b from-slate-700/80 to-slate-800/80 rounded-2xl border-2 border-cyan-500/30 shadow-lg relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* LED indicators */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Screen display */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-gradient-to-b from-cyan-900/50 to-slate-900/50 rounded-lg border border-cyan-500/30 p-3">
                      <div className="space-y-2">
                        <motion.div
                          className="h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                          animate={{ width: ["40%", "80%", "40%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                          className="h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                          animate={{ width: ["60%", "90%", "60%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div
                          className="h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                          animate={{ width: ["30%", "70%", "30%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                      </div>
                    </div>

                    {/* Sensor slot */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-900/80 rounded-lg border border-cyan-500/40" />
                  </motion.div>

                  {/* Test strip */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-32 bg-gradient-to-b from-white to-slate-100 rounded-sm shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-full h-8 bg-gradient-to-r from-cyan-500/40 to-emerald-500/40 mt-4 rounded-sm" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Flow Animation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <DataFlowStep
              icon={<motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-8 h-8 text-cyan-400" />
              </motion.div>}
              title="Saliva Sample"
              description="Non-invasive collection using paper strip biosensor. No needles, no pain."
              color="cyan"
              delay={0.1}
            />
            
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
              </motion.div>
            </div>

            <DataFlowStep
              icon={<motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Database className="w-8 h-8 text-emerald-400" />
              </motion.div>}
              title="Biosensor Analysis"
              description="Advanced molecular detection captures biomarkers at nanoscale precision."
              color="emerald"
              delay={0.2}
            />

            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
              </motion.div>
            </div>

            <DataFlowStep
              icon={<motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-cyan-400" />
              </motion.div>}
              title="AI Diagnosis"
              description="Machine learning algorithms analyze patterns and predict health risks instantly."
              color="cyan"
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataFlowStep({ icon, title, description, color, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'cyan' | 'emerald';
  delay: number;
}) {
  const borderColor = color === 'cyan' ? 'border-cyan-500/30' : 'border-emerald-500/30';
  const shadowColor = color === 'cyan' ? 'shadow-cyan-500/10' : 'shadow-emerald-500/10';

  return (
    <motion.div
      className={`backdrop-blur-xl bg-slate-800/40 border ${borderColor} rounded-xl p-6 shadow-lg ${shadowColor} hover:scale-105 transition-transform duration-300`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
