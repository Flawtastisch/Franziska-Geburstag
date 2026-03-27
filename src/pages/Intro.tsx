import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

export function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('admin_mode') === 'true') {
      return;
    }
    // Wenn das erste Portal (Start) betreten wird, 
    // setzen wir den Spielstand zurück, damit ein frischer Durchgang gesichert ist.
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('unlocked_')) localStorage.removeItem(key);
    });
    // Rätsel 1 direkt freigeben, da es als erstes gefunden wird
    localStorage.setItem('unlocked_1', 'true');
  }, []);

  const handleAdminLogin = () => {
    const pw = prompt("Spielleiter-Passwort eingeben:");
    if (pw === "spielleiter") {
      localStorage.setItem('admin_mode', 'true');
      for (let i = 1; i <= 8; i++) {
        localStorage.setItem(`unlocked_${i}`, 'true');
      }
      localStorage.setItem('unlocked_finale', 'true');
      alert("Spielleiter-Modus aktiviert! Alle Rätsel und das Finale sind freigeschaltet.");
    } else if (pw === "reset") {
      localStorage.removeItem('admin_mode');
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('unlocked_')) localStorage.removeItem(key);
      });
      localStorage.setItem('unlocked_1', 'true');
      alert("Spielleiter-Modus deaktiviert. Spielstand wurde zurückgesetzt.");
    } else if (pw !== null) {
      alert("Falsches Passwort.");
    }
  };

  return (
    <Layout mode="centered">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 28 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { staggerChildren: 0.1, duration: 0.7, ease: "easeOut" } 
          }
        }}
        className="w-full text-center"
      >
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="font-label text-[0.62rem] text-cave-wall tracking-[0.2em] mb-6 uppercase"
        >
          &gt; SYSTEM BOOT // ZEITKNOTEN ONLINE
        </motion.p>
        
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="font-serif font-bold text-[clamp(1.8rem,4vw,3rem)] text-old-oak tracking-[0.04em] leading-[1.2] mb-1.5"
        >
          Alles ist verbunden.
        </motion.h1>
        
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6"
        >
          WINDEN · 1953 · 1986 · 2019 · 2052
        </motion.h2>
        
        <motion.hr 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="border-none my-[28px] h-[1px] bg-cave-wall" 
        />
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9] text-left"
        >
          <p className="mb-2.5 text-[1rem]">Alles ist miteinander verbunden. Die Vergangenheit, die Gegenwart und die Zukunft.</p>
          <p className="mb-2.5 text-[1rem]">Die Zeitlinie ist in Gefahr, Möhrchen. Etwas hat sich verschoben. Wenn du die richtigen Worte nicht findest, wird alles, was du kennst, aus der Existenz gelöscht.</p>
          <p className="mb-2.5 text-[1rem]">Dies ist keine Übung. Sieben Zeitknoten müssen stabilisiert werden.</p>
          <p className="mb-2.5 text-[1rem]">Nutze dein Wissen, deine Intuition und deine Augen. Aber beeil dich.</p>
          <p className="text-[1rem] italic mt-4 text-text-muted font-serif">Sic mundus creatus est.</p>
        </motion.div>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
          <Button onClick={() => navigate('/1')}>
            [ SYSTEM STARTEN ]
          </Button>
        </motion.div>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          className="mt-14"
        >
          {/* Subtle moodboard circles inline visual */}
          <div 
            className="relative w-[120px] h-[120px] mx-auto opacity-40 cursor-pointer hover:opacity-100 transition-opacity"
            onDoubleClick={handleAdminLogin}
            title="Versteckter Bereich"
          >
            <div className="absolute inset-2 border border-cave-wall rounded-full pointer-events-none" />
            <div className="absolute inset-6 border border-cave-wall rounded-full pointer-events-none" />
            <div className="absolute inset-10 border border-old-oak/50 rounded-full flex items-center justify-center font-serif text-old-oak text-xs pointer-events-none">∞</div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
