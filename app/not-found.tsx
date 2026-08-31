import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>404 - Page Not Found</h1>
      <p style={{ color: 'var(--color-fd-muted-foreground)', marginBottom: '24px' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          borderRadius: '8px',
          backgroundColor: '#005C8A',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
