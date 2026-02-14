import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { useLoveLetterConfig } from './state/useLoveLetterConfig';
import { usePhotoGallery } from './state/usePhotoGallery';
import { useReducedMotion } from './hooks/useReducedMotion';
import { parseQueryParams } from './utils/shareQueryParams';
import IntroSection from './components/valentine/IntroSection';
import RevealSection from './components/valentine/RevealSection';
import LetterSection from './components/valentine/LetterSection';
import GallerySection from './components/valentine/GallerySection';
import DetailsSection from './components/valentine/DetailsSection';
import CustomizationPanel from './components/valentine/CustomizationPanel';
import FlowNav from './components/valentine/FlowNav';
import ThemeOrnaments from './components/valentine/ThemeOrnaments';
import FloatingAccents from './components/valentine/FloatingAccents';
import ReduceMotionToggle from './components/valentine/ReduceMotionToggle';
import LightboxDialog from './components/valentine/LightboxDialog';

export default function App() {
  const { setFromName, setToName, currentSection, fromName, toName } = useLoveLetterConfig();
  const { photos, activePhotoIndex, setActivePhotoIndex } = usePhotoGallery();
  const { isReducedMotion } = useReducedMotion();

  // Parse URL query params on mount, but only if not already set from persisted storage
  useEffect(() => {
    const params = parseQueryParams();
    if (params.from && !fromName) setFromName(params.from);
    if (params.to && !toName) setToName(params.to);
  }, [setFromName, setToName, fromName, toName]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className={`min-h-screen relative overflow-x-hidden ${isReducedMotion ? 'reduce-motion' : ''}`}>
        <ThemeOrnaments />
        <FloatingAccents />
        
        <div className="relative z-10">
          {/* Fixed controls */}
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            <ReduceMotionToggle />
          </div>

          {/* Main content flow */}
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            {currentSection === 'intro' && <IntroSection />}
            {currentSection === 'reveal' && <RevealSection />}
            {currentSection === 'letter' && <LetterSection />}
            {currentSection === 'gallery' && <GallerySection />}
            {currentSection === 'details' && <DetailsSection />}
            {currentSection === 'customize' && <CustomizationPanel />}

            {/* Navigation */}
            {currentSection !== 'intro' && <FlowNav />}
          </main>

          {/* Footer */}
          <footer className="relative z-10 py-8 mt-16 border-t border-border/30">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} · Built with ❤️ using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </footer>
        </div>

        {/* Lightbox */}
        {photos.length > 0 && activePhotoIndex !== null && (
          <LightboxDialog
            photos={photos}
            activeIndex={activePhotoIndex}
            onClose={() => setActivePhotoIndex(null)}
            onNavigate={setActivePhotoIndex}
          />
        )}

        <Toaster />
      </div>
    </ThemeProvider>
  );
}
