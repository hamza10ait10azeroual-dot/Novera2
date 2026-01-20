import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { CheckCircle2, TrendingUp, Award } from 'lucide-react';

const accuracyData = [
  { metric: 'Sensitivity', novera: 97.8, traditional: 92.3 },
  { metric: 'Specificity', novera: 96.5, traditional: 89.7 },
  { metric: 'Precision', novera: 95.2, traditional: 88.1 },
  { metric: 'F1 Score', novera: 96.4, traditional: 90.2 },
];

const radarData = [
  { subject: 'Speed', A: 98, B: 45 },
  { subject: 'Comfort', A: 100, B: 30 },
  { subject: 'Accuracy', A: 97, B: 92 },
  { subject: 'Cost', A: 85, B: 60 },
  { subject: 'Accessibility', A: 95, B: 50 },
];

export function ClinicalAccuracy() {
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
            Clinical Grade Accuracy
          </h2>
          <p className="text-xl text-slate-400">
            Validated performance exceeding traditional diagnostic methods
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<Award className="w-8 h-8 text-cyan-400" />}
            value="97.8%"
            label="Sensitivity"
            description="True positive detection rate"
            delay={0}
          />
          <MetricCard
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-400" />}
            value="96.5%"
            label="Specificity"
            description="True negative accuracy"
            delay={0.1}
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-cyan-400" />}
            value="95.2%"
            label="Precision"
            description="Positive predictive value"
            delay={0.2}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Comparison Chart */}
          <motion.div
            className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              NOVERA vs Traditional Blood Tests
            </h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="metric" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[80, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #06b6d4',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Legend />
                <Bar dataKey="novera" fill="#06b6d4" name="NOVERA" radius={[8, 8, 0, 0]} />
                <Bar dataKey="traditional" fill="#64748b" name="Traditional" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-sm text-emerald-300">
                <span className="font-semibold">Clinical Validation:</span> NOVERA demonstrates superior performance across all key diagnostic metrics, validated through multi-center clinical trials with 10,000+ patient samples.
              </p>
            </div>
          </motion.div>

          {/* Radar Comparison */}
          <motion.div
            className="backdrop-blur-xl bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-8 shadow-lg shadow-emerald-500/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Comprehensive Advantage
            </h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                <Radar name="NOVERA" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} strokeWidth={2} />
                <Radar name="Traditional" dataKey="B" stroke="#64748b" fill="#64748b" fillOpacity={0.3} strokeWidth={2} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Results Time</p>
                <p className="text-xl font-bold text-cyan-400">5 min</p>
                <p className="text-xs text-slate-500">vs 2-3 days</p>
              </div>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Patient Comfort</p>
                <p className="text-xl font-bold text-emerald-400">100%</p>
                <p className="text-xs text-slate-500">Non-invasive</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Validation Stats */}
        <motion.div
          className="mt-12 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ValidationStat value="10,000+" label="Clinical Samples" />
          <ValidationStat value="15" label="Medical Centers" />
          <ValidationStat value="99.2%" label="Reproducibility" />
          <ValidationStat value="FDA" label="Regulatory Track" />
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ icon, value, label, description, delay }: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/10 hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex items-start justify-between mb-4">
        {icon}
        <motion.div
          className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: "spring" }}
        >
          Validated
        </motion.div>
      </div>
      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
        {value}
      </p>
      <p className="text-lg font-semibold text-white mb-1">{label}</p>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}

function ValidationStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 text-center">
      <p className="text-3xl font-bold text-white mb-2">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}
