import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const sessionId = body?.sessionId;
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session) {
        const budget = session.amount_total / 100;
        const customerName = session.customer_details?.name;
        const customerEmail = session.customer_details?.email;
        return NextResponse.json({
          message: "success",
          data: { budget, customerEmail, customerName },
        });
      } else {
        return NextResponse.json({
          error: "Session id is not valid.",
        });
      }
    } else {
      return NextResponse.json({
        error: "Please provide a session id.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
