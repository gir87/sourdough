import React from 'react';
import { ShoppingBag, Droplets, Wheat, Sprout, Hash } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  // Determine icon based on category
  const getIcon = () => {
    switch (ingredient.category) {
      case 'liquid': return <Droplets size={12} className="text-accent" />;
      case 'flour': return <Wheat size={12} className="text-accent" />;
      case 'starter': return <Sprout size={12} className="text-accent" />;
      default: return <Hash size={12} className="text-accent" />;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-bakery-50 border border-bakery-200 shadow-[4px_4px_0px_rgba(44,24,16,0.05)] hover:shadow-[6px_6px_0px_rgba(217,124,46,0.2)] hover:border-accent hover:-translate-y-1 transition-all duration-300 flex flex-row md:flex-col h-full items-stretch">
      
      {/* Image Section: Compact Left on Mobile, Full Top on Desktop */}
      <div className="w-28 sm:w-32 md:w-full md:h-52 shrink-0 relative overflow-hidden bg-bakery-200">
        <img 
          src={ingredient.image} 
          alt={ingredient.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter sepia-[0.3]"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4">
             <span className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold bg-bakery-50/90 backdrop-blur-sm text-bakery-800 uppercase tracking-wider border border-bakery-200 shadow-sm">
                {getIcon()}
                <span>{ingredient.category}</span>
            </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-3 md:p-6 flex flex-col flex-grow justify-center md:justify-start">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-3">
          <h3 className="text-lg md:text-2xl font-display font-bold text-bakery-900 leading-tight">{ingredient.name}</h3>
          <span className="text-sm md:text-xl font-display font-bold text-accent whitespace-nowrap md:ml-2">{ingredient.weight}g</span>
        </div>
        
        {ingredient.description && (
          <p className="text-xs md:text-sm text-bakery-600 mb-2 md:mb-6 leading-relaxed flex-grow font-sans line-clamp-2 md:line-clamp-none">{ingredient.description}</p>
        )}
        
        <div className="pt-2 md:pt-4 mt-auto border-t border-bakery-200 border-dashed">
          {ingredient.link ? (
            <a 
              href={ingredient.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[10px] md:text-xs font-bold text-bakery-900 hover:text-accent uppercase tracking-widest transition-colors group-hover:underline decoration-accent underline-offset-4"
            >
              <ShoppingBag size={12} className="mr-2 mb-0.5" />
              <span className="hidden sm:inline">Shop (NL)</span>
              <span className="sm:hidden">Shop (NL)</span>
            </a>
          ) : (
            <span className="text-[10px] md:text-xs font-bold text-bakery-400 uppercase tracking-widest flex items-center">
              <ShoppingBag size={12} className="mr-2 mb-0.5" />
              <span className="hidden sm:inline"></span>
              <span className="sm:hidden"></span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};