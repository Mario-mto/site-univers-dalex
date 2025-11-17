
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex pt-24 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section id="home" className="min-h-screen pt-24">
          <h1>Accueil</h1>
        </section>

        <section id="menu" className="min-h-screen pt-24">
          <h1>Menu</h1>
        </section>

        <section id="about" className="min-h-screen pt-24">
          <h1>À propos</h1>
        </section>
      </main>
    </div>
  );
}
