import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Intro } from './pages/Intro';
import { Puzzle1 } from './pages/Puzzle1';
import { Puzzle2 } from './pages/Puzzle2';
import { Puzzle3 } from './pages/Puzzle3';
import { Puzzle4 } from './pages/Puzzle4';
import { Puzzle5 } from './pages/Puzzle5';
import { Puzzle6 } from './pages/Puzzle6';
import { Puzzle7 } from './pages/Puzzle7';
import { Puzzle8 } from './pages/Puzzle8';
import { Finale } from './pages/Finale';
import { UnlockedGuard } from './components/layout/UnlockedGuard';

export default function App() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('dark_loaded'));

  useEffect(() => {
    if (!loading) {
      sessionStorage.setItem('dark_loaded', '1');
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/1" element={<UnlockedGuard puzzleId="1"><Puzzle1 /></UnlockedGuard>} />
            <Route path="/2" element={<UnlockedGuard puzzleId="2"><Puzzle2 /></UnlockedGuard>} />
            <Route path="/3" element={<UnlockedGuard puzzleId="3"><Puzzle3 /></UnlockedGuard>} />
            <Route path="/4" element={<UnlockedGuard puzzleId="4"><Puzzle4 /></UnlockedGuard>} />
            <Route path="/5" element={<UnlockedGuard puzzleId="5"><Puzzle5 /></UnlockedGuard>} />
            <Route path="/6" element={<UnlockedGuard puzzleId="6"><Puzzle6 /></UnlockedGuard>} />
            <Route path="/7" element={<UnlockedGuard puzzleId="7"><Puzzle7 /></UnlockedGuard>} />
            <Route path="/8" element={<UnlockedGuard puzzleId="8"><Puzzle8 /></UnlockedGuard>} />
            <Route path="/finale" element={<UnlockedGuard puzzleId="finale"><Finale /></UnlockedGuard>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}
