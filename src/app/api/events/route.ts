import { NextResponse } from "next/server";
import eventData from "../../../../db.json";
import { Event } from "@/interface/eventInterface";

interface ErrorResponse {
  message: string;
}

const events: Event[] = eventData.events;
export async function GET() {
  return new Response(JSON.stringify(events), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  // Adiciona um novo evento
  const newEvent = await request.json();
  events.push(newEvent);
  return new Response(JSON.stringify(newEvent), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
