import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLoveLetterConfig } from '../../state/useLoveLetterConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Sparkles } from 'lucide-react';

export default function RevealSection() {
  const { headline, setCurrentSection } = useLoveLetterConfig();
  const { isReducedMotion } = useReducedMotion();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isReducedMotion) {
      const timer = setTimeout(() => setIsRevealed(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsRevealed(true);
    }
  }, [isReducedMotion]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-12">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Sparkles className="w-12 h-12 mx-auto text-amber-500" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
            {headline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            A special message crafted with love, faith, and devotion
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button
            size="lg"
            onClick={() => setCurrentSection('letter')}
            className="rounded-full"
          >
            Read the Letter
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setCurrentSection('gallery')}
            className="rounded-full"
          >
            View Memories
          </Button>
        </div>
      </div>
    </section>
  );
}
