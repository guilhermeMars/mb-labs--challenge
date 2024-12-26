import { NextResponse } from "next/server";
import { Payment } from "@/interface/paymentInterface";

const Persons: Payment[] = [];
export async function POST(request: Request) {
  try {
    const newPerson: Payment = await request.json();
    Persons.push(newPerson);

    return NextResponse.json(newPerson, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create event" },
      { status: 400 }
    );
  }
}
