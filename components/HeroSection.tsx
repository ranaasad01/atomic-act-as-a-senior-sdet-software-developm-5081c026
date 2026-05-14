"use client";

import { Shield, Gauge, ArrowRight, Code2 as Github, Briefcase as Linkedin, Mail, CheckCircle } from 'lucide-react';

const badges = [
  "8+ Years SDET",
  "500+ Tests Automated",
  "99.8% Pipeline Uptime",
  "3 CI/CD Platforms",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #0d1f35 50%, #0f172a 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-16 h-16 border-l-2 border-t-2 border-emerald-500/20" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-emerald-500/20" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-emerald-500/20" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-emerald-500/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
            Available for Senior SDET Roles
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-slate-100">Alex Morgan</span>
          <br />
          <span className="text-emerald-400" style={{ textShadow: "0 0 30px rgba(16,185,129,0.4)" }}>
            Lead Automation
          </span>
          <span className="text-slate-300"> &amp; </span>
          <span className="text-amber-400" style={{ textShadow: "0 0 30px rgba(245,158,11,0.4)" }}>
            Quality Engineer
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Specializing in high-scale E2E frameworks, CI/CD reliability, and performance gatekeeping.
          Building test infrastructure that catches bugs before they reach production.
        </p>

        {/* Tech stack line */}
        <p className="font-mono text-sm text-slate-500 mb-10">
          <span className="text-emerald-400">$</span> playwright · cypress · k6 · docker · github-actions · jenkins
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 rounded-full"
            >
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#pipeline"
            className="flex items-center gap-2 px-6 py-3 font-mono font-semibold text-slate-900 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-all duration-200 shadow-lg"
            style={{ boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}
          >
            <Gauge className="w-4 h-4" />
            View Pipeline Architecture
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#case-studies"
            className="flex items-center gap-2 px-6 py-3 font-mono font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg hover:bg-emerald-500/10 transition-all duration-200"
          >
            <Shield className="w-4 h-4" />
            Case Studies
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            github.com/alexmorgan
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/alexmorgan
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="mailto:alex@sdet.dev"
            className="flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            alex@sdet.dev
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
