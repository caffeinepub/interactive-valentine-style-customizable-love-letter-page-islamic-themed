import { Button } from '@/components/ui/button';
import { useLoveLetterConfig, Section } from '../../state/useLoveLetterConfig';
import { Home, BookOpen, Images, FileText, Settings } from 'lucide-react';

export default function FlowNav() {
  const { currentSection, setCurrentSection } = useLoveLetterConfig();

  const navItems: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: 'intro', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { section: 'letter', label: 'Letter', icon: <BookOpen className="w-4 h-4" /> },
    { section: 'gallery', label: 'Gallery', icon: <Images className="w-4 h-4" /> },
    { section: 'details', label: 'Details', icon: <FileText className="w-4 h-4" /> },
    { section: 'customize', label: 'Customize', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full shadow-lg px-2 py-2">
        <div className="flex gap-1">
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant={currentSection === item.section ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentSection(item.section)}
              className="gap-2 rounded-full"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
