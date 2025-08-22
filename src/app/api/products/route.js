import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, slug, price, category, image, description, ingredients, spicyLevel } = body;

    if (!title || !price || !category) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
    const result = await productsCollection.insertOne({
      title,
      slug,
      price: Number(price),
      category,
      image,
      description,
      ingredients,
      spicyLevel,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added successfully", productId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
