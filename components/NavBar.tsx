"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Terminal", href: "#terminal" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg transition-all duration-300"
          : "bg-transparent transition-all duration-300"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="font-mono text-sm font-semibold">
              <span className="text-emerald-400">alex</span>
              <span className="text-slate-400">@</span>
              <span className="text-slate-100">sdet</span>
              <span className="text-amber-400">:~$</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-emerald-400 font-mono transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 border border-slate-700 rounded hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            >
              <Terminal className="w-3 h-3" />
              GitHub
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-mono font-semibold text-slate-900 bg-emerald-500 rounded hover:bg-emerald-400 transition-colors"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-emerald-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2 text-sm font-mono font-semibold text-slate-900 bg-emerald-500 rounded hover:bg-emerald-400 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
