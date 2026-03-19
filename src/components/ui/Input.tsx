import { InputHTMLAttributes } from 'react';
import { cn } from './Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  era?: string;
  isError?: boolean;
  isCorrect?: boolean;
}

export function Input({ className, era, isError, isCorrect, ...props }: InputProps) {
  return (
    <div className={cn("relative w-full", isError && "animate-shake")}>
      <input
        className={cn(
          "w-full bg-[#b59a7a] border border-cave-wall text-[1.2rem] font-body transition-all duration-300 p-[12px_16px] outline-none",
          "placeholder-black/40 tracking-[0.1em] text-black font-bold flex-1 focus:ring-2 focus:ring-ember/60",
          
          // Unified Default state
          "border-cave-wall hover:border-text-light/30 focus:border-ember",
          
          // Error State
          isError && "border-ember text-ember shadow-[0_0_15px_rgba(223,108,79,0.3)] bg-ember/10 focus:border-ember",
          
          // Correct State
          isCorrect && "border-old-oak text-old-oak shadow-[0_0_15px_rgba(152,118,84,0.3)] bg-old-oak/10 focus:border-old-oak",
          
          className
        )}
        autoComplete="off"
        spellCheck="false"
        {...props}
      />
      {isError && (
        <span className="absolute top-1/2 right-4 -translate-y-1/2 text-ember font-bold text-sm tracking-normal drop-shadow-[0_0_3px_rgba(223,108,79,0.8)]">
          ✗ FEHLER
        </span>
      )}
      {isCorrect && (
        <span className="absolute top-1/2 right-4 -translate-y-1/2 text-old-oak font-bold text-sm tracking-normal drop-shadow-[0_0_3px_rgba(152,118,84,0.8)]">
          ✓ KORREKT
        </span>
      )}
    </div>
  );
}
