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

export function Puzzle4() {
  const [ans, setAns] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (ans.trim().toUpperCase() === ANSWERS.puzzle4) {
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
            &gt; ZEITKNOTEN 4 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="1953" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[0.04em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 1953]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Die Zahlenschlange
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Zurück im Jahr 1953. Eine Zahlenreihe auf einer Steinwand. Wer schrieb sie hier? Und warum?</p>
            <p className="mb-2.5 text-[1rem]">A ist 1. B ist 2. Weiter so.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Was verbirgt sich hinter den Zahlen?</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              A=1, B=2, C=3 …<br/>N=14, A=1, C=3, H=8, T=20
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={4} quote="„Die Nacht gehört den Geheimnissen.“" />
            
            <LocationHint isVisible={solved} label="[ KOORDINATEN ENTSCHLÜSSELT ]">
               Die Vergangenheit verbirgt sich in Schichten. Suche dort, wo du dich täglich neu einhüllst.
              <strong className="block mt-3.5 font-label font-normal text-[0.75rem] tracking-[0.2em] uppercase text-old-oak">
                Zwischen den Hüllen liegt die Wahrheit.
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
              Zahlencode (A=1, B=2 …)
            </p>
            
            <div className="font-mono text-[clamp(0.95rem,3.5vw,1.3rem)] text-old-oak tracking-[0.25em] p-[24px_20px] bg-abyss border border-cave-wall text-center my-6">
              14 &nbsp;·&nbsp; 1 &nbsp;·&nbsp; 3 &nbsp;·&nbsp; 8 &nbsp;·&nbsp; 20
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
            className="absolute pointer-events-none opacity-[0.1] text-old-oak w-[160px] bottom-[40px] right-[20px]" 
            viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="44"/><circle cx="50" cy="50" r="40"/>
            <polygon points="50,16 54,50 50,40 46,50"/><polygon points="50,84 54,50 50,60 46,50"/>
            <circle cx="50" cy="50" r="3"/>
          </motion.svg>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
