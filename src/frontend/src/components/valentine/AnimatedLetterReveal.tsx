import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedLetterRevealProps {
  text: string;
}

export default function AnimatedLetterReveal({ text }: AnimatedLetterRevealProps) {
  const { isReducedMotion } = useReducedMotion();
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (isReducedMotion) {
      setDisplayedText(text);
      return;
    }

    setDisplayedText('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [text, isReducedMotion]);

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <p className="whitespace-pre-wrap font-serif leading-relaxed text-foreground">
        {displayedText}
      </p>
    </div>
  );
}
