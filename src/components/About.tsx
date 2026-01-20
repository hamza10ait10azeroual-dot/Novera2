import { motion } from 'motion/react';
import { Target, Heart, Zap, Globe } from 'lucide-react';

export function About() {
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
            Our Vision
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Revolutionizing healthcare through accessible, non-invasive early disease detection for everyone, everywhere
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <VisionCard
            icon={<Target className="w-8 h-8 text-cyan-400" />}
            title="Early Detection"
            description="Identify health risks before symptoms appear, enabling proactive care"
            delay={0}
          />
          <VisionCard
            icon={<Heart className="w-8 h-8 text-emerald-400" />}
            title="Accessible Care"
            description="Making advanced diagnostics available to everyone, not just hospitals"
            delay={0.1}
          />
          <VisionCard
            icon={<Zap className="w-8 h-8 text-cyan-400" />}
            title="Zero Invasion"
            description="No needles, no pain. Just simple saliva-based screening"
            delay={0.2}
          />
          <VisionCard
            icon={<Globe className="w-8 h-8 text-emerald-400" />}
            title="Global Impact"
            description="Democratizing healthcare diagnostics for underserved communities"
            delay={0.3}
          />
        </div>

        {/* Mission Statement */}
        <motion.div
          className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-12 shadow-lg shadow-cyan-500/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Mission: Early, Accessible, Non-Invasive Disease Detection
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                At NOVERA, we believe that everyone deserves access to cutting-edge health screening technology. Our AI-powered biosensor platform transforms a simple saliva sample into comprehensive health insights, making early detection convenient, comfortable, and cost-effective.
              </p>
              <p className="text-slate-400 mb-6">
                By combining advanced nanotechnology, machine learning, and clinical expertise, we're creating a future where preventive healthcare is the norm, not the exception.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge text="ISO 13485 Certified" />
                <Badge text="CE Mark Pending" />
                <Badge text="FDA Breakthrough Device" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="50M+" label="Lives to Impact" />
              <StatCard value="2019" label="Founded" />
              <StatCard value="30+" label="Biomarkers" />
              <StatCard value="120+" label="Team Members" />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the Healthcare Revolution
          </h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Partner with us to bring non-invasive, AI-powered health screening to your clinic, workplace, or community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionCard({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5 hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
        {value}
      </p>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400">
      {text}
    </span>
  );
}
