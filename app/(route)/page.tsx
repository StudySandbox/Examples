import { MainComponent } from "./_components";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <main className="max-h-screen snap-y snap-mandatory overflow-y-scroll bg-slate-100">
        <section className="min-h-screen snap-center bg-rose-400">
          Hero Screen
        </section>
        <section className="min-h-screen snap-center bg-orange-400">
          Second Screen
        </section>
        <section className="min-h-screen snap-center bg-amber-400">
          Third Screen
        </section>
        <section className="min-h-screen snap-center bg-green-400">
          Fourth Screen
        </section>
        <section className="min-h-screen snap-center bg-blue-400">
          Last Screen
          <MainComponent />
        </section>
      </main>
    </div>
  );
}
