import { DataAPIClient } from "@datastax/astra-db-ts";
import { NextResponse, NextRequest } from "next/server";

const client = new DataAPIClient(process.env.ASTRA_TOKEN as string);
const db = client.db(
  "https://3e6c9d28-42cb-4d69-9343-c57c11304338-us-east-2.apps.astra.datastax.com"
);

export async function GET(req: NextRequest) {
  const colls = await db.listCollections();
  console.log("Connected to AstraDB:", colls);

  return NextResponse.json({ success: true });
}
