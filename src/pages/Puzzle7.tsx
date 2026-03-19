import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout, PuzzleLeft, PuzzleRight } from '../components/layout/Layout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { HintBox, HintButton } from '../components/ui/HintBox';
import { SuccessBox } from '../components/ui/SuccessBox';
import { LocationHint } from '../components/ui/LocationHint';
import { ANSWERS } from '../lib/constants';

export function Puzzle7() {
  const [ans, setAns] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (ans.trim().toUpperCase() === ANSWERS.puzzle7) {
      setSolved(true);
      setErrorVisible(false);
      localStorage.setItem('unlocked_8', 'true');
    } else {
      setAttempts(a => a + 1);
      setErrorVisible(true);
      setAns('');
      setTimeout(() => setErrorVisible(false), 400);
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
            &gt; ZEITKNOTEN 7 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="2019" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[0.04em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 2019]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Das Anagramm
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Zurück in 2019. Im Zimmer von Jonas liegt ein Zettel. Die Buchstaben sind durcheinandergewirbelt – als hätte jemand die Zeit selbst zerschnitten.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Bring die Buchstaben in die richtige Reihenfolge.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              6 Buchstaben. Ein wichtiger Begriff in Dark.<br/>„Es gibt keinen ______ und kein Ende.“
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={7} quote="„Es gibt keinen Anfang und kein Ende. Nur den Knoten.“" />
            
            <LocationHint isVisible={solved} label="[ LETZTE KOORDINATEN ]">
              Der finale Knoten wartet kühl und geduldig. Dort, wo Zeit keine Rolle spielt und alles konserviert wird.
              <strong className="block mt-3.5 font-label font-normal text-[0.75rem] tracking-[0.2em] uppercase text-old-oak">
                Kalt. Still. Wartend.
              </strong>
            </LocationHint>
            
            {solved && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 border border-cave-wall bg-abyss p-4 text-center">
                <p className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-text-light mb-2">System pausiert</p>
                <p className="text-old-oak text-sm">Finde und scanne den QR-Code am nächsten Ort, um fortzufahren.</p>
              </motion.div>
            )}
          </motion.div>
        </PuzzleLeft>
        
        <PuzzleRight>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="w-full">
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-center mb-6 uppercase">
              Anagramm — Bringe die Buchstaben in die richtige Reihenfolge
            </p>
            
            <div className="flex gap-2 flex-wrap my-6 justify-center">
              {['N', 'G', 'A', 'F', 'A', 'N'].map((l, i) => (
                <div key={i} className="w-[clamp(42px,11vw,52px)] h-[clamp(42px,11vw,52px)] flex items-center justify-center bg-abyss border border-cave-wall font-mono text-[clamp(0.95rem,3.5vw,1.3rem)] text-old-oak transition-colors hover:border-text-muted">
                  {l}
                </div>
              ))}
            </div>
            
            <div className="flex gap-3 items-stretch mt-0 w-full">
              <Input 
                value={ans}
                onChange={e => setAns(e.target.value)}
                isError={errorVisible}
                isCorrect={solved}
                disabled={solved}
                placeholder="ANTWORT"
                onKeyDown={e => e.key === 'Enter' && !solved && handleCheck()}
              />
              {!solved && (
                <Button className="mt-0 whitespace-nowrap" onClick={handleCheck}>SENDEN</Button>
              )}
            </div>
          </motion.div>
          
          <motion.svg variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} 
            className="absolute pointer-events-none opacity-[0.1] text-old-oak w-[120px] bottom-[40px] right-[40px]" 
            viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <line x1="10" y1="8" x2="50" y2="8"/><line x1="10" y1="92" x2="50" y2="92"/>
            <path d="M10 8 Q30 50 10 92"/><path d="M50 8 Q30 50 50 92"/>
            <path d="M18 50 Q30 42 42 50" opacity="0.5"/>
            <path d="M22 55 Q30 58 38 55 Q32 70 28 80" opacity="0.4"/>
          </motion.svg>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
