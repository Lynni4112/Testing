import { Hero } from '../components/Hero';
import { Configurator } from '../components/Configurator';
import { Card } from '../components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30">
      <Hero />
      
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">Flexible Scaling</h2>
        <Configurator />
      </section>

      <section className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card><h4 className="font-bold">Ryzen 9 7950X</h4><p className="text-zinc-400">Peak single-core performance for modpacks.</p></Card>
        <Card active><h4 className="font-bold">12Tbps DDoS Protection</h4><p className="text-zinc-400">Stay online during the heaviest attacks.</p></Card>
        <Card><h4 className="font-bold">NVMe Gen4 Storage</h4><p className="text-zinc-400">Lightning-fast world loading and saving.</p></Card>
      </section>
    </div>
  );
}
