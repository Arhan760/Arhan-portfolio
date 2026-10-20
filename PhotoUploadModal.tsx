import React, { useRef } from 'react';
import { Camera, Upload, Trash2, X, Check, Image as ImageIcon } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onPhotoSelected: (dataUrl: string | null) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onPhotoSelected
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onPhotoSelected(result);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    onPhotoSelected(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 no-print">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-2.5">
            <Camera className="w-5 h-5 text-neutral-300" />
            <h3 className="font-serif text-xl text-white font-medium">Professional Photograph</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Current Preview or Silhouette */}
          <div className="w-32 h-40 rounded-2xl overflow-hidden border-2 border-neutral-700 bg-neutral-950 flex items-center justify-center mb-6 relative shadow-lg">
            {currentPhoto ? (
              <img
                src={currentPhoto}
                alt="Uploaded Headshot"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-4">
                <ImageIcon className="w-10 h-10 text-neutral-600 mb-2" />
                <span className="text-[10px] text-neutral-500 uppercase font-mono">Executive Emblem</span>
              </div>
            )}
          </div>

          <h4 className="text-base text-white font-medium mb-1">
            {currentPhoto ? 'Custom Headshot Active' : 'Silver Monogram Emblem Active'}
          </h4>
          <p className="text-xs text-neutral-400 max-w-sm leading-relaxed mb-6">
            Upload your professional photograph (JPG, PNG, or WebP) to display directly in the magazine hero frame and resume headers.
          </p>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Choose Image from Device</span>
            </button>

            {currentPhoto && (
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border border-red-500/30 hover:border-red-500 text-red-400 hover:bg-red-500/10 text-xs font-medium flex items-center gap-2 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset to Emblem</span>
              </button>
            )}
          </div>

          {/* Deployment Tip */}
          <div className="mt-6 pt-5 border-t border-neutral-800 text-left w-full text-[11px] text-neutral-400 space-y-1">
            <p className="font-semibold text-neutral-300">Deployment Tip:</p>
            <p>For permanent hosting on GitHub Pages or Vercel, simply drop your headshot as <code className="text-neutral-200 bg-neutral-800 px-1 py-0.5 rounded">public/profile.jpg</code>.</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
