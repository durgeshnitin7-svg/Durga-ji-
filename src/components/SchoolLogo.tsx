import React, { useState } from 'react';

interface SchoolLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({ 
  size = 'md', 
  showText = false, 
  className = '' 
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13 sm:w-15 sm:h-15',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} shrink-0 rounded-full overflow-hidden bg-white shadow-sm border border-slate-200 flex items-center justify-center`}>
        {!imageError ? (
          <img
            src="/images/school_logo.jpg"
            alt="Shri Durga Ji Public School Logo"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          /* SVG Crest Fallback styled identically to the original emblem */
          <div className="w-full h-full bg-red-600 rounded-full flex flex-col items-center justify-center p-1 text-white select-none relative">
            <div className="w-full h-full rounded-full border border-yellow-300 flex flex-col items-center justify-center bg-red-700 relative overflow-hidden">
              <span className="text-[6px] font-extrabold uppercase text-white tracking-tighter text-center leading-none px-0.5">
                SHRI DURGA JI
              </span>
              <div className="w-3/5 h-3/5 my-0.5 rounded-full bg-yellow-400 border border-red-600 flex items-center justify-center">
                <span className="text-red-700 font-black text-[10px] tracking-tight leading-none">
                  SDJPS
                </span>
              </div>
              <span className="text-[5px] font-bold uppercase text-yellow-300 leading-none">
                SEHDA
              </span>
            </div>
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-blue-950 text-base sm:text-lg leading-tight tracking-tight uppercase">
            Shri Durga Ji Public School
          </span>
          <span className="text-xs font-semibold text-amber-600 tracking-wide uppercase">
            Discipline & Justice • Code: 70171
          </span>
          <span className="text-[11px] text-slate-500">
            Sehada, Azamgarh (U.P.)
          </span>
        </div>
      )}
    </div>
  );
};
