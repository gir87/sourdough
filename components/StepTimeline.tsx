import React from 'react';
import { Step } from '../types';
import { Clock, RotateCw, Spline, Snowflake, Flame, Utensils } from 'lucide-react';

interface StepTimelineProps {
  steps: Step[];
}

export const StepTimeline: React.FC<StepTimelineProps> = ({ steps }) => {
  const getIcon = (type: Step['iconType']) => {
    switch (type) {
      case 'mix': return <RotateCw size={20} />;
      case 'fold': return <Spline size={20} />;
      case 'cold': return <Snowflake size={20} />;
      case 'bake': return <Flame size={20} />;
      case 'prep': return <Utensils size={20} />;
      default: return <Clock size={20} />;
    }
  };

  return (
    <div className="relative pl-4 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-bakery-300 md:-ml-[1px] border-l border-dashed border-bakery-400 opacity-50"></div>

      <div className="space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot & Icon */}
              <div className="absolute left-8 -ml-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-bakery-100 bg-bakery-800 text-bakery-100 shadow-md md:left-1/2 md:-ml-5 z-10 ring-4 ring-bakery-100">
                {getIcon(step.iconType)}
              </div>

              {/* Time Label (Desktop) */}
              <div className="hidden md:block w-5/12 text-center md:text-right px-8">
                 <span className={`inline-block py-1.5 px-4 rounded-full bg-bakery-200 text-bakery-800 text-xs font-bold uppercase tracking-widest border border-bakery-300 ${!isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  {step.timeOffset}
                </span>
              </div>

              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:w-5/12">
                <div className={`relative p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-bakery-200 shadow-sm hover:shadow-md transition-all duration-300 ${!isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-bakery-100 rotate-45 transform translate-x-6 -translate-y-6"></div>
                  </div>

                  {/* Mobile Time Label */}
                  <div className="md:hidden mb-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-bakery-200 text-bakery-800 text-[10px] font-bold uppercase tracking-widest">
                      {step.timeOffset}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-bakery-900 mb-3">{step.title}</h3>
                  <p className="text-bakery-700 text-base leading-relaxed font-sans">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};