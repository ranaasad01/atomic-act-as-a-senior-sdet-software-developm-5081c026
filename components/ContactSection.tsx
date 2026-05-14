"use client";

import { Mail, Briefcase as Linkedin, Code2 as Github, Terminal, Shield, FileText } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "alex@sdet.dev",
    href: "mailto:alex@sdet.dev",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexmorgan",
    href: "https://linkedin.com",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexmorgan",
    href: "https://github.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
];

const availability = [
  "Senior SDET / Lead QA Engineer roles",
  "Test Automation Architecture consulting",
  "CI/CD reliability engineering",
  "Performance testing strategy",
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
              Open to Opportunities
            </span>
            <div className="w-8 h-px bg-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let&apos;s Build Reliable Systems
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Looking for a quality engineer who treats test infrastructure as a first-class
            engineering concern? Let&apos;s talk about your reliability challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact links */}
          <div>
            <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
              Get in Touch
            </div>
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={"flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] group " + link.bg + " " + link.border}
                  >
                    <div className={"w-10 h-10 rounded-lg flex items-center justify-center " + link.bg}>
                      <Icon className={"w-5 h-5 " + link.color} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                        {link.label}
                      </div>
                      <div className={"font-mono text-sm font-medium group-hover:underline " + link.color}>
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Resume download */}
            <a
              href="#"
              className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400 transition-all font-mono text-sm"
            >
              <FileText className="w-4 h-4" />
              Download Resume / CV
            </a>
          </div>

          {/* Availability */}
          <div>
            <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
              Available For
            </div>
            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-sm text-emerald-400 font-semibold">
                  Currently Available
                </span>
              </div>
              <ul className="space-y-3">
                {availability.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terminal-style note */}
            <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-700/50 font-mono text-xs">
              <div className="text-slate-500 mb-1">// Response time</div>
              <div className="text-emerald-400">
                <span className="text-amber-400">$</span> avg_response_time = &quot;24h&quot;
              </div>
              <div className="text-slate-500 mt-2">// Preferred contact</div>
              <div className="text-emerald-400">
                <span className="text-amber-400">$</span> preferred = &quot;email | linkedin&quot;
              </div>
              <div className="text-slate-500 mt-2">// Location</div>
              <div className="text-emerald-400">
                <span className="text-amber-400">$</span> location = &quot;Remote / Hybrid&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
