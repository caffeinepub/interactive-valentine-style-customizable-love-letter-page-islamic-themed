import { Button } from '@/components/ui/button';
import { useLoveLetterConfig } from '../../state/useLoveLetterConfig';
import { Heart } from 'lucide-react';

export default function IntroSection() {
  const { fromName, toName, setCurrentSection } = useLoveLetterConfig();

  const displayFrom = fromName || 'Someone Special';
  const displayTo = toName || 'You';

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-8 animate-fade-in">
        <div className="space-y-4">
          <Heart className="w-16 h-16 mx-auto text-rose-500 animate-pulse-gentle" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
            From {displayFrom}
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground font-light">
            To {displayTo}
          </p>
        </div>

        <div className="pt-8">
          <Button
            size="lg"
            onClick={() => setCurrentSection('reveal')}
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Open Your Heart
          </Button>
        </div>

        <div className="pt-4">
          <Button
            variant="ghost"
            onClick={() => setCurrentSection('customize')}
            className="text-sm"
          >
            Customize this page
          </Button>
        </div>
      </div>
    </section>
  );
}
