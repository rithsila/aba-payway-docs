'use client';

import { useEffect } from 'react';

function fallbackWriteText(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const success = document.execCommand('copy');
      success ? resolve() : reject(new Error('execCommand("copy") failed'));
    } catch (err) {
      reject(err as Error);
    } finally {
      document.body.removeChild(textarea);
    }
  });
}

/**
 * navigator.clipboard only exists in secure contexts (https, or localhost in
 * evergreen browsers) — Fumadocs' code block copy button calls
 * navigator.clipboard.writeText directly with no guard, so anywhere outside
 * that (an embedded preview webview, a LAN IP, plain http) throws "Cannot
 * read properties of undefined (reading 'writeText')" instead of copying.
 * This fills in a working fallback so the button still works there.
 */
export function ClipboardPolyfill() {
  useEffect(() => {
    if (typeof navigator === 'undefined' || navigator.clipboard) return;
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: fallbackWriteText },
      configurable: true,
    });
  }, []);

  return null;
}
