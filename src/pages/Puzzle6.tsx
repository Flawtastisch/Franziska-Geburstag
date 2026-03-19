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

export function Puzzle6() {
  const [ans, setAns] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (ans.trim().toUpperCase() === ANSWERS.puzzle6) {
      setSolved(true);
      setErrorVisible(false);
      localStorage.setItem('unlocked_7', 'true');
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
            &gt; ZEITKNOTEN 6 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="2052" className="mb-2.5 block w-max" />
            <h1 className="font-mono font-bold text-[clamp(1rem,3.5vw,1.5rem)] tracking-[0.15em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 2052]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Die binäre Nachricht
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-mono text-[0.88rem] leading-[2]">
            <p className="mb-2.5">Die Zukunft. Winden existiert noch – aber alles hat sich verändert.</p>
            <p className="mb-2.5">Auf einem Terminal blinkt eine Nachricht in der Sprache der Maschinen.</p>
            <p className="mb-2.5">Möhrchen. Übersetze das Signal.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              Jede Gruppe aus 8 Bits ergibt einen Buchstaben.<br/>01000001=A, 01000010=B …
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={6} quote="„Zwei Welten. Eine Wahrheit.“" />
            
            <LocationHint isVisible={solved} label="[ KOORDINATEN ENTSCHLÜSSELT ]">
              Manchmal führt der Pfad der Wahrheit durch Orte, die man nicht erwartet. Suche den stillen Ort der Einsamkeit.
              <strong className="block mt-3.5 font-label font-normal text-[0.75rem] tracking-[0.2em] uppercase text-old-oak">
                Dort wartet der nächste Code.
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
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-left mb-3 uppercase">
              Binärcode → ASCII
            </p>
            
            <div className="font-mono text-[clamp(0.65rem,1.8vw,0.9rem)] text-text-light tracking-[0.08em] p-[24px_20px] bg-abyss border border-cave-wall text-center my-6 leading-[2.2]">
              01010111 &nbsp;01000101<br/>01001100 &nbsp;01010100
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
            className="absolute pointer-events-none opacity-[0.1] text-old-oak w-[200px] bottom-[40px] right-[10px]" 
            viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x="40" y="35" width="40" height="30" rx="2"/>
            <line x1="20" y1="50" x2="40" y2="50"/><line x1="80" y1="50" x2="100" y2="50"/>
            <line x1="60" y1="15" x2="60" y2="35"/><line x1="60" y1="65" x2="60" y2="85"/>
            <line x1="20" y1="50" x2="20" y2="30"/><circle cx="20" cy="28" r="3"/>
            <line x1="100" y1="50" x2="100" y2="70"/><circle cx="100" cy="72" r="3"/>
            <rect x="50" y="44" width="20" height="12" rx="1" opacity="0.5"/>
          </motion.svg>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
