import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ProductDetailsPage({params}) {
    const p = await params;
    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
    const data = await productsCollection.findOne({_id: new ObjectId(p.id)});
  return (
    <div className='py-10 max-w-7xl mx-auto px-6 md:px-12 '>
      <div  className="card bg-white shadow-xl flex flex-col md:flex-row items-center ">
                    <figure className="">
                      <Image
                        src={data.image}
                        alt={data.title}
                        width={400}
                        height={400}
                       
                      />
                    </figure>
                    <div className="card-body  ">
                      <h3 className="card-title font-bold text-3xl">{data.title}</h3>
                      <p className="text-lg text-gray-600">Category: {data.category}</p>
                      <p className="text-lg text-gray-600">{data.description}</p>
                      <p className='text-lg text-[#6e0d25] font-semibold'>Price: {data.price}</p>
                    </div>
                    
                  </div>
    </div>
  )
}
