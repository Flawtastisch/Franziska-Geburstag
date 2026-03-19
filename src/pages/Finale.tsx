import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Layout } from '../components/layout/Layout';

export function Finale() {
  useEffect(() => {
    // Elegant, earthy confetti
    const colors = ["#df6c4f", "#987654", "#3a2a18"];
    
    const duration = 8000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        disableForReducedMotion: true
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        disableForReducedMotion: true
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <Layout mode="centered">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative max-w-[600px] w-full"
        >
          <div className="bg-abyss/90 border border-cave-wall p-[40px_24px] sm:p-[60px_48px] backdrop-blur relative overflow-hidden">
            {/* Minimalist corner accents */}
            <span className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-old-oak/50" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-old-oak/50" />
            <span className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-old-oak/50" />
            <span className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-old-oak/50" />
            
            <p className="font-label text-[0.65rem] tracking-[0.4em] text-old-oak uppercase mb-8">
              INITIALISIERUNG ERFOLGREICH
            </p>
            
            <h1 className="font-serif font-bold text-[clamp(2.4rem,6vw,4rem)] text-old-oak tracking-[0.05em] leading-[1.1] mb-6 drop-shadow-[0_0_10px_rgba(152,118,84,0.3)]">
              Alles Gute zum
              <br />
              Geburtstag,
              <br />
              <span className="italic">Möhrchen.</span>
            </h1>
            
            <hr className="w-16 h-[1px] bg-ember border-none mx-auto my-8 opacity-70" />
            
            <p className="font-body text-[1.1rem] leading-[2] text-text-light mb-8 max-w-[400px] mx-auto">
              Du hast das Rätsel entschlüsselt, die Knoten gelöst und den Ursprung gefunden. 
              <br/><br/>
              Auf ein neues, grenzenloses Kapitel in deiner Zeitlinie.
            </p>
            
            <p className="font-serif italic text-text-muted text-[0.95rem]">
              Sic mundus creatus est.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
