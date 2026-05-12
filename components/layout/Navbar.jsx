'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { Menu, X } from 'lucide-react';

    export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/coin', label: 'Coin' },
    { href: '/courses', label: 'Courses' },

  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">
              <span>P</span>
            </div>
            <div className="logo-text">
              <span>Phenix</span>
              <p>meta</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="navbar-right">
            <div className="language-switch">
              🇬🇧 <span>EN</span>
            </div>
            <a href="#quote" className="cta-button">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {/* {isOpen ? <X size={28} /> : <Menu size={28} />} */}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="mobile-cta-button"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}