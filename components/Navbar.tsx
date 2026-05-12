import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Server, LayoutDashboard, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-zinc-950/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <Server size={22} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">APEX<span className="text-violet-500">NODE</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Nodes', 'Pricing', 'Hardware', 'DDoS Protection'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-bold text-zinc-400 hover:text-white mr-4 transition">
            Login
          </button>
          <Button variant="primary" className="py-2 px-5 text-sm">
            <LayoutDashboard size={16} />
            Dashboard
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top">
          <a href="#pricing" className="text-lg font-bold">Pricing</a>
          <a href="#nodes" className="text-lg font-bold">Nodes</a>
          <Button className="w-full">Login to Panel</Button>
        </div>
      )}
    </nav>
  );
}
