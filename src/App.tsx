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
            <Route path="/1" element={<Puzzle1 />} />
            <Route path="/2" element={<Puzzle2 />} />
            <Route path="/3" element={<Puzzle3 />} />
            <Route path="/4" element={<Puzzle4 />} />
            <Route path="/5" element={<Puzzle5 />} />
            <Route path="/6" element={<Puzzle6 />} />
            <Route path="/7" element={<Puzzle7 />} />
            <Route path="/8" element={<Puzzle8 />} />
            <Route path="/ende" element={<Finale />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}
