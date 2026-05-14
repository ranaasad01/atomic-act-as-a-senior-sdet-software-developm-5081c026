import { Shield, Code2 as Github, Briefcase as Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="font-mono text-sm font-semibold text-slate-100">
                Alex Morgan
              </div>
              <div className="font-mono text-xs text-slate-500">
                Lead Automation &amp; Quality Engineer
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="font-mono text-xs text-slate-600 text-center">
            <span className="text-emerald-400">// </span>
            Building reliability into every commit since 2016
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:alex@sdet.dev"
              className="w-8 h-8 rounded border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-slate-600">
            &copy; {year} Alex Morgan. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <Terminal className="w-3 h-3 text-emerald-500/50" />
            Built with Next.js 14 · Tailwind CSS · Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}
