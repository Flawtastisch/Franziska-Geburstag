import { cn } from './Button';

export function Badge({ year, className }: { year: string; className?: string }) {
  const isInf = year === "inf" || year === "∞";
  
  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center font-label font-normal tracking-[0.25em] relative rounded-none",
        isInf ? "text-[1.2rem] leading-none text-old-oak px-2 py-0 border-none" : "text-[0.6rem] px-[8px] py-[3px] border border-cave-wall text-text-light bg-black/40",
        className
      )}
    >
      {isInf ? "∞" : year}
      
      {/* Small corner accents */}
      {!isInf && (
        <>
          <span className="absolute top-0 left-0 w-0.5 h-0.5 bg-text-light/50" />
          <span className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-text-light/50" />
        </>
      )}
    </span>
  );
}
