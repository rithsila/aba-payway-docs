import Link from 'next/link';
import { InstallSnippet } from '@/components/install-snippet';

function AmbientFintechBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Top Ambient Cambodian Royal Blue & Crimson Glow */}
      <div
        className="glow-pulse-anim"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(3, 46, 161, 0.25) 0%, rgba(224, 0, 37, 0.15) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, var(--color-fd-border) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-fd-border) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          opacity: 0.35,
          maskImage: 'radial-gradient(circle at center 30%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center 30%, black 20%, transparent 75%)',
        }}
      />
    </div>
  );
}

function AbaPaywayLogo() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        background: 'linear-gradient(135deg, #00365a 0%, #001f35 100%)',
        color: '#FFFFFF',
        padding: '7px 15px',
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0, 54, 90, 0.45)',
        border: '1px solid rgba(0, 178, 227, 0.45)',
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '0.02em',
      }}
    >
      <span style={{ color: '#00B2E3', fontWeight: 900, fontSize: '15px' }}>ABA</span>
      <span style={{ height: '14px', width: '1px', background: 'rgba(255,255,255,0.2)' }} />
      <span style={{ color: '#FFFFFF', fontWeight: 700 }}>PAYWAY</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px 80px',
      }}
    >
      <AmbientFintechBackground />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '920px', margin: '0 auto' }}>
        {/* Badges & Trust Logos Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}
        >
          <div className="badge-float">
            <AbaPaywayLogo />
          </div>

          {/* Unofficial Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#fbbf24',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            UNOFFICIAL COMMUNITY SDK
          </div>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(38px, 6vw, 64px)',
            fontWeight: 850,
            letterSpacing: '-0.035em',
            margin: '0 0 18px 0',
            lineHeight: 1.12,
            color: 'var(--color-fd-foreground)',
          }}
        >
          ABA PayWay TypeScript SDK
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2.2vw, 19px)',
            color: 'var(--color-fd-muted-foreground)',
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6,
          }}
        >
          Unofficial, edge-ready TypeScript SDK to accept payments, generate instant <strong style={{ color: 'var(--color-fd-foreground)' }}>KHQR</strong> codes, check transaction status, and verify webhooks for ABA Bank Cambodia.
        </p>

        {/* Call to Actions */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          <Link
            href="/docs"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '10px',
              backgroundColor: '#005C8A',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 92, 138, 0.35)',
            }}
          >
            Read Documentation
            <span>→</span>
          </Link>
          <a
            href="https://github.com/rithsila/aba-payway-unofficial"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{
              padding: '14px 26px',
              borderRadius: '10px',
              backgroundColor: 'var(--color-fd-card)',
              color: 'var(--color-fd-foreground)',
              border: '1px solid var(--color-fd-border)',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </div>

        {/* Interactive Terminal Install Box */}
        <InstallSnippet />

        {/* Disclaimer Note */}
        <div
          style={{
            marginTop: '20px',
            fontSize: '12px',
            color: 'var(--color-fd-muted-foreground)',
            opacity: 0.8,
          }}
        >
          Disclaimer: This is an unofficial, open-source SDK created by the developer community and is not affiliated with ABA Bank.
        </div>
      </div>
    </div>
  );
}
