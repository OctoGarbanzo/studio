'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { FC, ReactNode } from 'react';

interface TraceableNumberProps {
  children: ReactNode;
  explanation: ReactNode;
}

export const TraceableNumber: FC<TraceableNumberProps> = ({ children, explanation }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-pointer rounded-md bg-primary/10 px-1 py-0.5 font-bold text-primary transition-colors hover:bg-primary/20 font-code">
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
