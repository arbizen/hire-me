import { Stripe } from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// generate the checkout session
export async function POST(req) {
  const data = req.body;
  const budget = data?.budget || 50;
  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
    mode: "payment",
    line_items: [
      {
        price_data: {
          unit_amount: 100 * budget,
          currency: "usd",
          product_data: {
            name: "Hire Me",
          },
        },
        quantity: 1,
      },
    ],
  });
  return NextResponse.redirect(session?.url);
}
