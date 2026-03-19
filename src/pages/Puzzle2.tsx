import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout, PuzzleLeft, PuzzleRight } from '../components/layout/Layout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ComboLock } from '../components/ui/ComboLock';
import { HintBox, HintButton } from '../components/ui/HintBox';
import { SuccessBox } from '../components/ui/SuccessBox';
import { RevealBox } from '../components/ui/RevealBox';
import { LocationHint } from '../components/ui/LocationHint';
import { ANSWERS } from '../lib/constants';

export function Puzzle2() {
  const [ans, setAns] = useState('AAAAAA'); // KNOTEN is 6 chars
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (ans === ANSWERS.puzzle2) {
      setSolved(true);
      setErrorShake(false);
    } else {
      setAttempts(a => a + 1);
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 400);
    }
  };

  return (
    <Layout>
      <motion.div className="contents" initial="hidden" animate="visible" variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, duration: 0.7, ease: "easeOut" } }
      }}>
        <PuzzleLeft>
          <motion.p variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="font-label text-[0.62rem] text-cave-wall tracking-[0.2em] mb-6 uppercase">
            &gt; ZEITKNOTEN 2 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="1986" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.4rem,3.5vw,2.4rem)] tracking-[0.1em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 1986]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Die verschlüsselte Maschine
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Die Höhle. Die massive Sic-Mundus-Tür steht still. Auf einem Messing-Gerät blinkt eine Buchstabenkombination.</p>
            <p className="mb-2.5 text-[1rem]">Ein Zettel daneben sagt nur: ROT13. Eine einfache Verschiebung. 13 Schritte im Alphabet.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Drehe die Rädchen.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              A wird zu N, B wird zu O … X wird zu K.
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={2} />
            
            <RevealBox
              isVisible={solved}
              title="ERSTER ZEITKNOTEN GERETTET"
              subtitle="Das Rauschen legt sich. Für einen kurzen Moment ist die Zeitlinie stabil."
              emoji="🍽️"
              text="DER ERSTE ZEITKNOTEN FÜHRT ZU EINEM ABENDMAHL."
            >
              <p className="mt-2 text-text-muted font-serif italic">Wir gehen essen.</p>
              <LocationHint isVisible={true} inRevealBox label="[ NÄCHSTE KOORDINATEN ]">
                Das Kontinuum weist dich weiter. Begib dich dorthin, wo Wärme aus dem Nichts entsteht – wo die Zeit langsam köchelt.
                <strong className="block mt-3.5 font-label font-normal text-[0.75rem] tracking-[0.2em] uppercase text-old-oak">
                  Die Küche kennt das nächste Geheimnis.
                </strong>
              </LocationHint>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 relative">
                <Button onClick={() => navigate('/3')}>[ WEITER ]</Button>
              </motion.div>
            </RevealBox>
          </motion.div>
        </PuzzleLeft>
        
        <PuzzleRight>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="w-full">
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-left mb-3 uppercase">ROT13</p>
            <div className="font-mono text-[clamp(0.95rem,3.5vw,1.3rem)] text-old-oak tracking-[0.25em] p-[24px_20px] bg-abyss/50 border border-cave-wall text-center my-6 break-all leading-[2.2]">
              X &nbsp; A &nbsp; B &nbsp; G &nbsp; R &nbsp; A
            </div>
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-left mb-3 mt-7 uppercase">
              Stelle die Buchstaben ein
            </p>
            
            <ComboLock 
              value={ans}
              onChange={setAns}
              solved={solved}
              errorShake={errorShake}
            />
            
            {!solved && (
              <div className="flex gap-3 items-center mt-1">
                <Button onClick={handleCheck}>BESTÄTIGEN</Button>
              </div>
            )}
          </motion.div>
          
          <motion.svg variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} 
            className="absolute pointer-events-none opacity-[0.05] text-old-oak w-[200px] bottom-[60px] right-[20px]" 
            viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x="5" y="10" width="110" height="60" rx="4"/>
            <rect x="20" y="20" width="80" height="35" rx="2"/>
            <circle cx="38" cy="55" r="10"/><circle cx="82" cy="55" r="10"/>
            <circle cx="38" cy="55" r="5"/><circle cx="82" cy="55" r="5"/>
            <line x1="43" y1="55" x2="77" y2="55"/>
            <rect x="48" y="22" width="24" height="15" rx="1"/>
          </motion.svg>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
