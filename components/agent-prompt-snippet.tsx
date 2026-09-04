'use client';

import { useState } from 'react';

export function AgentPromptSnippet() {
  const [copied, setCopied] = useState(false);
  const promptText =
    'Integrate aba-payway-sdk-unofficial into this project by following the instructions here: https://raw.githubusercontent.com/rithsila/aba-payway-unofficial/main/docs/agent-guide.md';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto 24px auto',
        backgroundColor: 'var(--color-fd-card, rgba(15, 23, 42, 0.75))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--color-fd-border, rgba(255, 255, 255, 0.12))',
        borderRadius: '14px',
        padding: '16px 20px',
        textAlign: 'left',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: 'var(--color-fd-muted-foreground, rgba(255, 255, 255, 0.6))',
          marginBottom: '8px',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          AI AGENT PROMPT (CURSOR / CLAUDE / COPILOT)
        </span>
        <span style={{ fontSize: '11px', opacity: 0.8 }}>One-shot full integration</span>
      </div>
      <p
        style={{
          fontSize: '12px',
          color: 'var(--color-fd-muted-foreground, #94a3b8)',
          margin: '0 0 10px 0',
          lineHeight: 1.4,
        }}
      >
        Paste this prompt into your AI coding assistant. The agent guide handles framework stack detection, card checkout with paymentGate, webhook signatures, and status checking.
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0.2)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid var(--color-fd-border, rgba(255, 255, 255, 0.08))',
        }}
      >
        <code
          style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            color: '#38bdf8',
            userSelect: 'all',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {promptText}
        </code>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy AI agent instruction prompt"
          style={{
            background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.08)',
            border: copied ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid var(--color-fd-border, rgba(255, 255, 255, 0.15))',
            color: copied ? '#4ade80' : 'var(--color-fd-foreground, #ffffff)',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
