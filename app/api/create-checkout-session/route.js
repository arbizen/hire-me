import { Stripe } from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// generate the checkout session
export async function POST(req) {
  const data = await req.json();
  const budget = data?.budget || 50;
  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.HOST}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST}/cancel`,
    mode: "payment",
    line_items: [
      {
        price_data: {
          unit_amount: 100 * budget,
          currency: "usd",
          product_data: {
            name: "Hire Arb Rahim Badsa",
            images: ["https://avatars.githubusercontent.com/u/34975329?v=4"],
          },
        },
        quantity: 1,
      },
    ],
  });
  return NextResponse.json({ url: session?.url, session });
}
