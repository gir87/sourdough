import React from 'react';
import { ChefHat } from 'lucide-react';

interface RecipeHeroProps {
  title: string;
  description: string;
  image: string;
}

export const RecipeHero: React.FC<RecipeHeroProps> = ({ title, description, image }) => {
  return (
    <div className="relative w-full h-[65vh] min-h-[550px] overflow-hidden bg-bakery-900">
      {/* Background Image with warm overlay */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light"
      />
      
      {/* Gradient Overlay - Deep brown fading up */}
      <div className="absolute inset-0 bg-gradient-to-t from-bakery-900 via-bakery-900/50 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-12 pb-32 md:px-20 md:pt-20 md:pb-48 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 text-accent mb-6 font-bold tracking-widest uppercase text-xs">
          <ChefHat size={18} />
          <span>GERARDVEENHOF.NL</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9] text-bakery-50 drop-shadow-sm">
          {title}
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end gap-10">
            <p className="text-lg md:text-2xl text-bakery-200 max-w-2xl font-display font-light leading-relaxed">
            {description}
            </p>
        </div>
      </div>
    </div>
  );
};