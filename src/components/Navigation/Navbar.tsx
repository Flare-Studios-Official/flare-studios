import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';
import { cn } from '../../utils/cn';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'services', label: 'SERVICES' },
    { id: 'showreel', label: 'SHOWREEL' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out',
          isScrolled ? 'py-3' : 'py-6 md:py-8'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              'flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500',
              isScrolled
                ? 'bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                : 'bg-transparent border border-transparent'
            )}
          >
            {/* Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              onMouseEnter={() => sound.playHover()}
              className="group flex items-center gap-2.5 font-display text-lg md:text-xl font-black tracking-widest text-[#F5F3EF]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF9B45] text-[10px] text-white shadow-[0_0_15px_rgba(255,87,34,0.5)] transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="tracking-[0.2em]">FLARE</span>
              <span className="text-[#FF5722] transition-colors duration-300 group-hover:text-[#FF9B45]">
                STUDIOS
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    onMouseEnter={() => sound.playHover()}
                    className={cn(
                      'relative px-4 py-1.5 text-xs font-semibold tracking-[0.18em] transition-colors duration-300',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF9B45] shadow-[0_0_8px_#FF5722]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Sound Toggle + Contact CTA */}
            <div className="flex items-center gap-3">
              {/* Sound Design Toggle */}
              <button
                onClick={toggleSound}
                onMouseEnter={() => sound.playHover()}
                title={soundEnabled ? 'Mute Interaction Audio' : 'Enable Interactive Sound Design'}
                className={cn(
                  'relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300',
                  soundEnabled
                    ? 'border-[#FF5722]/50 bg-[#FF5722]/20 text-[#FF5722] shadow-[0_0_12px_rgba(255,87,34,0.4)]'
                    : 'border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white'
                )}
              >
                {soundEnabled ? (
                  <Volume2 className="h-4 w-4 animate-pulse" />
                ) : (
                  <VolumeX className="h-4 w-4" />
                )}
              </button>

              {/* Header Action Button (Desktop) */}
              <button
                onClick={() => handleLinkClick('contact')}
                onMouseEnter={() => sound.playHover()}
                className="hidden rounded-full border border-[#FF5722]/40 bg-gradient-to-r from-[#FF5722]/15 to-[#FF9B45]/15 px-4 py-1.5 text-xs font-bold tracking-wider text-white transition-all duration-300 hover:border-[#FF5722] hover:bg-[#FF5722] hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] sm:inline-flex"
              >
                IGNITE
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:text-white md:hidden"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-between bg-[#080808]/95 px-6 pt-24 pb-12 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-5 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5722]">
              Menu Navigation
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{ animationDelay: `${idx * 0.05}s` }}
                className="flex items-center justify-between border-b border-white/10 py-3 text-left font-display text-2xl font-bold tracking-wider text-white/80 transition-all hover:pl-2 hover:text-[#FF5722]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF9B45] py-4 text-center text-sm font-bold tracking-widest uppercase text-white shadow-[0_0_25px_rgba(255,87,34,0.4)]"
            >
              START A PROJECT
            </button>
            <p className="text-center font-mono text-[11px] text-white/40">
              flarestudios.main@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};
