import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    const format = req.nextUrl.searchParams.get("format");
    const body = await req.json();
    const { html } = body as { html: string };

    if (!html || (format !== "pdf" && format !== "word")) {
      return NextResponse.json(
        { error: "Invalid format or missing HTML content" },
        { status: 400 },
      );
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });

    let fileBuffer: Buffer;

    if (format === "pdf") {
      fileBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      await browser.close();

      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename=document.pdf`,
        },
      });
    } else {
      fileBuffer = Buffer.from(
        `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${html}</body></html>`,
      );

      await browser.close();

      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/msword",
          "Content-Disposition": `attachment; filename=document.doc`,
        },
      });
    }
  } catch (error) {
    console.error("Error generating document:", error);
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 },
    );
  }
}
