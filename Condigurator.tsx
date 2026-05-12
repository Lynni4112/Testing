import React, { useState } from 'react';
import { Button } from './ui/Button';

export const Configurator = () => {
  const [ram, setRam] = useState(4);
  const price = (ram * 2.50).toFixed(2);

  return (
    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-6">Custom Server Configurator</h3>
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <span className="text-zinc-400">Memory (RAM)</span>
            <span className="font-bold text-violet-400">{ram} GB</span>
          </div>
          <input 
            type="range" min="2" max="32" step="2" value={ram}
            onChange={(e) => setRam(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-600"
          />
        </div>
        <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
          <div>
            <p className="text-sm text-zinc-500">Monthly Total</p>
            <p className="text-3xl font-black">${price}</p>
          </div>
          <Button>Deploy Now</Button>
        </div>
      </div>
    </div>
  );
};