import { NextApiRequest, NextApiResponse } from 'next';
import { deployServer } from '../../lib/pterodactyl';

// Stripe Webhook Secret for security
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers['stripe-signature'];

  // Logic to verify Stripe event signature here...

  if (req.body.type === 'checkout.session.completed') {
    const session = req.body.data.object;
    
    // Define resources based on the price ID from Stripe
    const planConfig = {
      ram: session.amount_total > 2000 ? 8192 : 2048, // Logic: if > $20, give 8GB
      cpu: 200
    };

    try {
      // Trigger the actual deployment in Pterodactyl
      await deployServer(session.metadata.userId, planConfig);
      return res.status(200).json({ provisioned: true });
    } catch (error) {
      console.error('Pterodactyl Provisioning Error:', error);
      return res.status(500).json({ error: 'Failed to create server' });
    }
  }

  res.status(200).json({ received: true });
}
