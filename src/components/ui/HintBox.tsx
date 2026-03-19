import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export function HintButton({ isVisible, onClick }: { isVisible: boolean; onClick: () => void }) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-6 mb-3"
    >
      <Button onClick={onClick} className="p-[10px_16px] text-[0.6rem] hover:bg-old-oak/5">
        ? HINWEIS ANFORDERN
      </Button>
    </motion.div>
  );
}

export function HintBox({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="overflow-hidden mt-4"
    >
      <div className="bg-abyss/80 border border-cave-wall p-4 text-text-light text-[0.85rem] leading-[1.6]">
        <strong className="text-old-oak font-label text-[0.55rem] tracking-[0.2em] font-normal uppercase block mb-1">
          HINWEIS:
        </strong>
        {children}
      </div>
    </motion.div>
  );
}
