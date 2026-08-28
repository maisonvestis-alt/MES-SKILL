import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';

const NAV_ITEMS = ['About Us', 'Programs', 'Reviews', 'FAQ', 'Contacts'];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="grid grid-cols-2 gap-0.5">
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
    </div>
    <span className="text-white font-bold text-lg sm:text-xl ml-1">TinyTrails</span>
  </div>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scaleY, setScaleY] = useState(1);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const el = textRef.current;
      if (!el) return;
      const naturalHeight = el.offsetHeight;
      if (!naturalHeight) return;
      setScaleY(window.innerHeight / naturalHeight);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(to bottom, #FF8233, #FDAC55)' }}
    >
      {/* Background "404" text + oval */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.8,
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span
            ref={textRef}
            className="font-black leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontSize: 'clamp(200px, 48vw, 800px)',
              color: '#FFFFFF',
              WebkitTextFillColor: '#FFFFFF',
              transform: `scale(1.15, ${scaleY * 1.4})`,
            }}
          >
            404
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full h-[22vh] sm:h-[26vh] md:h-[50vh]"
            style={{
              width: 'clamp(120px, 20vw, 400px)',
              background: '#FFFFFF',
              transform: `scaleY(${scaleY})`,
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-white hover:opacity-90 transition-colors"
              style={{ color: '#F16524' }}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white hover:opacity-90 transition-colors"
          style={{ background: '#F16524' }}
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Menu</span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'visible' : 'invisible delay-500'
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[380px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)' }}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 px-6 pt-8">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: menuOpen ? '450ms' : '0ms' }}
          >
            <a
              href="/"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white font-semibold text-base hover:scale-[1.02] transition-transform"
              style={{ color: '#F16524' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Center video */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ marginTop: 'calc(-6vh - 40px)' }}
      >
        <div className="w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none mix-blend-darken"
            src="https://meez.design/web/media/prompt-media/v/118ba14fa3179a4f.mp4"
          />
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Oops, something went wrong!
        </h2>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition-all"
          style={{ background: '#F16524' }}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </a>
      </div>
    </div>
  );
}
