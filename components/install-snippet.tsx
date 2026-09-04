'use client';

import { useState } from 'react';

type TabKey = 'ai' | 'pnpm' | 'npm' | 'bun' | 'yarn';

const COMMANDS: Record<TabKey, { label: string; text: string; hint: string }> = {
  ai: {
    label: 'For LLM agent',
    text: 'Integrate aba-payway-sdk-unofficial into this project following: https://raw.githubusercontent.com/rithsila/aba-payway-unofficial/main/docs/agent-guide.md',
    hint: 'Cursor / Claude / Copilot',
  },
  pnpm: {
    label: 'pnpm',
    text: 'pnpm add aba-payway-sdk-unofficial',
    hint: 'Fast & disk-efficient',
  },
  npm: {
    label: 'npm',
    text: 'npm install aba-payway-sdk-unofficial',
    hint: 'Standard npm',
  },
  bun: {
    label: 'bun',
    text: 'bun add aba-payway-sdk-unofficial',
    hint: 'Ultra-fast runtime',
  },
  yarn: {
    label: 'yarn',
    text: 'yarn add aba-payway-sdk-unofficial',
    hint: 'Classic Yarn',
  },
};

export function InstallSnippet() {
  const [activeTab, setActiveTab] = useState<TabKey>('ai');
  const [copied, setCopied] = useState(false);

  const current = COMMANDS[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto text-left">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 backdrop-blur-md p-3 shadow-md dark:shadow-lg">
        {/* Header Tabs */}
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-neutral-200 dark:border-neutral-800/80">
          <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-950/70 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800/60">
            {(Object.keys(COMMANDS) as TabKey[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setCopied(false);
                  }}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#005C8A] text-white shadow-sm font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  {COMMANDS[tab].label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono hidden sm:inline">
            {current.hint}
          </span>
        </div>

        {/* Code Line + Copy Button */}
        <div className="flex items-center justify-between gap-3 px-2 py-1">
          <div className="overflow-x-auto font-mono text-xs text-neutral-800 dark:text-neutral-200 min-w-0">
            {activeTab === 'ai' ? (
              <span className="text-[#005C8A] dark:text-cyan-300 select-all font-medium">{current.text}</span>
            ) : (
              <>
                <span className="text-neutral-400 dark:text-neutral-500 mr-2 select-none font-bold">$</span>
                <span className="text-[#005C8A] dark:text-cyan-300 select-all font-medium">{current.text}</span>
              </>
            )}
          </div>

          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy command"
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all shrink-0 border ${
              copied
                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white border-neutral-300 dark:border-neutral-700'
            }`}
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
