import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    updated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    resorts: [
      { resort: "Jackson Hole", state: "WY", new24: 12, base: 74, lifts: "11/13", updated: "7:05 AM" },
      { resort: "Snowbird", state: "UT", new24: 10, base: 70, lifts: "8/10", updated: "7:00 AM" },
      { resort: "Alta", state: "UT", new24: 9, base: 68, lifts: "7/9", updated: "6:58 AM" },
      { resort: "Steamboat", state: "CO", new24: 8, base: 66, lifts: "12/14", updated: "7:12 AM" },
      { resort: "Mammoth", state: "CA", new24: 7, base: 62, lifts: "15/18", updated: "6:54 AM" }
    ],
  });
}
