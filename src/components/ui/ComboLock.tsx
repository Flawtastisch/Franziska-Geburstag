import { cn } from './Button';

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ComboLockProps {
  era?: string;
  value: string;
  onChange: (val: string) => void;
  solved: boolean;
  errorShake: boolean;
}

export function ComboLock({ value, onChange, solved, errorShake }: ComboLockProps) {
  const wheels = Array.from(value).map(char => {
    const idx = ALPHABET.indexOf(char);
    return idx === -1 ? 0 : idx;
  });

  const handleScroll = (idx: number, dir: 1 | -1) => {
    if (solved) return;
    const newWheels = [...wheels];
    newWheels[idx] = (newWheels[idx] + dir + 26) % 26;
    const newStr = newWheels.map(w => ALPHABET[w]).join('');
    onChange(newStr);
  };

  return (
    <div className={cn("flex gap-1.5 items-center my-6 flex-wrap", errorShake && "animate-shake")}>
      {wheels.map((w, idx) => (
        <div key={idx} className="flex flex-col items-center gap-0.5 outline-none">
          <button
            disabled={solved}
            onClick={() => handleScroll(idx, -1)}
            className={cn(
              "w-12 h-7 bg-transparent border border-cave-wall text-text-muted text-[9px] cursor-pointer transition-colors font-mono select-none flex items-center justify-center",
              !solved && "hover:bg-old-oak/10 hover:text-old-oak hover:border-old-oak"
            )}
          >
            ▲
          </button>
          
          <div className="w-12 h-[114px] overflow-hidden relative bg-abyss border border-cave-wall cursor-ns-resize
            before:content-[''] before:absolute before:left-0 before:right-0 before:h-9 before:top-0 before:bg-gradient-to-b before:from-abyss before:to-transparent before:z-[2] before:pointer-events-none
            after:content-[''] after:absolute after:left-0 after:right-0 after:h-9 after:bottom-0 after:bg-gradient-to-t after:from-abyss after:to-transparent after:z-[2] after:pointer-events-none"
          >
            {/* Highlight band */}
            <div className={cn(
              "absolute top-[38px] left-0 right-0 h-[38px] border-t border-b border-old-oak/30 bg-old-oak/5 pointer-events-none z-[1]",
              solved && "border-[#6db890]/40 bg-[#6db890]/5"
            )} />
            
            {/* Drum inner */}
            <div 
              className="absolute w-full top-0 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateY(-${w * 38}px)` }}
            >
              {[...ALPHABET].map((char, i) => (
                <div 
                  key={char} 
                  className={cn(
                    "h-[38px] flex items-center justify-center font-mono text-[1.25rem] font-bold text-text-muted/60 tracking-[0.05em] transition-colors duration-150",
                    i === w && "text-old-oak",
                    i === w && solved && "text-[#6db890]"
                  )}
                >
                  {char}
                </div>
              ))}
            </div>
          </div>

          <button
            disabled={solved}
            onClick={() => handleScroll(idx, 1)}
            className={cn(
              "w-12 h-7 bg-transparent border border-cave-wall text-text-muted text-[9px] cursor-pointer transition-colors font-mono select-none flex items-center justify-center",
              !solved && "hover:bg-old-oak/10 hover:text-old-oak hover:border-old-oak"
            )}
          >
            ▼
          </button>
        </div>
      ))}
    </div>
  );
}
