import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, X, Lock, Check } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto no-print">
      <div className="relative w-full max-w-2xl my-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-neutral-300">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-neutral-300" />
            <h3 className="font-serif text-xl text-white font-medium">Privacy & Data Governance</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed">
          <p>
            This website serves as the personal executive portfolio for <strong className="text-white font-medium">Mohd. Arhan Ansari</strong>. We respect your confidentiality and adhere to strict data-protection principles.
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2 font-mono">
              1. Information We Collect
            </h4>
            <p className="text-neutral-400">
              We only receive information that you voluntarily choose to submit via the executive contact form (name, email address, organization, and message content). We do not collect cookies for tracking or sell any visitor information.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2 font-mono">
              2. Use of Submitted Inquiries
            </h4>
            <p className="text-neutral-400">
              Any information submitted is used solely to respond to your professional query, explore internship or employment opportunities, or engage in academic collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2 font-mono">
              3. Security & Anti-Spam
            </h4>
            <p className="text-neutral-400">
              The contact form employs client-side verification to protect against automated spam robots without tracking your identity or fingerprinting your device.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-2 font-mono">
              4. Contact for Privacy Matters
            </h4>
            <p className="text-neutral-400">
              For any questions regarding data handling or to request deletion of any email correspondence, contact directly at <code className="text-white bg-neutral-800 px-1.5 py-0.5 rounded">{portfolioData.personal.email}</code>.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-medium text-xs transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
