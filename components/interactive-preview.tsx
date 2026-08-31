'use client';

import { useState, type ReactNode } from 'react';

type StepTab = 'purchase' | 'status' | 'webhook';

interface ExampleConfig {
  title: string;
  filename: string;
  renderCode: () => ReactNode;
}

const CODE_EXAMPLES: Record<StepTab, ExampleConfig> = {
  purchase: {
    title: '1. Create Purchase & KHQR',
    filename: 'purchase.ts',
    renderCode: () => (
      <>
        <div>
          <span className="text-[#ff7b72]">import</span> &#123;{' '}
          <span className="text-[#ffa657]">ABAPayWay</span>,{' '}
          <span className="text-[#d2a8ff]">generateTransactionId</span> &#125;{' '}
          <span className="text-[#ff7b72]">from</span>{' '}
          <span className="text-[#7ee787]">&quot;aba-payway-sdk-unofficial&quot;</span>;
        </div>
        <div className="h-3" />
        <div>
          <span className="text-[#ff7b72]">const</span> aba ={' '}
          <span className="text-[#ff7b72]">new</span>{' '}
          <span className="text-[#ffa657]">ABAPayWay</span>(&#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">merchantId</span>:{' '}
          <span className="text-[#c9d1d9]">process</span>.
          <span className="text-[#79c0ff]">env</span>.
          <span className="text-[#79c0ff]">ABA_MERCHANT_ID</span>
          <span className="text-[#ff7b72]">!</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">apiKey</span>:{' '}
          <span className="text-[#c9d1d9]">process</span>.
          <span className="text-[#79c0ff]">env</span>.
          <span className="text-[#79c0ff]">ABA_API_KEY</span>
          <span className="text-[#ff7b72]">!</span>,
        </div>
        <div>&#125;);</div>
        <div className="h-3" />
        <div>
          <span className="text-[#ff7b72]">const</span> purchase ={' '}
          <span className="text-[#ff7b72]">await</span> aba.
          <span className="text-[#d2a8ff]">createPurchase</span>(&#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">transactionId</span>:{' '}
          <span className="text-[#d2a8ff]">generateTransactionId</span>(),
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">amount</span>:{' '}
          <span className="text-[#79c0ff]">10.0</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">currency</span>:{' '}
          <span className="text-[#7ee787]">&quot;USD&quot;</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">items</span>:{' '}
          <span className="text-[#7ee787]">&quot;Pro Plan&quot;</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">returnUrl</span>:{' '}
          <span className="text-[#7ee787]">&quot;https://mysite.com/success&quot;</span>,
        </div>
        <div>&#125;);</div>
        <div className="h-3" />
        <div className="text-[#8b949e] italic">
          // Output instant KHQR &amp; Mobile App Deeplink
        </div>
        <div>
          <span className="text-[#c9d1d9]">console</span>.
          <span className="text-[#d2a8ff]">log</span>(purchase.
          <span className="text-[#79c0ff]">qrImage</span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-[#8b949e] italic">// QR image URL</span>
        </div>
        <div>
          <span className="text-[#c9d1d9]">console</span>.
          <span className="text-[#d2a8ff]">log</span>(purchase.
          <span className="text-[#79c0ff]">abapayDeeplink</span>);{' '}
          <span className="text-[#8b949e] italic">// ABA Mobile link</span>
        </div>
      </>
    ),
  },
  status: {
    title: '2. Check Transaction',
    filename: 'check-status.ts',
    renderCode: () => (
      <>
        <div className="text-[#8b949e] italic">
          // Query ABA to verify if the customer has paid
        </div>
        <div>
          <span className="text-[#ff7b72]">const</span> status ={' '}
          <span className="text-[#ff7b72]">await</span> aba.
          <span className="text-[#d2a8ff]">checkTransaction</span>(&#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#79c0ff]">transactionId</span>:{' '}
          <span className="text-[#7ee787]">&quot;TXN-9842189&quot;</span>,
        </div>
        <div>&#125;);</div>
        <div className="h-3" />
        <div>
          <span className="text-[#ff7b72]">if</span> (status.
          <span className="text-[#79c0ff]">status</span> ==={' '}
          <span className="text-[#79c0ff]">0</span>) &#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#c9d1d9]">console</span>.
          <span className="text-[#d2a8ff]">log</span>(
          <span className="text-[#7ee787]">&quot;Payment successful!&quot;</span>, status.
          <span className="text-[#79c0ff]">totalAmount</span>);
        </div>
        <div>
          &#125; <span className="text-[#ff7b72]">else</span> &#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#c9d1d9]">console</span>.
          <span className="text-[#d2a8ff]">log</span>(
          <span className="text-[#7ee787]">&quot;Status:&quot;</span>, status.
          <span className="text-[#79c0ff]">description</span>);
        </div>
        <div>&#125;</div>
      </>
    ),
  },
  webhook: {
    title: '3. Verify Webhook Alert',
    filename: 'api/webhook/route.ts',
    renderCode: () => (
      <>
        <div className="text-[#8b949e] italic">
          // Secure instant callback from ABA PayWay
        </div>
        <div>
          <span className="text-[#ff7b72]">export async function</span>{' '}
          <span className="text-[#d2a8ff]">POST</span>(req:{' '}
          <span className="text-[#ffa657]">Request</span>) &#123;
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> body ={' '}
          <span className="text-[#ff7b72]">await</span> req.
          <span className="text-[#d2a8ff]">json</span>();
        </div>
        <div className="h-3" />
        <div className="text-[#8b949e] italic">
          &nbsp;&nbsp;// Validate cryptographic signature safely
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> isValid = aba.
          <span className="text-[#d2a8ff]">verifyWebhook</span>(body);
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">if</span> (!isValid) &#123;
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return new</span>{' '}
          <span className="text-[#ffa657]">Response</span>(
          <span className="text-[#7ee787]">&quot;Invalid signature&quot;</span>, &#123;{' '}
          <span className="text-[#79c0ff]">status</span>:{' '}
          <span className="text-[#79c0ff]">400</span> &#125;);
        </div>
        <div>&nbsp;&nbsp;&#125;</div>
        <div className="h-3" />
        <div className="text-[#8b949e] italic">
          &nbsp;&nbsp;// Fulfill customer order
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">return</span>{' '}
          <span className="text-[#ffa657]">Response</span>.
          <span className="text-[#d2a8ff]">json</span>(&#123;{' '}
          <span className="text-[#79c0ff]">status</span>:{' '}
          <span className="text-[#7ee787]">&quot;ok&quot;</span> &#125;);
        </div>
        <div>&#125;</div>
      </>
    ),
  },
};

export function InteractivePreview() {
  const [tab, setTab] = useState<StepTab>('purchase');
  const [currency, setCurrency] = useState<'USD' | 'KHR'>('USD');
  const [amount, setAmount] = useState<string>('10.00');
  const [copiedLink, setCopiedLink] = useState(false);

  const activeExample = CODE_EXAMPLES[tab];
  const priceDisplay = currency === 'USD' ? `$${amount}` : `៛${(parseFloat(amount || '0') * 4000).toLocaleString()}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`abamobilebank://pay?tran_id=TXN-9842189&amount=${amount}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8 text-left">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
          How It Works
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl mx-auto">
          Complete end-to-end integration in three intuitive steps.
        </p>
      </div>

      <div className="interactive-preview-grid w-full">
        {/* Left Column: Code Window with Tabs */}
        <div className="interactive-preview-code rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#0d1117] shadow-xl overflow-hidden flex flex-col justify-between">
          {/* Code Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#161b22] border-b border-neutral-800">
            {/* Step Tabs */}
            <div className="flex items-center gap-1">
              {(Object.keys(CODE_EXAMPLES) as StepTab[]).map((t) => {
                const isSelected = tab === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      isSelected
                        ? 'bg-[#005C8A] text-white font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                    }`}
                  >
                    {CODE_EXAMPLES[t].title}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              {activeExample.filename}
            </span>
          </div>

          {/* Code Body with Syntax Colors */}
          <div className="p-4 sm:p-5 overflow-x-auto flex-1 bg-[#0d1117]">
            <pre className="font-mono text-xs text-neutral-200 leading-relaxed">
              <code>{activeExample.renderCode()}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: Live KHQR Result Preview (fixed 320px width) */}
        <div className="interactive-preview-card rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 p-4 shadow-lg dark:shadow-xl flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200 dark:border-neutral-800 mb-3">
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider">
                Live Result Preview
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo
              </span>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 mb-3">
              <label className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-20 px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded text-neutral-900 dark:text-white focus:outline-none focus:border-[#00B2E3]"
                min="1"
                step="1"
              />
              <div className="flex gap-1 ml-auto">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-0.5 text-xs font-bold rounded transition-colors ${
                    currency === 'USD'
                      ? 'bg-[#005C8A] text-white'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('KHR')}
                  className={`px-2 py-0.5 text-xs font-bold rounded transition-colors ${
                    currency === 'KHR'
                      ? 'bg-[#E00025] text-white'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  KHR (៛)
                </button>
              </div>
            </div>

            {/* Authentic KHQR Card */}
            <div className="flex justify-center my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 540"
                className="w-full max-w-[220px] sm:max-w-[240px] h-auto rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-white"
                role="img"
                aria-label="KHQR Payment Card Preview"
              >
                <defs>
                  <clipPath id="live-qr-clip">
                    <rect x="60" y="160" width="280" height="280" rx="8" />
                  </clipPath>
                </defs>
                <rect width="400" height="540" rx="16" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                <rect width="400" height="80" rx="16" fill="#bc271a" />
                <rect y="16" width="400" height="64" fill="#bc271a" />
                <polygon points="360,80 400,80 400,104" fill="#bc271a" />
                <text x="200" y="42" textAnchor="middle" fill="white" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="bold">Sample Store</text>
                <text x="200" y="65" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontFamily="system-ui,sans-serif" fontSize="13">KHQR Payment</text>
                <text x="200" y="108" textAnchor="middle" fill="#1a1a1a" fontFamily="system-ui,sans-serif" fontSize="28" fontWeight="bold">{priceDisplay}</text>
                <text x="200" y="128" textAnchor="middle" fill="#999" fontFamily="system-ui,sans-serif" fontSize="12" letterSpacing="2">SCAN • PAY • DONE</text>
                <g stroke="#c9c9c9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <polyline points="44,166 44,144 66,144" />
                  <polyline points="334,144 356,144 356,166" />
                  <polyline points="44,434 44,456 66,456" />
                  <polyline points="334,456 356,456 356,434" />
                </g>
                <g clipPath="url(#live-qr-clip)">
                  <g transform="translate(60,160)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 43 43" shapeRendering="crispEdges">
                      <path fill="#ffffff" d="M0 0h43v43H0z" />
                      <path stroke="#000000" d="M1 1.5h7m1 0h3m1 0h2m1 0h1m1 0h4m1 0h2m1 0h1m2 0h1m2 0h2m1 0h7M1 2.5h1m5 0h1m1 0h1m5 0h3m1 0h1m1 0h3m2 0h5m2 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m2 0h1m3 0h2m5 0h9m3 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m2 0h1m1 0h5m2 0h1m1 0h1m3 0h1m1 0h2m4 0h1m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h2m3 0h3m5 0h1m1 0h2m3 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m2 0h1m2 0h1m1 0h3m1 0h2m2 0h1m1 0h1m3 0h4m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 8.5h1m4 0h2m1 0h3m4 0h3m1 0h1m3 0h1M1 9.5h1m2 0h7m1 0h6m1 0h1m2 0h3m1 0h1m2 0h1m1 0h1m2 0h1m2 0h1m1 0h3M1 10.5h3m1 0h1m2 0h3m4 0h1m1 0h4m1 0h3m2 0h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1M1 11.5h2m4 0h1m1 0h2m1 0h1m1 0h3m1 0h5m1 0h2m1 0h2m2 0h3m5 0h2M4 12.5h3m2 0h2m2 0h2m1 0h1m2 0h1m1 0h1m2 0h3m4 0h1m3 0h2m3 0h2M1 13.5h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h2m1 0h1m5 0h2m1 0h5m1 0h4M1 14.5h1m1 0h1m1 0h1m2 0h1m2 0h1m3 0h3m1 0h2m4 0h3m1 0h2m1 0h4m2 0h1m2 0h1M4 15.5h8m3 0h1m1 0h3m3 0h1m2 0h1m2 0h4m2 0h1m1 0h2m1 0h2M9 16.5h2m1 0h2m3 0h1m2 0h1m4 0h2m1 0h1m1 0h1m3 0h4m1 0h1M2 17.5h1m1 0h1m2 0h1m4 0h3m1 0h1m2 0h3m1 0h3m1 0h1m3 0h1m1 0h2m3 0h2m1 0h1M4 18.5h1m3 0h1m2 0h2m1 0h2m1 0h1m1 0h1m4 0h3m1 0h4m2 0h4m3 0h1M1 19.5h3m3 0h2m4 0h5m2 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h3m1 0h4M1 20.5h1m1 0h2m3 0h2m2 0h3m2 0h5m1 0h3m1 0h2m3 0h2m6 0h1M2 21.5h3m1 0h2m1 0h1m1 0h3m1 0h1m5 0h4m1 0h3m2 0h1m1 0h1m3 0h2m1 0h2M2 22.5h1m2 0h2m1 0h2m1 0h1m1 0h1m2 0h4m4 0h1m2 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1M1 23.5h1m1 0h2m2 0h2m2 0h1m2 0h1m2 0h2m1 0h1m3 0h1m2 0h1m2 0h5m1 0h2m2 0h1M2 24.5h1m1 0h1m3 0h1m3 0h4m1 0h1m4 0h4m3 0h4m1 0h1m1 0h1m3 0h2M1 25.5h8m2 0h1m2 0h1m1 0h2m2 0h3m2 0h1m1 0h4m1 0h1m2 0h2m1 0h2m1 0h1M5 26.5h2m2 0h3m2 0h3m1 0h1m1 0h2m1 0h5m2 0h2m3 0h5M1 27.5h1m3 0h1m1 0h2m2 0h1m2 0h1m3 0h4m1 0h1m1 0h3m1 0h1m4 0h1m1 0h1m2 0h1m1 0h1M2 28.5h1m2 0h1m5 0h1m7 0h2m2 0h1m1 0h2m2 0h7m3 0h2M3 29.5h2m2 0h1m2 0h5m2 0h4m1 0h1m1 0h3m1 0h2m2 0h5m3 0h1M1 30.5h2m6 0h2m1 0h2m1 0h3m1 0h1m4 0h1m2 0h1m1 0h4m3 0h1m4 0h1M1 31.5h4m2 0h1m1 0h1m2 0h1m1 0h2m3 0h2m2 0h1m1 0h4m2 0h1m1 0h4m1 0h1m1 0h2M1 32.5h2m2 0h1m2 0h2m1 0h1m1 0h5m2 0h2m1 0h2m7 0h2m1 0h1m1 0h2m2 0h1M1 33.5h10m7 0h1m1 0h1m3 0h3m1 0h1m1 0h1m2 0h7m1 0h1M9 34.5h2m4 0h1m4 0h1m1 0h1m4 0h1m1 0h2m2 0h1m3 0h1M1 35.5h7m1 0h1m4 0h1m1 0h4m3 0h1m3 0h1m1 0h1m2 0h2m1 0h1m1 0h2m1 0h1M1 36.5h1m5 0h1m1 0h2m1 0h1m3 0h1m1 0h1m1 0h1m1 0h4m1 0h3m1 0h1m1 0h1m3 0h1M1 37.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h3m1 0h2m1 0h2m1 0h4m1 0h2m1 0h10M1 38.5h1m1 0h3m1 0h1m1 0h1m2 0h1m3 0h2m2 0h3m1 0h1m3 0h1m1 0h2m2 0h1m2 0h2M1 39.5h1m1 0h3m1 0h1m3 0h1m2 0h1m5 0h2m3 0h1m2 0h5m2 0h1m1 0h2m1 0h2M1 40.5h1m5 0h1m2 0h3m1 0h2m5 0h1m5 0h1m1 0h1m1 0h2m2 0h1m1 0h1m2 0h2M1 41.5h7m1 0h1m1 0h1m3 0h2m4 0h3m5 0h4m1 0h2m1 0h1m1 0h2" />
                    </svg>
                  </g>
                </g>
                <text x="200" y="480" textAnchor="middle" fill="#666" fontFamily="system-ui,sans-serif" fontSize="11">Scan with any KHQR-compatible app</text>
                <text x="200" y="501" textAnchor="middle" fill="#999" fontFamily="system-ui,sans-serif" fontSize="10">Powered by Bakong</text>
                <text x="200" y="521" textAnchor="middle" fill="#555" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="bold" letterSpacing="1">KHQR</text>
              </svg>
            </div>
          </div>

          {/* Deep Link Action */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full mt-3 py-2 px-3 rounded-lg text-xs font-semibold bg-[#005C8A] hover:bg-[#007BB8] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{copiedLink ? '✓ Copied Deeplink' : 'Open in ABA Mobile App →'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
