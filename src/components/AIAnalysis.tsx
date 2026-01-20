import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const neuralData = Array.from({ length: 50 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  z: Math.random() * 10,
}));

const riskData = [
  { month: 'Jan', risk: 15, predicted: 14 },
  { month: 'Feb', risk: 14, predicted: 13 },
  { month: 'Mar', risk: 13, predicted: 12 },
  { month: 'Apr', risk: 12, predicted: 11 },
  { month: 'May', risk: 12, predicted: 10 },
  { month: 'Jun', risk: 11, predicted: 9 },
];

export function AIAnalysis() {
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
            AI-Powered Analysis
          </h2>
          <p className="text-xl text-slate-400">
            Advanced machine learning for early disease detection
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Neural Network Visualization */}
          <motion.div
            className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Neural Network Processing</h3>
            
            {/* Network visualization */}
            <div className="relative h-80 mb-6">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                <g className="opacity-20">
                  {Array.from({ length: 30 }, (_, i) => (
                    <motion.line
                      key={i}
                      x1={Math.random() * 100 + '%'}
                      y1={Math.random() * 100 + '%'}
                      x2={Math.random() * 100 + '%'}
                      y2={Math.random() * 100 + '%'}
                      stroke="#06b6d4"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 2, delay: i * 0.05 }}
                    />
                  ))}
                </g>
                
                {/* Nodes */}
                {neuralData.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r={point.z / 2}
                    fill="#06b6d4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ delay: i * 0.02, duration: 0.5 }}
                    className="filter drop-shadow-lg"
                  />
                ))}
              </svg>

              {/* Animated scan line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ y: [0, 320, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-2xl font-bold text-cyan-400">2.4M</p>
                <p className="text-xs text-slate-400 mt-1">Parameters</p>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-2xl font-bold text-emerald-400">98.7%</p>
                <p className="text-xs text-slate-400 mt-1">Accuracy</p>
              </div>
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-2xl font-bold text-cyan-400">45ms</p>
                <p className="text-xs text-slate-400 mt-1">Processing</p>
              </div>
            </div>
          </motion.div>

          {/* Pattern Recognition Heatmap */}
          <motion.div
            className="backdrop-blur-xl bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-8 shadow-lg shadow-emerald-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Pattern Recognition</h3>
            
            {/* Heatmap grid */}
            <div className="grid grid-cols-8 gap-1 mb-6">
              {Array.from({ length: 64 }, (_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    background: `rgba(${i % 3 === 0 ? '6, 182, 212' : '16, 185, 129'}, ${Math.random() * 0.5 + 0.2})`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.01 }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <span className="text-sm text-slate-300">Diabetes Markers</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">87%</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <span className="text-sm text-slate-300">Inflammation</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-cyan-400">72%</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <span className="text-sm text-slate-300">Cardiovascular</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">94%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Predictive Risk Curves */}
          <motion.div
            className="lg:col-span-2 backdrop-blur-xl bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Predictive Risk Analysis</h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskData}>
                <defs>
                  <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" label={{ value: 'Risk Score (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #06b6d4',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="risk"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: '#06b6d4', r: 5 }}
                  activeDot={{ r: 8 }}
                  name="Current Risk"
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#10b981"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ fill: '#10b981', r: 5 }}
                  name="Predicted Trend"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Current Risk Level</p>
                <p className="text-3xl font-bold text-cyan-400">11%</p>
                <p className="text-xs text-emerald-400 mt-1">↓ 4% from baseline</p>
              </div>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Predicted (6 months)</p>
                <p className="text-3xl font-bold text-emerald-400">9%</p>
                <p className="text-xs text-emerald-400 mt-1">Improving trajectory</p>
              </div>
              <div className="p-4 bg-slate-700/50 border border-slate-600/20 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Confidence</p>
                <p className="text-3xl font-bold text-white">96.3%</p>
                <p className="text-xs text-slate-400 mt-1">High accuracy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
