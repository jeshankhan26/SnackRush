import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ProductDetailsPage({ params }) {
  const p = await params;
  const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
  const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });

  return (
    <div className="py-16 bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 duration-300">
          
          {/* Product Image */}
          <div className="md:w-1/2 w-full relative h-96 md:h-auto">
            <Image
              src={data.image}
              alt={data.title}
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#6e0d25]">
              {data.title}
            </h1>
            <p className="text-lg text-gray-500 uppercase tracking-wide font-semibold">
              Category: {data.category}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">{data.description}</p>
            <p className="text-2xl md:text-3xl font-bold text-[#6e0d25] mt-4">
              Price: ${data.price}
            </p>

            <button className="mt-6 bg-[#6e0d25] hover:bg-[#7f1a34] text-white font-semibold py-3 px-6 rounded-xl w-full md:w-auto transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
