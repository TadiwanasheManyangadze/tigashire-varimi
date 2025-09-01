import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

router.post('/create-session', async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { items } = req.body; // [{title, price, quantity}]
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map(i => ({
        price_data: {
          currency: 'usd',
          product_data: { name: i.title },
          unit_amount: Math.round(i.price * 100),
        },
        quantity: i.quantity || 1
      })),
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`
    });
    res.json({ id: session.id, url: session.url });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Stripe error', error: e.message });
  }
});

export default router;
