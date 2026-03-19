import { ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  era?: string; // Kept for prop compatibility but practically ignored in styling
  fullWidth?: boolean;
}

export function Button({ className, era, fullWidth, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "relative mt-[28px] p-[16px_32px] tracking-[0.2em] font-label text-[0.7rem] uppercase transition-all duration-300",
        "bg-transparent cursor-pointer font-normal",
        
        // Default (unified Dark theme): Faint border, Old Oak text
        "text-old-oak border border-cave-wall hover:border-old-oak hover:bg-old-oak/10 shadow-[inset_0_0_0_transparent]",
        
        // Active/Focus states
        "active:scale-95 active:bg-old-oak/20 focus:outline-none",
        
        // Disabled state
        "disabled:opacity-40 disabled:pointer-events-none",
        
        // Layout
        fullWidth && "w-full min-h-[50px] mt-0",
        
        className
      )}
      {...props}
    >
      {/* Corner accents for that minimalist/labyrinthisch vibe */}
      <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-old-oak/50" />
      <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-old-oak/50" />
      {children}
    </button>
  );
}
