import { Stripe } from "stripe";
import { NextResponse } from "next/server";
import { stripeInfo } from "@/utils/stripe";
import { stripe } from "@/lib/stripe";

// generate the checkout session
export async function POST(req) {
  const data = await req.json();
  const budget = data?.budget || 50;
  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.HOST}${
      stripeInfo.successRoute
    }?session_id={CHECKOUT_SESSION_ID}&email=${
      data?.email
    }&description=${encodeURIComponent(data?.description)}`,
    cancel_url: `${process.env.HOST}${stripeInfo.cancelRoute}`,
    mode: "payment",
    line_items: [
      {
        price_data: {
          unit_amount: 100 * budget,
          currency: "usd",
          product_data: {
            name: `Hire ${stripeInfo.freelancerName}`,
            images: [stripeInfo.freelancerImage],
          },
        },
        quantity: 1,
      },
    ],
  });
  return NextResponse.json({ url: session?.url, session });
}
