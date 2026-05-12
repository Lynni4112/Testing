export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const base = "px-6 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2";
  const variants: any = {
    primary: "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800"
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};