import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout, PuzzleLeft, PuzzleRight } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { HintBox, HintButton } from '../components/ui/HintBox';
import { SuccessBox } from '../components/ui/SuccessBox';
import { ANSWERS } from '../lib/constants';

export function Puzzle1() {
  const [ans, setAns] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (ans.trim().toUpperCase() === ANSWERS.puzzle1) {
      setSolved(true);
      setErrorVisible(false);
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
            &gt; ZEITKNOTEN 1 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="1953" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[0.04em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 1953]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Der alte Raum
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Die Luft riecht nach Staub und alten Kabeln. Du stehst in einem dunklen Keller. An der Decke hängt eine leere Fassung.</p>
            <p className="mb-2.5 text-[1rem]">Jonas musste etwas eindrehen, damit die Apparatur funktionierte.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Was fehlte im Raum?</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              Es hat mit Elektrizität zu tun. Es flackert oft in der Serie. <br/>5 Buchstaben.
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={1} quote="„Das Ende ist der Anfang und der Anfang ist das Ende.“" />
            
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
            <p className="font-label font-normal text-[0.65rem] tracking-[0.3em] text-text-muted text-left mb-3 uppercase">PASSWORT ERFORDERLICH</p>
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
            className="absolute pointer-events-none opacity-[0.1] text-old-oak w-[140px] bottom-[40px] right-[20px]" 
            viewBox="0 0 100 140" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M40 20 Q50 0 60 20 L65 50 Q75 80 50 100 Q25 80 35 50 Z" />
            <path d="M45 100 L45 110 M55 100 L55 110" />
            <rect x="42" y="110" width="16" height="15" rx="1" />
            <path d="M48 60 Q50 40 52 60" opacity="0.6"/>
          </motion.svg>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
