import Head from 'next/head';
import SEO from '../components/SEO';

export default () => (
  <>
    <SEO title="next.js + tailwindcss" />
    <main className="max-w-6xl px-4 mx-auto min-h-screen flex items-center justify-center">
      <h1 className="text-center text-2xl sm:text-3xl md:text-6xl">Next.js + tailwindcss 😍</h1>
    </main>
  </>
);
