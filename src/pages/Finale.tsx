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
            
            <div className="font-body text-[1rem] sm:text-[1.1rem] leading-[1.8] text-text-light mb-8 max-w-[600px] mx-auto text-left space-y-5">
              <p>Hallo Möhrchen,</p>
              <p>
                wenn du das liest, hast du alle Rätsel gelöst und meine Website hat funktioniert (:
                <br />
                Ich hoffe, es hat dir Spaß gemacht und du freust dich schon. Bevor wir losfahren, möchte ich dir noch was sagen.
              </p>
              <p>
                Du bist mein Wunsch von allen Geburtstagskerzen, die ich je ausgepustet habe. Jede Wimper, die ich fallen lassen habe, bei der ich mir was gewünscht habe. Jeder Regenbogen, den ich nach dem Regen am Himmel sah. Jede Sternschnuppe im All und das einzige 4-blättrige Kleeblatt, was ich jemals gefunden habe.
              </p>
              <p>
                Ich bin soooo unendlich dankbar, dass ich dich gefunden habe. Wir sind jetzt fast 1 Jahr zusammen und die Zeit verging wie im Flug.
              </p>
              <p>
                Ich freue mich auf jeden Moment mit dir und träume schon von der Zukunft, in der wir nebeneinander einschlafen können. Es dauert auch nicht mehr lang, weil schon bald ziehst du um. Nicht einfach um... nicht einfach in ein anderes Haus oder Wohnung. Du ziehst zu mir! Ich weiß, dass jeder Schritt schwer ist und auch schwer bleibt bis im neuen Haus endlich alles fertig ist - und ja es läuft nicht immer alles so nach Plan. Zugegebenermaßen sind wir ziemlich von unserem Zeitplan abgekommen, weil das Renovieren so lang gedauert hat - Aber wir schaffen das!
              </p>
              <p>
                Zu guter Letzt habe ich noch ein Geschenk für dich. Ich hoffe, es gefällt dir und hilft dir auf deinen ersten Schritten deiner neuen Ausbildung.
              </p>
              <p className="font-serif text-[1.2rem] italic text-center mt-12 text-old-oak">
                Ich bin stolz auf dich und liebe dich über alles.
                <br /><br />
                Tom &lt;3
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
