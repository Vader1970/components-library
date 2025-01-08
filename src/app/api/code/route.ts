import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const fileName = url.searchParams.get("fileName");

  if (!fileName) {
    return NextResponse.json({ error: "File name is required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src/components", `${fileName}.tsx`);

  try {
    const code = fs.readFileSync(filePath, "utf-8");
    return new Response(code, { status: 200 });
  } catch {
    // Directly returning the error response without using the `error` variable
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
