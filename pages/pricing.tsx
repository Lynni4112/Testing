import Navbar from '../components/Navbar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

const PLANS = [
  { name: 'Starter', ram: '2GB', cpu: '1 Core', price: '5.00', id: 'price_starter' },
  { name: 'Pro', ram: '8GB', cpu: '2 Cores', price: '20.00', id: 'price_pro', active: true },
  { name: 'Enterprise', ram: '16GB', cpu: '4 Cores', price: '40.00', id: 'price_ent' },
];

export default function Pricing() {
  const handleCheckout = async (priceId: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ priceId }),
      headers: { 'Content-Type': 'application/json' }
    });
    const { url } = await res.json();
    window.location.href = url; // Redirect to Stripe
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-center mb-12">Scalable Performance Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <Card key={plan.id} active={plan.active}>
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-black mb-6">${plan.price}<span className="text-sm text-zinc-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-zinc-400">
                <li className="flex gap-2"><Check className="text-violet-500" size={18}/> {plan.ram} NVMe RAM</li>
                <li className="flex gap-2"><Check className="text-violet-500" size={18}/> {plan.cpu} Ryzen 9</li>
                <li className="flex gap-2"><Check className="text-violet-500" size={18}/> Dedicated IP Available</li>
              </ul>
              <Button 
                className="w-full" 
                variant={plan.active ? 'primary' : 'secondary'}
                onClick={() => handleCheckout(plan.id)}
              >
                Buy Now
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
