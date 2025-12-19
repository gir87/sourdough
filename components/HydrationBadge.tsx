import React from 'react';
import { Droplet } from 'lucide-react';

interface HydrationBadgeProps {
  percentage: number;
}

export const HydrationBadge: React.FC<HydrationBadgeProps> = ({ percentage }) => {
  // Use a consistent bronze/gold styling for the bakery feel, varying slightly intensity
  // Instead of traffic lights, we use bakery-relevant tones
  
  let label = 'Low Hydration';
  if (percentage >= 65 && percentage < 75) label = 'Standard';
  else if (percentage >= 75 && percentage < 85) label = 'High Hydration';
  else if (percentage >= 85) label = 'Expert Level';

  return (
    <div className="flex flex-col items-center">
      <div className="relative group cursor-default">
         {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent opacity-30 animate-spin-slow" style={{animationDuration: '20s'}}></div>
        
        <div className="relative flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 border-double border-bakery-200 shadow-lg bg-bakery-50 text-bakery-900 group-hover:scale-105 transition-transform duration-300">
            <Droplet className="mb-1 text-accent" size={20} fill="currentColor" fillOpacity={0.6} />
            <span className="text-5xl font-display font-bold tracking-tighter text-bakery-900">{percentage}<span className="text-2xl align-top">%</span></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-bakery-500 mt-1">Hydration</span>
        </div>
      </div>
      
      <div className="mt-5 px-5 py-2 rounded-full text-xs font-bold bg-bakery-800 text-bakery-100 uppercase tracking-widest shadow-md">
        {label}
      </div>
    </div>
  );
};