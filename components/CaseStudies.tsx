"use client";

import { Shield, Gauge, FileCode, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

type CaseStudy = {
  id: string;
  badge: string;
  badgeColor: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  metric: string;
  metricColor: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string[];
  tags: string[];
  borderColor: string;
  accentBg: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "parallel-execution",
    badge: "Performance Engineering",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    icon: Gauge,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    metric: "70% Faster",
    metricColor: "text-emerald-400",
    title: "Reduced Regression Time by 70% via Parallel Execution",
    description:
      "Redesigned a monolithic 4-hour regression suite into a parallelized, sharded Playwright architecture running across distributed CI workers.",
    challenge:
      "Legacy Selenium suite ran sequentially, blocking deployments for 4+ hours per release cycle. Test flakiness rate was 23%.",
    solution:
      "Migrated to Playwright with 8-worker parallel sharding, implemented test isolation via fixture factories, and added automatic retry logic with flake detection.",
    outcome: [
      "Regression runtime: 4h 10m → 1h 14m",
      "Flakiness rate: 23% → 1.2%",
      "Deployment frequency: 2x/week → daily",
      "CI cost reduced by 35% via optimized runner allocation",
    ],
    tags: ["Playwright", "GitHub Actions", "Docker", "TypeScript", "Sharding"],
    borderColor: "border-emerald-500/20",
    accentBg: "bg-emerald-500/5",
  },
  {
    id: "shift-left-security",
    badge: "Security Engineering",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    icon: Shield,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    metric: "Shift-Left",
    metricColor: "text-amber-400",
    title: "Implemented Shift-Left Security Scans in GitLab CI",
    description:
      "Embedded SAST, DAST, and dependency vulnerability scanning directly into the merge request pipeline, blocking insecure code before review.",
    challenge:
      "Security audits were conducted post-deployment, resulting in costly hotfixes. 3 critical CVEs reached production in a single quarter.",
    solution:
      "Integrated OWASP ZAP for DAST, Semgrep for SAST, and Trivy for container scanning into GitLab CI merge request pipelines with automated blocking thresholds.",
    outcome: [
      "0 critical CVEs reached production post-implementation",
      "Mean time to detect vulnerabilities: 14 days → 4 minutes",
      "Security scan coverage: 0% → 100% of MRs",
      "Reduced security remediation cost by ~60%",
    ],
    tags: ["GitLab CI", "OWASP ZAP", "Semgrep", "Trivy", "SAST/DAST"],
    borderColor: "border-amber-500/20",
    accentBg: "bg-amber-500/5",
  },
  {
    id: "data-driven-framework",
    badge: "Framework Architecture",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    icon: FileCode,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    metric: "Custom DDT",
    metricColor: "text-emerald-400",
    title: "Built a Custom Data-Driven Framework for Legacy Systems",
    description:
      "Architected a data-driven test framework for a 15-year-old COBOL-backed system with no existing API layer, enabling automated regression at scale.",
    challenge:
      "Legacy mainframe system had no REST API, no test hooks, and a UI built on 2008-era web technology. Manual regression took 3 engineers 2 weeks per release.",
    solution:
      "Built a custom DDT framework using Selenium 4 with CDP, Excel/JSON data providers, a page-object model generator, and a custom reporting layer feeding into Allure.",
    outcome: [
      "Manual regression: 2 weeks → 6 hours automated",
      "Test data coverage: 12 scenarios → 340+ parameterized cases",
      "Zero regression escapes in 8 consecutive releases",
      "Framework adopted by 3 additional legacy product teams",
    ],
    tags: ["Selenium 4", "Java", "TestNG", "Allure", "Data-Driven Testing"],
    borderColor: "border-emerald-500/20",
    accentBg: "bg-emerald-500/5",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
              Engineering Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Project Case Studies
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Measurable outcomes from real-world quality engineering initiatives.
            Every project is evaluated by reliability gains, defect escape rates, and delivery velocity.
          </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className={"rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:scale-[1.005] " + study.accentBg + " " + study.borderColor}
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Left: header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={"w-10 h-10 rounded-xl flex items-center justify-center " + study.iconBg}>
                        <Icon className={"w-5 h-5 " + study.iconColor} />
                      </div>
                      <span className={"px-2.5 py-1 rounded-full text-xs font-mono font-semibold border " + study.badgeColor}>
                        {study.badge}
                      </span>
                    </div>

                    {/* Metric highlight */}
                    <div className={"text-4xl font-bold font-mono mb-2 " + study.metricColor}
                      style={{ textShadow: index % 2 === 0 ? "0 0 20px rgba(16,185,129,0.3)" : "0 0 20px rgba(245,158,11,0.3)" }}>
                      {study.metric}
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 mb-3 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Middle: challenge + solution */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                        Challenge
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                        Solution
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right: outcomes + tags */}
                  <div className="lg:col-span-1">
                    <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">
                      Outcomes
                    </div>
                    <ul className="space-y-2 mb-5">
                      {study.outcome.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono font-semibold text-slate-900 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
            style={{ boxShadow: "0 0 20px rgba(16,185,129,0.25)" }}
          >
            <TrendingUp className="w-4 h-4" />
            Discuss Your Quality Engineering Needs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
