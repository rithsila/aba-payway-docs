'use client';

import { useState } from 'react';

type StepTab = 'purchase' | 'status' | 'webhook';

const CODE_EXAMPLES: Record<StepTab, { title: string; filename: string; code: string }> = {
  purchase: {
    title: '1. Create Purchase & KHQR',
    filename: 'purchase.ts',
    code: `import { ABAPayWay, generateTransactionId } from "aba-payway-sdk-unofficial";

const aba = new ABAPayWay({
  merchantId: process.env.ABA_MERCHANT_ID!,
  apiKey: process.env.ABA_API_KEY!,
});

const purchase = await aba.createPurchase({
  transactionId: generateTransactionId(),
  amount: 10.0,
  currency: "USD",
  items: "Pro Plan",
  returnUrl: "https://mysite.com/success",
});

// Output instant KHQR & Mobile App Deeplink
console.log(purchase.qrImage);        // QR image URL
console.log(purchase.abapayDeeplink); // ABA Mobile link`,
  },
  status: {
    title: '2. Check Transaction',
    filename: 'check-status.ts',
    code: `// Query ABA to verify if the customer has paid
const status = await aba.checkTransaction({
  transactionId: "TXN-9842189",
});

if (status.status === 0) {
  console.log("Payment successful!", status.totalAmount);
} else {
  console.log("Status:", status.description);
}`,
  },
  webhook: {
    title: '3. Verify Webhook Alert',
    filename: 'api/webhook/route.ts',
    code: `// Secure instant callback from ABA PayWay
export async function POST(req: Request) {
  const body = await req.json();

  // Validate cryptographic signature safely
  const isValid = aba.verifyWebhook(body);
  if (!isValid) {
    return new Response("Invalid signature", { status: 400 });
  }

  // Fulfill customer order
  return Response.json({ status: "ok" });
}`,
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
    <div className="w-full max-w-5xl mx-auto my-12 text-left">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
          How It Works
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl mx-auto">
          Complete end-to-end integration in three intuitive steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Code Window with Tabs (7 cols) */}
        <div className="lg:col-span-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#070e17] shadow-xl overflow-hidden">
          {/* Code Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#03070d] border-b border-neutral-800">
            {/* Step Tabs */}
            <div className="flex items-center gap-1.5">
              {(Object.keys(CODE_EXAMPLES) as StepTab[]).map((t) => {
                const isSelected = tab === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      isSelected
                        ? 'bg-[#005C8A] text-white font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {CODE_EXAMPLES[t].title}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              {activeExample.filename}
            </span>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 overflow-x-auto bg-[#040810]/95">
            <pre className="font-mono text-xs text-neutral-300 leading-relaxed">
              <code>{activeExample.code}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: Live KHQR Result Preview (5 cols) */}
        <div className="lg:col-span-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 p-5 shadow-lg dark:shadow-xl flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 mb-4">
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider">
                Live Result Preview
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                Live Demo
              </span>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 mb-4">
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
                  className={`px-2.5 py-1 text-xs font-bold rounded ${
                    currency === 'USD' ? 'bg-[#005C8A] text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('KHR')}
                  className={`px-2.5 py-1 text-xs font-bold rounded ${
                    currency === 'KHR' ? 'bg-[#E00025] text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  KHR (៛)
                </button>
              </div>
            </div>

            {/* Simulated KHQR Card */}
            <div className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 p-4 text-center">
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="inline-flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
                  <span className="text-[#005C8A] dark:text-[#00B2E3]">ABA</span>
                  <span className="text-neutral-400 dark:text-neutral-500">|</span>
                  <span>PAYWAY</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-300 font-bold text-xs">
                  KHQR
                </span>
              </div>

              {/* QR Image Simulation */}
              <div className="w-36 h-36 mx-auto my-3 bg-white p-2 rounded-lg flex items-center justify-center border border-neutral-200 shadow-inner">
                {/* SVG QR Code Illustration */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current" aria-hidden="true">
                  <path d="M0 0h30v30H0zm6 6h18v18H6zm4 4h10v10H10zM70 0h30v30H70zm6 6h18v18H76zm4 4h10v10H80zM0 70h30v30H0zm6 6h18v18H6zm4 4h10v10H10zM40 10h10v10H40zm10 20h10v10H50zm-10 10h10v10H40zm20 0h10v10H60zm10 10h10v10H70zm10 10h10v10H80zm-40 20h10v10H40zm10 10h10v10H50zm10-10h10v10H60zm20 10h10v10H80z" />
                </svg>
              </div>

              <div className="font-bold text-neutral-900 dark:text-white text-lg tabular-nums">
                {priceDisplay}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                TXN-9842189 · Merchant Verified
              </div>
            </div>
          </div>

          {/* Deep Link Action */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full mt-4 py-2 px-3 rounded-lg text-xs font-semibold bg-[#005C8A] hover:bg-[#007BB8] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{copiedLink ? '✓ Copied Deeplink' : 'Open in ABA Mobile App →'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
