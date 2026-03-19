import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout, PuzzleLeft, PuzzleRight } from '../components/layout/Layout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { HintBox, HintButton } from '../components/ui/HintBox';
import { ANSWERS } from '../lib/constants';

export function Puzzle8() {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleCheck = () => {
    if (
      ans1.trim().toUpperCase() === ANSWERS.puzzle8.part1 &&
      ans2.trim().toUpperCase() === ANSWERS.puzzle8.part2 &&
      ans3.trim().toUpperCase() === ANSWERS.puzzle8.part3
    ) {
      setSolved(true);
      setErrorVisible(false);
      localStorage.setItem('unlocked_finale', 'true');
    } else {
      setAttempts(a => a + 1);
      setErrorVisible(true);
      if (ans1.trim().toUpperCase() !== ANSWERS.puzzle8.part1) setAns1('');
      if (ans2.trim().toUpperCase() !== ANSWERS.puzzle8.part2) setAns2('');
      if (ans3.trim().toUpperCase() !== ANSWERS.puzzle8.part3) setAns3('');
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
            &gt; FINALE VERIFIZIERUNG
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="inf" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.4rem,3.5vw,2.4rem)] tracking-[0.1em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: ∞]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Der Kern
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Kälte. Unendliche Schwärze. Du stehst vor dem letzten Terminal – eine massive Metalltür mit drei eingelassenen Ringen.</p>
            <p className="mb-2.5 text-[1rem]">Um die Zeitlinie endgültig zu stabilisieren, musst du die drei Hauptfamilien von Winden identifizieren.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Sage ihren Namen.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              Jonas K_______<br/>Martha N_______<br/>Ulrich T_______
            </HintBox>
            
            {solved && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 border border-cave-wall bg-abyss p-6 text-center">
                 <p className="font-label font-normal text-[0.65rem] tracking-[0.35em] text-old-oak uppercase mb-5">SYSTEM VOLLSTÄNDIG WIEDERHERGESTELLT</p>
                 <p className="mb-6 text-text-light">Die Ringe rasten ein. Ein tiefes Grollen erfüllt den Raum, als sich das letzte Portal öffnet.</p>
                 <div className="border border-cave-wall bg-abyss p-4 text-center mt-4">
                  <p className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-text-light mb-2">Letzter Schritt</p>
                  <p className="text-old-oak text-sm">Finde und scanne den finalen QR-Code, um das Portal zu betreten.</p>
                 </div>
              </motion.div>
            )}
          </motion.div>
        </PuzzleLeft>
        
        <PuzzleRight>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="w-full max-w-[400px] mx-auto">
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-center mb-8 uppercase">
              Verifizierung: Drei Familiennamen
            </p>
            
            <div className="flex flex-col gap-5">
              <Input 
                value={ans1}
                onChange={e => setAns1(e.target.value)}
                isError={errorVisible && ans1.trim().toUpperCase() !== ANSWERS.puzzle8.part1}
                isCorrect={solved || (ans1.trim().toUpperCase() === ANSWERS.puzzle8.part1 && attempts > 0)}
                disabled={solved}
                placeholder="FAMILIE 1"
              />
              <Input 
                value={ans2}
                onChange={e => setAns2(e.target.value)}
                isError={errorVisible && ans2.trim().toUpperCase() !== ANSWERS.puzzle8.part2}
                isCorrect={solved || (ans2.trim().toUpperCase() === ANSWERS.puzzle8.part2 && attempts > 0)}
                disabled={solved}
                placeholder="FAMILIE 2"
              />
              <Input 
                value={ans3}
                onChange={e => setAns3(e.target.value)}
                isError={errorVisible && ans3.trim().toUpperCase() !== ANSWERS.puzzle8.part3}
                isCorrect={solved || (ans3.trim().toUpperCase() === ANSWERS.puzzle8.part3 && attempts > 0)}
                disabled={solved}
                placeholder="FAMILIE 3"
                onKeyDown={e => e.key === 'Enter' && !solved && handleCheck()}
              />
            </div>
            
            {!solved && (
              <Button className="mt-8 w-full" onClick={handleCheck}>
                INITIERE SEQUENZ
              </Button>
            )}
          </motion.div>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
