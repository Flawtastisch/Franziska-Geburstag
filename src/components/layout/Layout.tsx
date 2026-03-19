import { useEffect, useState } from 'react';
// We don't need era-specific backgrounds anymore since the moodboard 
// implies a unified consistent "Dark" theme across the whole site.
export function Layout({ children, mode = 'puzzle' }: { children: React.ReactNode; mode?: 'puzzle' | 'centered' }) {

  return (
    <>
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-abyss" />
      
      {/* Elegantes Grid aus dem Moodboard */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-30" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #3a2a18 1px, transparent 1px),
            linear-gradient(to bottom, #3a2a18 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Concentric Circles Motif */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1] opacity-[0.15] overflow-hidden">
        <div className="w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full border border-old-oak absolute" />
        <div className="w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-full border border-old-oak absolute" />
        <div className="w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full border border-old-oak absolute" />
      </div>
      
      {/* Faint Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-20"
           style={{ background: 'repeating-linear-gradient(to bottom, transparent 0, transparent 3px, rgba(10, 8, 4, 0.4) 3px, rgba(10, 8, 4, 0.4) 6px)' }}
      />
      


      <div className="relative z-[2] w-full min-h-screen flex flex-col font-body text-old-oak">
        {mode === 'puzzle' ? (
          <div className="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-[40fr_60fr] lg:grid-cols-[44fr_56fr] m-0 p-0">
            {children}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-[40px_24px] md:p-[80px_48px] min-h-screen w-full max-w-5xl mx-auto">
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export function PuzzleLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-[40px_24px] lg:p-[70px_60px] min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-cave-wall flex flex-col justify-center items-center md:items-start text-center md:text-left bg-abyss/40 backdrop-blur-sm">
      <div className="w-full max-w-[500px] mx-auto md:mx-0">
        {children}
      </div>
    </div>
  );
}

export function PuzzleRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-[40px_24px] lg:p-[70px_80px] min-h-[50vh] md:min-h-screen flex flex-col justify-center items-center text-center w-full">
      <div className="w-full max-w-[650px] flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
