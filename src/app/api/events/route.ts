import { NextResponse } from "next/server";
import eventData from "../../../../db.json";
import { Event } from "@/interface/eventInterface";

const events: Event[] = eventData.events;
export async function GET() {
  return new Response(JSON.stringify(events), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  try {
    const newEvent: Event = await request.json();
    events.push(newEvent);

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create event" },
      { status: 400 }
    );
  }
}
