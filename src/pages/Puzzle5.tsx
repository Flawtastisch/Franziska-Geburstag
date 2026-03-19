import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout, PuzzleLeft, PuzzleRight } from '../components/layout/Layout';
import { Badge } from '../components/ui/Badge';
import { Button, cn } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { HintBox, HintButton } from '../components/ui/HintBox';
import { SuccessBox } from '../components/ui/SuccessBox';
import { RevealBox } from '../components/ui/RevealBox';
import { LocationHint } from '../components/ui/LocationHint';
import { ANSWERS } from '../lib/constants';

const gridLetters = [
  ["Z", "E", "I", "T", "K", "N", "O", "T"],
  ["J", "O", "N", "A", "S", "B", "C", "D"],
  ["F", "G", "H", "K", "L", "M", "P", "Q"],
  ["U", "V", "W", "X", "Y", "A", "B", "C"],
  ["D", "R", "E", "I", "S", "E", "F", "G"],
  ["H", "J", "K", "L", "M", "N", "O", "P"],
  ["Q", "U", "V", "W", "X", "Y", "A", "B"],
  ["C", "D", "E", "F", "G", "H", "K", "L"],
];
const correctSequence = [
  { r: 4, c: 1 }, { r: 4, c: 2 }, { r: 4, c: 3 }, { r: 4, c: 4 }, { r: 4, c: 5 },
];

export function Puzzle5() {
  const [ans, setAns] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [solved, setSolved] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  const [selectedCells, setSelectedCells] = useState<{r: number, c: number}[]>([]);
  
  const navigate = useNavigate();

  const handleScore = () => {
    setSolved(true);
    setAns('REISE');
    setErrorVisible(false);
    setSelectedCells(correctSequence);
  };

  const handleCellClick = (r: number, c: number) => {
    if (solved) return;
    const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);
    
    let newSelection;
    if (isSelected) {
      newSelection = selectedCells.filter(cell => !(cell.r === r && cell.c === c));
    } else {
      newSelection = [...selectedCells, { r, c }];
    }
    
    setSelectedCells(newSelection);
    
    if (newSelection.length === correctSequence.length) {
      const match = correctSequence.every((p, i) => 
        newSelection[i] && newSelection[i].r === p.r && newSelection[i].c === p.c
      );
      if (match) {
        handleScore();
      } else {
        setTimeout(() => setSelectedCells([]), 300);
      }
    }
  };

  const handleInputSubmit = () => {
    if (ans.trim().toUpperCase() === ANSWERS.puzzle5) {
      handleScore();
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
            &gt; ZEITKNOTEN 5 VON 7
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <Badge year="1986" className="mb-2.5 block w-max" />
            <h1 className="font-serif font-bold text-[clamp(1.4rem,3.5vw,2.4rem)] tracking-[0.1em] leading-[1.2] mb-1.5 text-old-oak">
              [ZEITEBENE: 1986]
            </h1>
            <h2 className="font-label font-normal text-[0.8rem] tracking-[0.2em] uppercase text-text-muted mb-6">
              Das versteckte Muster
            </h2>
            <hr className="border-none my-5 h-[1px] bg-cave-wall" />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="p-[20px_0_20px_20px] my-5 border-l border-cave-wall text-text-light font-normal leading-[1.9]">
            <p className="mb-2.5 text-[1rem]">Eine vergilbte Karte. Ein Gitter aus Buchstaben. Irgendwo darin versteckt sich das nächste Wort.</p>
            <p className="mb-2.5 text-[1rem]">Such es. Es hat 5 Buchstaben.</p>
            <p className="mb-2.5 text-[1rem]">Möhrchen. Finde das Wort im Gitter.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            {!showHint && attempts >= 2 && !solved && (
              <HintButton isVisible={true} onClick={() => setShowHint(true)} />
            )}
            <HintBox isVisible={showHint && !solved}>
              Das Wort hat 5 Buchstaben und liegt waagerecht irgendwo im Gitter.
            </HintBox>
            
            <SuccessBox isVisible={solved} puzzleNum={5} />
            
            <RevealBox
              isVisible={solved}
              title="ZWEITER ZEITKNOTEN GERETTET"
              subtitle="Das Gerät in der Höhle erwacht zum Leben."
              emoji="⛳"
              text="DER NÄCHSTE ZEITKNOTEN FÜHRT ZUM ADVENTURE GOLF."
            >
              <p className="mt-2 text-text-muted font-serif italic">Bring deine beste Technik mit, Möhrchen.</p>
              <LocationHint isVisible={true} inRevealBox label="[ NÄCHSTE KOORDINATEN ]">
                Das Kontinuum hat sich verlagert. Der nächste Knoten liegt in einem Raum, der noch nach Zukunft riecht.
                <strong className="block mt-3.5 font-label font-normal text-[0.75rem] tracking-[0.2em] uppercase text-old-oak">
                  Betritt das neue Zimmer.
                </strong>
              </LocationHint>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 relative">
                <Button onClick={() => navigate('/6')}>[ WEITER ]</Button>
              </motion.div>
            </RevealBox>
          </motion.div>
        </PuzzleLeft>
        
        <PuzzleRight>
          <motion.div variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} className="w-full">
            <p className="font-label font-normal text-[0.65rem] tracking-[0.2em] text-text-muted text-left mb-3 uppercase">
              Klicke die Buchstaben nacheinander an – oder tippe das Wort unten ein
            </p>
            
            <div className="grid grid-cols-8 gap-[1px] bg-cave-wall/30 p-[1px] border border-cave-wall my-5 max-w-[340px] sm:max-w-full">
              {gridLetters.map((row, r) => row.map((char, c) => {
                const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);
                const isCorrect = solved && correctSequence.some(p => p.r === r && p.c === c);
                
                return (
                  <div 
                    key={`${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    className={cn(
                      "aspect-square flex items-center justify-center font-mono text-[clamp(0.65rem,2.2vw,0.85rem)] cursor-pointer select-none transition-colors",
                      !isSelected && !isCorrect && "bg-abyss text-text-muted hover:bg-old-oak/5 hover:text-old-oak",
                      isSelected && !isCorrect && "bg-old-oak/20 text-old-oak/80",
                      isCorrect && "bg-old-oak/30 text-old-oak font-bold"
                    )}
                  >
                    {char}
                  </div>
                );
              }))}
            </div>
            
            <div className="flex gap-3 items-stretch mt-4 w-full">
              <Input 
                value={ans}
                onChange={e => setAns(e.target.value)}
                isError={errorVisible}
                isCorrect={solved}
                disabled={solved}
                placeholder="GEFUNDENES WORT"
                onKeyDown={e => e.key === 'Enter' && !solved && handleInputSubmit()}
              />
              {!solved && (
                <Button className="mt-0 whitespace-nowrap" onClick={handleInputSubmit}>SENDEN</Button>
              )}
            </div>
          </motion.div>
        </PuzzleRight>
      </motion.div>
    </Layout>
  );
}
