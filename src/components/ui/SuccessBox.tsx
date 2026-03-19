import { motion } from 'framer-motion';

export function SuccessBox({ isVisible, puzzleNum, quote }: { isVisible: boolean; puzzleNum: number; quote?: string }) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mt-6 border-l-2 border-old-oak pl-4 py-2"
    >
      <h3 className="font-label font-normal text-[0.65rem] tracking-[0.25em] text-text-light uppercase mb-2">
        <span className="text-old-oak font-bold">✓ VERIFIZIERT</span> &nbsp;—&nbsp; KNOTEN {puzzleNum}
      </h3>
      {quote && (
        <p className="font-serif italic text-[1.05rem] text-text-muted mt-1 leading-[1.6]">
          {quote}
        </p>
      )}
    </motion.div>
  );
}
