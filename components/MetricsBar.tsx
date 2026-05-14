"use client";

import { Activity, Shield, Gauge, GitBranch } from 'lucide-react';

type Metric = {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  borderColor: string;
};

const metrics: Metric[] = [
  {
    icon: Activity,
    value: "500+",
    label: "Test Cases Automated",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Gauge,
    value: "70%",
    label: "Regression Time Reduction",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    icon: Shield,
    value: "99.8%",
    label: "Pipeline Reliability",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: GitBranch,
    value: "3",
    label: "CI/CD Platforms Integrated",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
];

export default function MetricsBar() {
  return (
    <section className="relative py-8 border-y border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Icon className={"w-6 h-6 " + metric.color} />
                </div>
                <div>
                  <div className={"text-2xl font-bold font-mono " + metric.color}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 font-mono leading-tight">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
