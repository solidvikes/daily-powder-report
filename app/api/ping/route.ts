import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, when: new Date().toISOString() });
}
