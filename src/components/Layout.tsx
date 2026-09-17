import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { settings } from '../data';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <Link to="/#top" className="logo">melisa akgül<span className="logo-dot">.</span></Link>

          <nav className={`main-nav ${isNavOpen ? 'is-open' : ''}`} id="main-nav">
            <a href="/#work" onClick={() => setIsNavOpen(false)}>Work</a>
            <a href="/#about" onClick={() => setIsNavOpen(false)}>About</a>
            <a href="/#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
          </nav>

          <div className="header-widget items-center gap-6">
            <div className="flex items-center gap-4 text-[#2B2118]">
              <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8F8F] transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <button 
            className={`nav-toggle ${isNavOpen ? 'is-open' : ''}`} 
            id="nav-toggle" 
            aria-label="Menüyü aç" 
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main id="top">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link to="/#top" className="logo footer-logo">melisa akgül<span className="logo-dot">.</span></Link>
            <p className="footer-tagline">Indie Game Marketing</p>
          </div>

          <nav className="footer-nav">
            <a href="/#work">Work</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Melisa Akgül. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
