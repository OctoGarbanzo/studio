import { BarChart3 } from 'lucide-react';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary font-headline">
            StatWise
          </h1>
        </div>
      </div>
    </header>
  );
};
