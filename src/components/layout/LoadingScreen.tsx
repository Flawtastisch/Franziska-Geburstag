import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showMohrchen, setShowMohrchen] = useState(false);
  const [showHeart, setShowHeart] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1.66; // reaches 100 in ~2.4s
      });
    }, 40);

    // Heart disappear and Mohrchen appear timing
    const hideHeartTimer = setTimeout(() => {
      setShowHeart(false);
      setShowMohrchen(true);
    }, 2500);

    // Overall complete timer
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearInterval(interval);
      clearTimeout(hideHeartTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-[2.5rem] z-[999998]"
    >
      <div className="relative flex items-center justify-center h-[90px]">
        <AnimatePresence>
          {showHeart && (
            <motion.svg
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              animate={{ filter: ["drop-shadow(0 0 4px rgba(200,160,96,0.5))", "drop-shadow(0 0 14px rgba(200,160,96,0.9)) drop-shadow(0 0 28px rgba(200,160,96,0.4))", "drop-shadow(0 0 4px rgba(200,160,96,0.5))"] }}
              transition={{ repeat: 3, duration: 0.5, ease: "easeInOut", delay: 1.9 }}
              viewBox="0 0 200 175"
              width="110"
              height="96"
              className="block overflow-visible"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
                d="M100 46 C100 46,118 28,136 26 C158 23,178 38,178 66 C178 110,105 150,100 155 C95 150,22 110,22 66 C22 38,42 23,64 26 C82 28,100 46,100 46 Z"
                fill="none"
                stroke="#c8a060"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showMohrchen && (
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="absolute font-serif font-bold text-[2.6rem] tracking-[0.15em] text-amber whitespace-nowrap"
              style={{ textShadow: "0 0 20px rgba(200,160,96,0.6)" }}
            >
              Möhrchen
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="w-[160px] h-[1px] bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-blue-mid to-blue-glow transition-all duration-75 linearity"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <p className="font-label font-normal text-[0.65rem] tracking-[0.5em] text-text-muted uppercase">
        Zeitlinie wird initialisiert
      </p>
    </motion.div>
  );
}
