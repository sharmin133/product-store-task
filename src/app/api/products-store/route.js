import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json(); // get form data
    const collection = dbConnect("products-store"); // your collection
    const result = await collection.insertOne(data); // insert into MongoDB

    return NextResponse.json({
      message: "Product added successfully",
      id: result.insertedId,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
