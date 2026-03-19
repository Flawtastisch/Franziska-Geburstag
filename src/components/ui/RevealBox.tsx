import { motion } from 'framer-motion';

export function RevealBox({ 
  isVisible, title, subtitle, emoji, text, children
}: { 
  isVisible: boolean; 
  title: string; 
  subtitle: string;
  emoji: string;
  text: string;
  children?: React.ReactNode; 
}) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="border border-cave-wall p-[32px_28px] mt-7 bg-abyss/90 text-center relative
        before:content-[''] before:absolute before:top-1.5 before:left-1.5 before:w-3 before:h-3 before:border-t before:border-l before:border-old-oak/50
        after:content-[''] after:absolute after:bottom-1.5 after:right-1.5 after:w-3 after:h-3 after:border-b after:border-r after:border-old-oak/50"
    >
      <p className="font-label font-normal text-[0.65rem] text-old-oak tracking-[0.35em] uppercase mb-5">
        {title}
      </p>
      <div className="text-text-light leading-[2] font-normal">
        <p>{subtitle}</p>
        <span className="text-[2.4rem] block my-4 blur-[0.5px] grayscale opacity-80">{emoji}</span>
        <p><strong className="text-old-oak font-serif text-lg font-medium">{text}</strong></p>
      </div>
      {children}
    </motion.div>
  );
}
