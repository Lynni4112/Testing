export const Card = ({ children, active = false }: any) => (
  <div className={`p-8 rounded-3xl border transition-all duration-300 ${
    active ? 'border-violet-500 bg-violet-500/5 shadow-[0_0_40px_rgba(139,92,246,0.1)]' : 'border-zinc-800 bg-zinc-900/30'
  }`}>
    {children}
  </div>
);