import { NextResponse } from "next/server";
import { Person } from "@/interface/personInterface";

const Persons: Person[] = [];
export async function POST(request: Request) {
  try {
    const newPerson: Person = await request.json();
    Persons.push(newPerson);

    return NextResponse.json(newPerson, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create event" },
      { status: 400 }
    );
  }
}
