import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  CheckCircle,
  Copy,
  AlertCircle,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: 'Internship / Employment Opportunity',
    message: '',
    spamMath: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const mathQuestion = { q: '5 + 3 = ?', expected: '8' };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.spamMath.trim() !== mathQuestion.expected) {
      setStatus('error');
      setErrorMessage('Please solve the simple human verification check (5 + 3).');
      return;
    }

    setStatus('sending');

    // Prepare real email draft payload
    const subject = encodeURIComponent(`[Executive Inquiry] ${formData.purpose} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Arhan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.company || 'Not Specified'}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}\n\n---\nSent via Mohd. Arhan Ansari Executive Portfolio`
    );

    // Save record to localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('arhan_portfolio_inquiries') || '[]');
    savedInquiries.unshift({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('arhan_portfolio_inquiries', JSON.stringify(savedInquiries.slice(0, 20)));

    setTimeout(() => {
      setStatus('success');
      // Trigger user's email client with pre-filled content
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
            <span>08 · Inquiries & Dialogue</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Available for HR and marketing traineeships, entry-level business roles, and academic collaboration.
          </p>
        </div>

        {/* Dual Layout: Contact Channels Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80">
              <h3 className="font-serif text-2xl text-white font-medium mb-2">
                Executive Channels
              </h3>
              <p className="text-xs text-neutral-400 font-light mb-8 leading-relaxed">
                Direct and professional lines of communication. Inquiries are monitored and answered promptly.
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                {/* Email Direct */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-neutral-200 hover:text-white font-medium break-all transition-colors"
                    >
                      {personal.email}
                    </a>
                    <div className="mt-1">
                      <button
                        onClick={handleCopyEmail}
                        className="text-[11px] text-neutral-400 hover:text-neutral-200 flex items-center gap-1 transition-colors"
                      >
                        {copiedEmail ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedEmail ? 'Copied to clipboard' : 'Copy address'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono block mb-0.5">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-200 hover:text-white font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>{personal.phoneDisplay}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Direct WhatsApp chat with pre-filled greeting
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono block mb-0.5">
                      Base Location
                    </span>
                    <p className="text-neutral-200 font-medium">
                      {personal.location}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Open to on-site and remote professional assignments
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Platform Badges */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-4">
                <a
                  href={`https://${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Mohd. Arhan Ansari on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Mohd. Arhan Ansari on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`tel:+91${personal.phone}`}
                  className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Direct Phone Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Privacy & Anti-Spam Notice */}
            <div className="p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-neutral-300 shrink-0" />
              <div>
                <span>Responsible Data Handling · </span>
                <button
                  onClick={onOpenPrivacy}
                  className="underline hover:text-white transition-colors"
                >
                  View Privacy Notice
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800/80 shadow-xl">
              <h3 className="font-serif text-2xl text-white font-medium mb-1">
                Send an Executive Message
              </h3>
              <p className="text-xs text-neutral-400 font-light mb-8">
                Your inquiry will generate an official communication thread directly with Mohd. Arhan Ansari.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-neutral-950/80 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">Inquiry Prepared & Routed</h4>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your email message has been composed and your local mail client opened. A copy has also been registered in local browser logs.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Purpose */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Retail Corp / University"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                        Purpose of Inquiry *
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-neutral-500 transition-colors"
                      >
                        <option value="Internship / Employment Opportunity">Internship / Employment Opportunity</option>
                        <option value="HR & Marketing Academic Collaboration">Academic Collaboration</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="General Professional Networking">General Networking</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your team, role opportunities, or collaboration proposal..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  {/* Spam Math Verification Challenge */}
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center justify-between gap-4">
                    <div className="text-xs text-neutral-400">
                      <span className="text-neutral-200 font-medium">Human Verification:</span> What is 5 + 3?
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.spamMath}
                      onChange={(e) => setFormData({ ...formData, spamMath: e.target.value })}
                      placeholder="Answer"
                      className="w-24 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-center text-white focus:outline-none focus:border-neutral-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'sending' ? 'Composing...' : 'Submit Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
