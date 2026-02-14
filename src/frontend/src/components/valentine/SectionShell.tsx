import { ReactNode } from 'react';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ children, className = '' }: SectionShellProps) {
  return (
    <div className={`transition-all duration-500 ease-in-out ${className}`}>
      {children}
    </div>
  );
}
