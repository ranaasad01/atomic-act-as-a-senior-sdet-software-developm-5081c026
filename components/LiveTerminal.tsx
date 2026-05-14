"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal, Circle, Minus, Square } from 'lucide-react';

type TerminalLine = {
  id: number;
  text: string;
  type: "command" | "info" | "pass" | "fail" | "summary" | "blank" | "header";
};

const terminalScript: TerminalLine[] = [
  { id: 1, text: "$ npx playwright test smoke-test-suite.spec.ts --reporter=list", type: "command" },
  { id: 2, text: "", type: "blank" },
  { id: 3, text: "Running: smoke-test-suite.spec.ts...", type: "info" },
  { id: 4, text: "Workers: 4 | Shards: 1/1 | Retries: 2", type: "info" },
  { id: 5, text: "", type: "blank" },
  { id: 6, text: "  ✓  Authentication Flow — login with valid credentials (452ms)", type: "pass" },
  { id: 7, text: "  ✓  Authentication Flow — MFA token validation (318ms)", type: "pass" },
  { id: 8, text: "  ✓  Authentication Flow — session expiry handling (201ms)", type: "pass" },
  { id: 9, text: "  ✓  Payment Gateway Mock — card tokenization (890ms)", type: "pass" },
  { id: 10, text: "  ✓  Payment Gateway Mock — 3DS challenge flow (1.2s)", type: "pass" },
  { id: 11, text: "  ✓  Payment Gateway Mock — refund processing (743ms)", type: "pass" },
  { id: 12, text: "  ✓  User Profile — avatar upload validation (567ms)", type: "pass" },
  { id: 13, text: "  ✓  User Profile — email change with re-auth (412ms)", type: "pass" },
  { id: 14, text: "  ✓  Search & Filtering — full-text search accuracy (289ms)", type: "pass" },
  { id: 15, text: "  ✓  Search & Filtering — faceted filter combinations (334ms)", type: "pass" },
  { id: 16, text: "  ✓  Checkout Flow — cart persistence across sessions (678ms)", type: "pass" },
  { id: 17, text: "  ✓  Checkout Flow — promo code application (445ms)", type: "pass" },
  { id: 18, text: "  ✓  Notifications — real-time push delivery (1.1s)", type: "pass" },
  { id: 19, text: "  ✓  API Health — /health endpoint response (98ms)", type: "pass" },
  { id: 20, text: "  ✓  API Health — rate limiting enforcement (203ms)", type: "pass" },
  { id: 21, text: "", type: "blank" },
  { id: 22, text: "  ─────────────────────────────────────────────────────────", type: "header" },
  { id: 23, text: "  Summary: 142 passed, 0 failed, 0 skipped", type: "summary" },
  { id: 24, text: "  Duration: 14m 32s  |  Workers: 4  |  Flaky: 0", type: "summary" },
  { id: 25, text: "  Coverage: 94.2%  |  Threshold: 90%  ✓", type: "summary" },
  { id: 26, text: "  ─────────────────────────────────────────────────────────", type: "header" },
  { id: 27, text: "", type: "blank" },
  { id: 28, text: "$ echo 'Pipeline gate: PASSED — deploying to staging...'", type: "command" },
  { id: 29, text: "Pipeline gate: PASSED — deploying to staging...", type: "info" },
];

function getLineStyle(type: TerminalLine["type"]): string {
  switch (type) {
    case "command":
      return "text-amber-400 font-semibold";
    case "pass":
      return "text-emerald-400";
    case "fail":
      return "text-red-400";
    case "summary":
      return "text-emerald-300 font-semibold";
    case "header":
      return "text-slate-600";
    case "info":
      return "text-slate-400";
    case "blank":
      return "";
    default:
      return "text-slate-300";
  }
}

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAnimation = () => {
    setVisibleLines([]);
    indexRef.current = 0;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      if (indexRef.current >= terminalScript.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
        // Restart after 3 seconds
        setTimeout(() => startAnimation(), 3000);
        return;
      }
      const line = terminalScript[indexRef.current];
      setVisibleLines((prev) => [...prev, line]);
      indexRef.current += 1;
    }, 180);
  };

  useEffect(() => {
    startAnimation();
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(cursorInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
              Live Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Test Suite Runner
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Real-time simulation of a Playwright smoke test suite executing across
            parallel workers with live pass/fail reporting.
          </p>
        </div>

        {/* Terminal window */}
        <div
          className="rounded-2xl overflow-hidden border border-slate-700/80"
          style={{ boxShadow: "0 0 40px rgba(16,185,129,0.1), 0 20px 60px rgba(0,0,0,0.5)" }}
        >
          {/* Terminal title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center gap-2">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="ml-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-xs text-slate-400">
                  smoke-test-suite.spec.ts — Playwright v1.44
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {isRunning ? (
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-mono text-xs text-amber-400">EXECUTING</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400">COMPLETE</span>
                </div>
              )}
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="bg-[#0d1117] p-5 h-80 overflow-y-auto terminal-scroll"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {visibleLines.map((line) => (
              <div
                key={line.id}
                className={"text-xs leading-6 terminal-line " + getLineStyle(line.type)}
              >
                {line.text === "" ? "\u00A0" : line.text}
              </div>
            ))}
            {/* Cursor */}
            <div className="flex items-center h-5">
              <span className="text-xs text-emerald-400 font-mono">
                {isRunning ? "" : "$ "}
              </span>
              <span
                className="inline-block w-2 h-4 bg-emerald-400 ml-0.5"
                style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
              />
            </div>
          </div>

          {/* Terminal footer */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-t border-slate-700">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-slate-500">
                node v20.11.0
              </span>
              <span className="font-mono text-xs text-slate-500">
                playwright v1.44.0
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-emerald-400">
                {visibleLines.filter((l) => l.type === "pass").length} passed
              </span>
              <span className="font-mono text-xs text-slate-500">
                0 failed
              </span>
            </div>
          </div>
        </div>

        {/* Info note */}
        <p className="mt-4 text-center font-mono text-xs text-slate-600">
          // Simulation loops automatically — reflects real CI output format
        </p>
      </div>
    </section>
  );
}
