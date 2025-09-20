import Head from 'next/head';
import Header from '../compnents/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Interest UI</title>
        <meta name="description" content="A Next.js frontend project" />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to Interest UI</h2>
        <p>This is a simple Next.js frontend setup.</p>
      </main>
    </>
  );
}
