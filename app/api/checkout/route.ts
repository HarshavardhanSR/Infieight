import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { amount, currency = "INR", receipt = "infieight-order" } = await request.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          status: "demo",
          message: "Razorpay keys are not configured. Demo mode checkout is active for local testing.",
          order: {
            id: `demo_${Date.now()}`,
            amount: Number(amount || 3999) * 100,
            currency,
            receipt,
          },
          key: "rzp_test_demo",
        },
        { status: 200 },
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Number(amount || 3999) * 100,
      currency,
      receipt,
      notes: {
        source: "infieight",
      },
    });

    return NextResponse.json({
      status: "success",
      order,
      key: keyId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unable to create Razorpay order.",
      },
      { status: 500 },
    );
  }
}
