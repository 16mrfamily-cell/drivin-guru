'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DGMark } from './DGMark';

export default function Nav({ instructorPage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = instructorPage
    ? [
        { href: '/', label: '← Student Lessons' },
        { href: '#perks', label: 'Why Join' },
        { href: '#how', label: 'How It Works' },
        { href: '#earnings', label: 'Earnings' },
        { href: '#faq', label: 'FAQs' },
      ]
    : [
        { href: '#courses', label: 'Courses' },
        { href: '#why', label: 'Why Us' },
        { href: '#pricing', label: 'Pricing' },
        { href: '/instructors', label: 'Join Our Team' },
      ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink/95 backdrop-blur-xl' : 'bg-ink/90 backdrop-blur-md'
        } border-b border-white/[0.07]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <DGMark size={36} />
              <span className="font-syne font-black text-lg sm:text-xl tracking-widest uppercase text-white">
                DRIVIN <span className="text-lime">GURU</span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-syne font-semibold text-sm tracking-widest uppercase text-white/50 hover:text-lime transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/447360271186?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-syne font-bold text-sm tracking-widest uppercase px-4 py-2 rounded"
                >
                  <WhatsAppIcon /> Chat Now
                </a>
              </li>
              <li>
                <a
                  href={instructorPage ? '#apply' : '#book'}
                  className="bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase px-5 py-2 rounded hover:bg-white transition-colors"
                >
                  {instructorPage ? 'Apply Now' : 'Book Now'}
                </a>
              </li>
            </ul>

            {/* Mobile buttons */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="https://wa.me/447360271186?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white font-syne font-bold text-xs tracking-wider uppercase px-3 py-2 rounded"
              >
                <WhatsAppIcon size={14} /> Chat
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-ink2 border-t border-white/[0.07] px-4 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-syne font-semibold text-sm tracking-widest uppercase text-white/60 hover:text-lime py-3 border-b border-white/[0.05] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={instructorPage ? '#apply' : '#book'}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase px-5 py-3 rounded"
                >
                  {instructorPage ? 'Apply Now' : 'Book Now'}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.83L.057 23.25a.75.75 0 00.917.912l5.562-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.964-1.355l-.356-.211-3.683.987.974-3.596-.232-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}
