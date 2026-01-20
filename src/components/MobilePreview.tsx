import { motion } from 'motion/react';
import { Smartphone, Activity, Bell, User, Home } from 'lucide-react';

export function MobilePreview() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Your Health, Always Within Reach
          </h2>
          <p className="text-xl text-slate-400">
            Monitor your biomarkers anytime, anywhere with the NOVERA mobile app
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Phone Frame */}
            <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-20" />
              
              {/* Screen Content */}
              <div className="relative h-full bg-gradient-to-b from-slate-950 to-slate-900 p-6 pt-12 overflow-hidden">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 border border-slate-400 rounded-sm" />
                    <div className="w-1 h-3 bg-slate-400 rounded-sm" />
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Welcome back!</h3>
                  <p className="text-sm text-slate-400">Your health score is excellent</p>
                </div>

                {/* Health Score Circle - Smaller */}
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1e293b"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#mobileGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 352" }}
                      animate={{ strokeDasharray: "306 352" }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">87</span>
                    <span className="text-xs text-slate-400">Excellent</span>
                  </div>
                </motion.div>

                {/* Quick Stats - Smaller */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">pH Level</p>
                    <p className="text-xl font-bold text-cyan-400">7.2</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">Enzyme</p>
                    <p className="text-xl font-bold text-emerald-400">94%</p>
                  </div>
                </div>

                {/* Alert */}
                <motion.div
                  className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-start gap-2">
                    <Bell className="w-4 h-4 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-yellow-400">Follow-up reminder</p>
                      <p className="text-xs text-slate-400 mt-0.5">Next screening in 3 days</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2">
                  <div className="flex items-center justify-around">
                    <NavIcon icon={<Home className="w-5 h-5" />} active />
                    <NavIcon icon={<Activity className="w-5 h-5" />} />
                    <NavIcon icon={<Bell className="w-5 h-5" />} />
                    <NavIcon icon={<User className="w-5 h-5" />} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="space-y-6 max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Feature
              title="Real-time Sync"
              description="Instant biomarker updates from your NOVERA device to your phone"
              delay={0.4}
            />
            <Feature
              title="Smart Notifications"
              description="AI-powered alerts for abnormal readings and health insights"
              delay={0.5}
            />
            <Feature
              title="Trend Analysis"
              description="Track your health journey with beautiful visualizations"
              delay={0.6}
            />
            <Feature
              title="Secure & Private"
              description="End-to-end encrypted data with HIPAA compliance"
              delay={0.7}
            />
            
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors">
                  <Smartphone className="w-5 h-5 mx-auto mb-1 text-slate-400" />
                  <p className="text-xs text-slate-300">App Store</p>
                </button>
                <button className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors">
                  <Smartphone className="w-5 h-5 mx-auto mb-1 text-slate-400" />
                  <p className="text-xs text-slate-300">Play Store</p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NavIcon({ icon, active }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <div className={`p-2 rounded-xl transition-colors ${
      active ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-500'
    }`}>
      {icon}
    </div>
  );
}

function Feature({ title, description, delay }: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2" />
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}
