"use client";

import { useState, useEffect } from "react";
import { Package, TestTube, FileCode, Globe, Gauge, CheckCircle, Clock } from 'lucide-react';

type Step = {
  id: number;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  duration: string;
  status: "pending" | "running" | "passed" | "failed";
  details: string;
};

const pipelineSteps: Step[] = [
  {
    id: 1,
    label: "Build",
    sublabel: "Compile & Lint",
    icon: Package,
    duration: "~45s",
    status: "passed",
    details: "TypeScript compile, ESLint, dependency audit",
  },
  {
    id: 2,
    label: "Unit Tests",
    sublabel: "Jest / Vitest",
    icon: TestTube,
    duration: "~1m 20s",
    status: "passed",
    details: "342 unit tests, 98.5% coverage threshold",
  },
  {
    id: 3,
    label: "Contract Tests",
    sublabel: "Pact / OpenAPI",
    icon: FileCode,
    duration: "~2m 10s",
    status: "passed",
    details: "Consumer-driven contracts, schema validation",
  },
  {
    id: 4,
    label: "E2E Suite",
    sublabel: "Playwright",
    icon: Globe,
    duration: "~8m 30s",
    status: "running",
    details: "142 scenarios, parallel sharding across 4 workers",
  },
  {
    id: 5,
    label: "Performance Gate",
    sublabel: "k6 / Artillery",
    icon: Gauge,
    duration: "~5m 00s",
    status: "pending",
    details: "p95 < 500ms, error rate < 0.1%, 1000 VUs",
  },
];

const statusConfig = {
  passed: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/40",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    label: "PASSED",
    labelColor: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  running: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/40",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    label: "RUNNING",
    labelColor: "text-amber-400",
    dot: "bg-amber-400",
  },
  pending: {
    bg: "bg-slate-800/50",
    border: "border-slate-700/50",
    iconBg: "bg-slate-700/50",
    iconColor: "text-slate-500",
    label: "QUEUED",
    labelColor: "text-slate-500",
    dot: "bg-slate-600",
  },
  failed: {
    bg: "bg-red-500/10",
    border: "border-red-500/40",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    label: "FAILED",
    labelColor: "text-red-400",
    dot: "bg-red-400",
  },
};

export default function PipelineStepper() {
  const [activeStep, setActiveStep] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pipeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
              CI/CD Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Automation Pipeline
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A multi-stage quality gate ensuring every commit is validated through
            unit, contract, E2E, and performance checks before reaching production.
          </p>
        </div>

        {/* Pipeline visual — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:flex items-start gap-0">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const cfg = statusConfig[isActive && step.status === "pending" ? "running" : step.status];
              const isLast = index === pipelineSteps.length - 1;

              return (
                <div key={step.id} className="flex items-start flex-1">
                  {/* Step card */}
                  <div className="flex-1">
                    <div
                      className={"rounded-xl border p-4 transition-all duration-500 cursor-default " + cfg.bg + " " + cfg.border + (isActive ? " shadow-lg" : "")}
                      style={isActive ? { boxShadow: step.status === "running" || step.status === "pending" ? "0 0 20px rgba(245,158,11,0.2)" : "0 0 20px rgba(16,185,129,0.2)" } : {}}
                    >
                      {/* Step number + status */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-slate-600">
                          STEP {step.id}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={"w-1.5 h-1.5 rounded-full " + cfg.dot + (isActive && step.status !== "passed" ? " animate-pulse" : "")} />
                          <span className={"font-mono text-xs font-semibold " + cfg.labelColor}>
                            {isActive && step.status === "pending" ? "RUNNING" : cfg.label}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={"w-10 h-10 rounded-lg flex items-center justify-center mb-3 " + cfg.iconBg}>
                        <Icon className={"w-5 h-5 " + cfg.iconColor} />
                      </div>

                      {/* Label */}
                      <div className="font-semibold text-slate-100 text-sm mb-0.5">
                        {step.label}
                      </div>
                      <div className="font-mono text-xs text-slate-500 mb-2">
                        {step.sublabel}
                      </div>

                      {/* Details */}
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {step.details}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-1 font-mono text-xs text-slate-600">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {!isLast && (
                    <div className="flex items-center justify-center w-8 mt-8 flex-shrink-0">
                      <div className="relative w-full h-px">
                        <div className="absolute inset-0 bg-slate-700" />
                        {step.status === "passed" && (
                          <div className="absolute inset-0 bg-emerald-500/60" />
                        )}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-600" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="lg:hidden space-y-3">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const cfg = statusConfig[isActive && step.status === "pending" ? "running" : step.status];
              const isLast = index === pipelineSteps.length - 1;

              return (
                <div key={step.id} className="flex gap-4">
                  {/* Left: icon + connector */}
                  <div className="flex flex-col items-center">
                    <div className={"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 " + cfg.iconBg}>
                      <Icon className={"w-5 h-5 " + cfg.iconColor} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 mt-2 bg-slate-700 min-h-4" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className={"flex-1 rounded-xl border p-4 mb-2 " + cfg.bg + " " + cfg.border}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold text-slate-100 text-sm">{step.label}</div>
                      <div className="flex items-center gap-1.5">
                        <span className={"w-1.5 h-1.5 rounded-full " + cfg.dot} />
                        <span className={"font-mono text-xs " + cfg.labelColor}>
                          {isActive && step.status === "pending" ? "RUNNING" : cfg.label}
                        </span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-slate-500">{step.sublabel}</div>
                    <p className="text-xs text-slate-500 mt-1">{step.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pipeline summary bar */}
        <div className="mt-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-sm text-slate-300">
              <span className="text-emerald-400 font-semibold">3</span> stages passed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-sm text-slate-300">
              <span className="text-amber-400 font-semibold">1</span> stage running
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="font-mono text-sm text-slate-300">
              <span className="text-slate-400 font-semibold">1</span> stage queued
            </span>
          </div>
          <div className="ml-auto font-mono text-xs text-slate-500">
            Total estimated: ~17m 45s
          </div>
        </div>
      </div>
    </section>
  );
}
