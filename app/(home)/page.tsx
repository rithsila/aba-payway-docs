import Link from 'next/link';
import { InstallSnippet } from '@/components/install-snippet';
import { InteractivePreview } from '@/components/interactive-preview';

function TelegramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-[90dvh] flex flex-col items-center justify-start text-center px-4 pt-10 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 dark:opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 92, 138, 0.3) 0%, rgba(0, 178, 227, 0.1) 50%, transparent 80%)',
          }}
        />
      </div>

      <main className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* ======================= HERO SECTION ======================= */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto pt-2">
          {/* Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              <span>Unofficial Community SDK</span>
              <span className="text-neutral-300 dark:text-neutral-600">|</span>
              <span className="text-emerald-600 dark:text-emerald-400">⚡ Edge Ready</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4">
            ABA PayWay TypeScript SDK
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
            The lightweight, edge-ready TypeScript SDK to integrate ABA PayWay, create instant <strong className="text-neutral-900 dark:text-white">KHQR</strong> codes, check transactions, and verify webhooks in Cambodia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#005C8A] hover:bg-[#007BB8] text-white text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Read Documentation</span>
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="https://github.com/rithsila/aba-payway-unofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository (opens in a new tab)"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium transition-all active:scale-95 shadow-sm dark:shadow-none"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://sandbox.payway.com.kh/register-sandbox/"
              target="_blank"
              rel="noreferrer"
              aria-label="ABA Sandbox Portal (opens in a new tab)"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/40 hover:bg-neutral-200 dark:hover:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-all"
            >
              <span>Sandbox Portal ↗</span>
            </a>
          </div>

          {/* Quick Install Snippet */}
          <InstallSnippet />
        </section>

        {/* ======================= CODE & LIVE DEMO PREVIEW ======================= */}
        <section className="w-full">
          <InteractivePreview />
        </section>

        {/* ======================= FEATURES GRID ======================= */}
        <section className="w-full my-12 text-left">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Built for Speed, Types & Security
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Everything you need to accept payments with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl" aria-hidden="true">🇰🇭</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Universal KHQR & Deeplinks</h3>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                Generates standard EMVCo compliant KHQR payload strings, pre-rendered QR image URLs, and 1-tap mobile deeplinks for ABA Mobile. Supports USD and Khmer Riel.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#005C8A] dark:text-cyan-300">
                <span className="bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800">qrImage</span>
                <span className="bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800">abapayDeeplink</span>
                <span className="bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800">qrString</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl" aria-hidden="true">⚡</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Zero Dependencies & Edge Ready</h3>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                Built on standard Web Crypto (<code className="text-[#005C8A] dark:text-cyan-300 font-mono">crypto.subtle</code>) and native <code className="text-[#005C8A] dark:text-cyan-300 font-mono">fetch</code>. Works on Next.js, Node.js, Bun, Deno, and Cloudflare Workers.
              </p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                ✓ Bundle size: &lt; 4 kB minified
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl" aria-hidden="true">🛡️</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Automatic HMAC-SHA512 Security</h3>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                Eliminates hash sorting errors. The SDK automatically arranges parameters and computes ABA PayWay cryptographic signatures.
              </p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                ✓ Constant-time safe compare for webhooks
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl" aria-hidden="true">💎</span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Strict TypeScript Safety</h3>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                Every request and response is strictly typed. Catch bugs at compile time and enjoy full IDE autocompletion with helper functions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                <span className="bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-emerald-600 dark:text-emerald-400 font-semibold">PurchaseResult</span>
                <span className="bg-neutral-100 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-emerald-600 dark:text-emerald-400 font-semibold">TransactionStatus</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= COMMUNITY ======================= */}
        <section className="w-full my-8 text-left">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Community & Support
            </h2>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Connect with fellow developers building with ABA PayWay in Cambodia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://t.me/abapaywayunofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="Join our Telegram Announcements Channel (opens in a new tab)"
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-center justify-between shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#229ED9]/15 text-[#229ED9] border border-[#229ED9]/30 flex items-center justify-center">
                  <TelegramIcon />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">Telegram Channel</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">@abapaywayunofficial — Announcements</div>
                </div>
              </div>
              <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">→</span>
            </a>

            <a
              href="https://t.me/abaunofficialintegrate"
              target="_blank"
              rel="noreferrer"
              aria-label="Join our Telegram Developer Support Group (opens in a new tab)"
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-center justify-between shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#229ED9]/15 text-[#229ED9] border border-[#229ED9]/30 flex items-center justify-center">
                  <TelegramIcon />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">Telegram Group</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">@abaunofficialintegrate — Q&A & Support</div>
                </div>
              </div>
              <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ======================= FOOTER ======================= */}
        <footer className="w-full pt-10 pb-4 border-t border-neutral-200 dark:border-neutral-800/80 text-center text-xs text-neutral-500 dark:text-neutral-400">
          <div className="max-w-2xl mx-auto space-y-2">
            <p>Open source under MIT License. Created by the developer community.</p>
            <p className="text-neutral-500 text-xs">
              Disclaimer: This is an unofficial community project and is not affiliated with, endorsed by, or sponsored by ABA Bank (Advanced Bank of Asia Ltd).
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
