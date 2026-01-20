import { motion } from 'motion/react';
import { Shield, Cloud, Lock, Award, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 relative border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Compliance Icons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mb-12 pb-12 border-b border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ComplianceIcon icon={<Shield className="w-6 h-6" />} label="HIPAA Compliant" />
          <ComplianceIcon icon={<Lock className="w-6 h-6" />} label="End-to-End Encrypted" />
          <ComplianceIcon icon={<Cloud className="w-6 h-6" />} label="Secure Cloud Storage" />
          <ComplianceIcon icon={<Award className="w-6 h-6" />} label="FDA Breakthrough" />
          <ComplianceIcon icon={<Shield className="w-6 h-6" />} label="ISO 13485" />
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              NOVERA
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Pioneering non-invasive health screening through AI-powered biosensor technology.
            </p>
            <div className="flex gap-3">
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <FooterLink text="NOVERA Device" />
              <FooterLink text="Mobile App" />
              <FooterLink text="Enterprise Platform" />
              <FooterLink text="API Integration" />
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" />
              <FooterLink text="Press Kit" />
              <FooterLink text="Clinical Research" />
              <FooterLink text="Partners" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>info@novera.health</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>San Francisco, CA<br />Boston, MA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 NOVERA Health Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-yellow-400/80 text-center">
            <strong>Medical Disclaimer:</strong> NOVERA is designed for health screening and monitoring purposes. Always consult with healthcare professionals for medical diagnosis and treatment decisions. This platform is not intended to collect personally identifiable information (PII) or sensitive personal data.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function ComplianceIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-3 bg-slate-800/60 border border-cyan-500/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
        {icon}
      </div>
      <span className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors text-center">
        {label}
      </span>
    </motion.div>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a href="#" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
        {text}
      </a>
    </li>
  );
}

function SocialIcon() {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 bg-slate-800/60 border border-cyan-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-5 h-5 bg-slate-600 rounded" />
    </motion.a>
  );
}
