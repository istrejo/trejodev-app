import Link from 'next/link';

export default function RootLandingPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-bone px-5 py-16 text-ink">
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <section className="motion-section max-w-xl rounded-[2rem] border border-line bg-paper p-8 text-center shadow-soft">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate">TrejoDev</p>
        <h1 className="mt-5 font-display text-4xl font-black tracking-[-0.06em] sm:text-5xl">Redirecting to English</h1>
        <p className="mt-5 text-base leading-7 text-slate">If the redirect does not start automatically, choose a language below.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-ember hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember" href="/en/">
            Continue in English
          </Link>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember" href="/es/">
            Continuar en español
          </Link>
        </div>
      </section>
    </main>
  );
}
