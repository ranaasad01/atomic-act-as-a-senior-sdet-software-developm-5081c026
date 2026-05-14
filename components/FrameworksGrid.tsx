"use client";

import { Globe, FileText, Gauge, Settings } from 'lucide-react';

type Tool = {
  name: string;
  tag: string;
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  tagBg: string;
  tagText: string;
  description: string;
  tools: Tool[];
};

const categories: Category[] = [
  {
    id: "web",
    label: "Web Automation",
    icon: Globe,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/5",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-300",
    description: "Browser-level E2E testing across Chromium, Firefox, and WebKit with parallel execution and visual regression.",
    tools: [
      { name: "Playwright", tag: "Primary" },
      { name: "Cypress", tag: "Component" },
      { name: "Selenium", tag: "Legacy" },
    ],
  },
  {
    id: "api",
    label: "API Testing",
    icon: FileText,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-300",
    description: "Contract-first API validation, schema enforcement, and consumer-driven contract testing across microservices.",
    tools: [
      { name: "RestAssured", tag: "Java" },
      { name: "Supertest", tag: "Node.js" },
      { name: "Postman/Newman", tag: "CI/CD" },
    ],
  },
  {
    id: "performance",
    label: "Performance Testing",
    icon: Gauge,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/5",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-300",
    description: "Load, stress, and soak testing with SLA gatekeeping. p95 latency enforcement and throughput benchmarking.",
    tools: [
      { name: "k6", tag: "Primary" },
      { name: "JMeter", tag: "Load" },
      { name: "Artillery", tag: "Serverless" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: Settings,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-300",
    description: "Containerized test environments, pipeline orchestration, and scalable test execution across distributed runners.",
    tools: [
      { name: "Docker", tag: "Containers" },
      { name: "GitHub Actions", tag: "CI/CD" },
      { name: "Jenkins", tag: "Enterprise" },
    ],
  },
];

export default function FrameworksGrid() {
  return (
    <section id="frameworks" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-500" />
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
              Technical Proficiency
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Frameworks &amp; Toolchain
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A battle-tested toolkit spanning the full quality engineering spectrum —
            from browser automation to infrastructure-level reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={"rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.01] group " + cat.bgColor + " " + cat.borderColor}
                style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={"w-10 h-10 rounded-lg flex items-center justify-center " + cat.tagBg}>
                    <Icon className={"w-5 h-5 " + cat.accentColor} />
                  </div>
                  <div>
                    <div className={"font-mono text-xs tracking-widest uppercase mb-0.5 " + cat.accentColor}>
                      {cat.id.toUpperCase()}
                    </div>
                    <div className="font-semibold text-slate-100 text-sm">
                      {cat.label}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Tools */}
                <div className="space-y-2">
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      <span className="font-mono text-sm text-slate-200 font-medium">
                        {tool.name}
                      </span>
                      <span className={"px-2 py-0.5 rounded text-xs font-mono font-semibold " + cat.tagBg + " " + cat.tagText}>
                        {tool.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional skills row */}
        <div className="mt-8 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
          <div className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-widest">
            Also proficient in
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Pact (Contract Testing)",
              "OWASP ZAP",
              "SonarQube",
              "Allure Reports",
              "TestRail",
              "Grafana",
              "Prometheus",
              "AWS CodePipeline",
              "GitLab CI",
              "Kubernetes",
              "Terraform",
              "TypeScript",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded-full hover:border-emerald-500/40 hover:text-emerald-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
