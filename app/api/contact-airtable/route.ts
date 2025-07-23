import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN!;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          "Name": name,
          "Email": email,
          "Phone Number": phone,
          "Service Interested In": service,
          "Message": message,
          "Status": "New"
        }
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Log the error details to the terminal
      console.error("Airtable error:", data);
      return NextResponse.json({ error: "Failed to save to Airtable", details: data }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    // Log unexpected errors
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
} 