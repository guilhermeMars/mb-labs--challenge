import { NextResponse } from "next/server";
import eventData from "../../../../../db.json";
import { Event } from "@/interface/eventInterface";

const events: Event[] = eventData.events;
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const event = events.find((event) => event._id === id);
  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }
  return NextResponse.json(event);
}
