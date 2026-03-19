import { motion } from 'framer-motion';
import { cn } from './Button';

export function LocationHint({ 
  isVisible, label, children, 
  inRevealBox
}: { 
  isVisible: boolean; 
  label: string; 
  children: React.ReactNode;
  inRevealBox?: boolean;
}) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={cn(
        "mt-7 border border-cave-wall p-[22px_22px_18px] relative",
        inRevealBox 
          ? "border-old-oak/40 mt-5 block" 
          : "bg-abyss/80",
      )}
    >
      <div 
        className={cn(
          "absolute -top-[9px] left-4 px-2.5 font-label text-[0.58rem] tracking-[0.25em] uppercase",
          inRevealBox ? "bg-abyss text-old-oak" : "bg-abyss text-old-oak"
        )}
      >
        {label}
      </div>
      <div className="text-text-muted text-[0.88rem] leading-[1.9] font-normal">
        {children}
      </div>
    </motion.div>
  );
}
