'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { FC, ReactNode } from 'react';

interface FormulaTooltipProps {
  children: ReactNode;
  explanation: ReactNode;
}

export const FormulaTooltip: FC<FormulaTooltipProps> = ({ children, explanation }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-pointer rounded-md bg-accent/20 px-1 py-0.5 text-accent-foreground transition-colors hover:bg-accent hover:text-accent-foreground font-code">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-center">
          {explanation}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
