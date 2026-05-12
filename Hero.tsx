import { Button } from './ui/Button';

export const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-violet-600/10 blur-[120px] -z-10" />
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
        POWERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">LEGENDS.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-zinc-400 text-xl mb-10">
        High-performance Minecraft hosting on Ryzen 9 7950X hardware. 
        Instant setup. Global locations. No lag.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button>Launch Server</Button>
        <Button variant="secondary">View Locations</Button>
      </div>
    </div>
  </section>
);