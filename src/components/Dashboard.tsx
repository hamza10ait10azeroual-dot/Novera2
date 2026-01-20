import { motion } from 'motion/react';
import { Activity, Droplets, Zap, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const biomarkerData = [
  { name: 'Mon', value: 7.2, normal: 7.0 },
  { name: 'Tue', value: 7.1, normal: 7.0 },
  { name: 'Wed', value: 7.3, normal: 7.0 },
  { name: 'Thu', value: 7.0, normal: 7.0 },
  { name: 'Fri', value: 7.2, normal: 7.0 },
  { name: 'Sat', value: 7.4, normal: 7.0 },
  { name: 'Sun', value: 7.1, normal: 7.0 },
];

export function Dashboard() {
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
            Smart Health Dashboard
          </h2>
          <p className="text-xl text-slate-400">
            Real-time biomarker monitoring powered by AI
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Biomarker Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Biomarker Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <BiomarkerCard
                icon={<Droplets className="w-8 h-8" />}
                title="pH Level"
                value="7.2"
                unit="pH"
                status="normal"
                change="+0.1"
                color="cyan"
              />
              <BiomarkerCard
                icon={<Activity className="w-8 h-8" />}
                title="Enzyme Activity"
                value="94"
                unit="%"
                status="normal"
                change="+2.3"
                color="emerald"
              />
              <BiomarkerCard
                icon={<Zap className="w-8 h-8" />}
                title="Metabolic Index"
                value="1.8"
                unit="mmol/L"
                status="warning"
                change="-0.2"
                color="yellow"
              />
              <BiomarkerCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="Risk Prediction"
                value="12"
                unit="%"
                status="normal"
                change="-1.5"
                color="cyan"
              />
            </div>

            {/* Trend Graph */}
            <motion.div
              className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">pH Level Trend</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-emerald-400/50 rounded-full" />
                    <span>Normal Range</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={biomarkerData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[6.5, 7.5]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #06b6d4',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fill="url(#colorValue)" />
                  <Line type="monotone" dataKey="normal" stroke="#10b981" strokeWidth={1} strokeDasharray="5 5" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-sm text-cyan-300">
                  <span className="font-semibold">AI Insight:</span> pH levels are stable and within optimal range. Continue current hydration routine.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Health Score & Alerts */}
          <div className="space-y-6">
            {/* Health Score Gauge */}
            <HealthScoreGauge score={87} />

            {/* Alerts Panel */}
            <motion.div
              className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                <AlertItem
                  icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
                  title="Early Warning Detected"
                  description="Metabolic index slightly elevated"
                  time="2 hours ago"
                  type="warning"
                />
                <AlertItem
                  icon={<CheckCircle className="w-5 h-5 text-emerald-400" />}
                  title="Normal Range"
                  description="All enzyme markers stable"
                  time="5 hours ago"
                  type="success"
                />
                <AlertItem
                  icon={<Clock className="w-5 h-5 text-cyan-400" />}
                  title="Follow-Up Suggested"
                  description="Schedule next screening"
                  time="1 day ago"
                  type="info"
                />
              </div>
            </motion.div>

            {/* User Profile Timeline */}
            <motion.div
              className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Timeline History</h3>
              <div className="space-y-4">
                <TimelineItem date="Today" event="Morning screening completed" />
                <TimelineItem date="Yesterday" event="All biomarkers within range" />
                <TimelineItem date="3 days ago" event="Risk score improved by 3%" />
                <TimelineItem date="1 week ago" event="First screening baseline set" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiomarkerCard({ icon, title, value, unit, status, change, color }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'alert';
  change: string;
  color: 'cyan' | 'emerald' | 'yellow';
}) {
  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 shadow-cyan-500/10',
    emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 shadow-emerald-500/10',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 shadow-yellow-500/10',
  };

  const iconColors = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    yellow: 'text-yellow-400',
  };

  return (
    <motion.div
      className={`backdrop-blur-xl bg-gradient-to-br ${colorClasses[color]} border rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={iconColors[color]}>{icon}</div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'normal' ? 'bg-emerald-500/20 text-emerald-400' :
          status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          {status}
        </span>
      </div>
      <h4 className="text-sm text-slate-400 mb-2">{title}</h4>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span className="text-slate-400">{unit}</span>
      </div>
      <div className="mt-2 flex items-center gap-1 text-sm">
        <TrendingUp className={`w-4 h-4 ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`} />
        <span className={change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>{change}</span>
        <span className="text-slate-500">vs last week</span>
      </div>
    </motion.div>
  );
}

function HealthScoreGauge({ score }: { score: number }) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-white mb-6">Overall Health Score</h3>
      <div className="relative w-48 h-48 mx-auto">
        {/* Outer ring */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="#1e293b"
            strokeWidth="12"
            fill="none"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="80"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 502" }}
            animate={{ strokeDasharray: `${(score / 100) * 502} 502` }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {score}
          </motion.span>
          <span className="text-slate-400 text-sm mt-1">Excellent</span>
        </div>
      </div>
      <p className="text-center text-slate-400 text-sm mt-4">
        Your health metrics are performing well. Keep up the good habits!
      </p>
    </motion.div>
  );
}

function AlertItem({ icon, title, description, time, type }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  type: 'warning' | 'success' | 'info';
}) {
  const bgColors = {
    warning: 'bg-yellow-500/10 border-yellow-500/20',
    success: 'bg-emerald-500/10 border-emerald-500/20',
    info: 'bg-cyan-500/10 border-cyan-500/20',
  };

  return (
    <div className={`p-3 rounded-lg border ${bgColors[type]}`}>
      <div className="flex items-start gap-3">
        {icon}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-slate-400 mt-0.5">{description}</p>
          <p className="text-xs text-slate-500 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ date, event }: { date: string; event: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        <div className="w-px h-full bg-cyan-500/20" />
      </div>
      <div className="pb-4">
        <p className="text-sm font-semibold text-cyan-400">{date}</p>
        <p className="text-sm text-slate-400 mt-1">{event}</p>
      </div>
    </div>
  );
}
