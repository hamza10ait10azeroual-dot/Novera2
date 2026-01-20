import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { Technology } from './components/Technology';
import { AIAnalysis } from './components/AIAnalysis';
import { ClinicalAccuracy } from './components/ClinicalAccuracy';
import { MobilePreview } from './components/MobilePreview';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <div id="ai-analysis">
        <AIAnalysis />
      </div>
      <div id="clinical">
        <ClinicalAccuracy />
      </div>
      <div id="mobile">
        <MobilePreview />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}