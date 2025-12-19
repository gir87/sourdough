import React from 'react';
import { recipe } from './data/recipe';
import { RecipeHero } from './components/RecipeHero';
import { IngredientCard } from './components/IngredientCard';
import { StepTimeline } from './components/StepTimeline';
import { HydrationBadge } from './components/HydrationBadge';
import { calculateHydration, getTotalWeight } from './utils/calculations';
import { Info, ChefHat } from 'lucide-react';

function App() {
  const hydration = calculateHydration(recipe.ingredients);
  const totalWeight = getTotalWeight(recipe.ingredients);

  return (
    <div className="min-h-screen bg-bakery-100 text-bakery-900 font-sans">
      {/* Header / Hero */}
      <RecipeHero 
        title={recipe.title} 
        description={recipe.description} 
        image={recipe.heroImage}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-10">
        
        {/* Intro Stats Bar - Menu Style */}
        <div className="bg-[#FDFBF7] rounded-xl shadow-xl border border-bakery-200 p-8 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-display font-bold text-bakery-900">Baker's Formula</h2>
              <p className="text-bakery-500 font-medium mt-2 tracking-wide text-sm uppercase">Key Metrics & Yields</p>
           </div>
           
           <div className="flex flex-wrap justify-center lg:justify-end gap-12 lg:gap-20 border-t lg:border-t-0 lg:border-l border-bakery-200 pt-8 lg:pt-0 lg:pl-10 lg:pr-10">
             <div className="text-center">
                <div className="text-4xl font-display font-bold text-bakery-800">{totalWeight}g</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-bakery-400 font-bold mt-1">Total Dough</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-display font-bold text-accent">{recipe.ingredients.length}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-bakery-400 font-bold mt-1">Ingredients</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-display font-bold text-bakery-800">{recipe.steps.length}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-bakery-400 font-bold mt-1">Steps</div>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Ingredients & Steps */}
          <div className="lg:col-span-8 space-y-24">
            
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-bakery-300 flex-1"></div>
                <h2 className="text-4xl font-display font-bold text-bakery-900 text-center uppercase tracking-widest">Ingredients</h2>
                <div className="h-px bg-bakery-300 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {recipe.ingredients.map((ing, idx) => (
                  <IngredientCard key={idx} ingredient={ing} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-16">
                 <div className="h-px bg-bakery-300 flex-1"></div>
                 <h2 className="text-4xl font-display font-bold text-bakery-900 text-center uppercase tracking-widest">The Process</h2>
                 <div className="h-px bg-bakery-300 flex-1"></div>
              </div>
              
              <StepTimeline steps={recipe.steps} />
            </section>

            <section>
              <div className="flex items-center gap-4 mb-16">
                 <div className="h-px bg-bakery-300 flex-1"></div>
                 <h2 className="text-4xl font-display font-bold text-bakery-900 text-center uppercase tracking-widest">Video</h2>
                 <div className="h-px bg-bakery-300 flex-1"></div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-bakery-200 bg-bakery-900 relative">
                <a href="https://www.youtube.com/watch?v=r0HQbQQDDe8" target="_blank"><img src="images/youtube.jpg" alt="Sourdough Inspiration Video" className="w-full h-auto block" /></a>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Sidebar with Hydration */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-10">
              
              {/* Hydration Card */}
              <div className="bg-[#FDFBF7] rounded-3xl p-10 border border-bakery-200 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-2 bg-accent"></div>
                <h3 className="text-2xl font-display font-bold text-bakery-900 mb-8">Dough Hydration</h3>
                <HydrationBadge percentage={hydration} />
                <div className="mt-8 pt-8 border-t border-bakery-200 w-full">
                    <p className="text-sm text-bakery-600 leading-relaxed font-medium">
                    This hydration level yields an open crumb while remaining manageable for handling.
                    </p>
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-bakery-800 rounded-3xl p-10 border border-bakery-900 shadow-xl text-bakery-100 relative">
                <div className="absolute top-6 right-6 opacity-20 text-accent">
                    <Info size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-accent mb-4 tracking-wide">Note</h3>
                <p className="text-bakery-200 text-sm leading-7 font-light">
                  "Temperature is an ingredient. If your kitchen is colder than 75°F, your bulk fermentation might take longer than 6 hours. Watch the dough, not the clock."
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-80">
                    <span className="w-8 h-px bg-accent"></span>
                    <span>Pro Tip</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <footer className="mt-40 bg-bakery-900 text-bakery-400 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <ChefHat size={32} className="mx-auto text-accent mb-6" />
            <h2 className="text-2xl font-display font-bold text-bakery-200 mb-2">Country Sourdough Recipe</h2>
            <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-8">Since 2025</p>
            <div className="w-24 h-px bg-bakery-800 mx-auto mb-8"></div>
            <p className="text-xs font-medium tracking-widest uppercase opacity-40">
            &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;