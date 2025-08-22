import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function page() {
    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
      const products = await productsCollection.find({}).toArray();
  return (
   <section className="w-full bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] py-16 md:py-24 text-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
           
           {/* Section Title + Description */}
           <div className="text-center mb-14">
             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
               Handpicked meals just for you.
             </h2>
             <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
               Discover hand-picked dishes crafted to bring flavor, freshness, and delight to your dining experience.
             </p>
           </div>
   
           {/* Product Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
             {products?.slice(0, 6).map((product, index) => (
               <div
                 key={index}
                 className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl 
                 transform hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300"
               >
                 {/* Product Image */}
                 <figure className="overflow-hidden">
                   <Image
                     src={product.image}
                     alt={product.title}
                     width={400}
                     height={400}
                     className="w-full h-64 object-cover rounded-t-2xl hover:scale-110 transition-transform duration-500"
                   />
                 </figure>
   
                 {/* Card Body */}
                 <div className="p-6 space-y-3">
                   <h3 className="text-xl font-bold">{product.title}</h3>
                   <p className="text-sm text-gray-200 line-clamp-3">{product.description}</p>
                   <p className="text-lg font-semibold text-pink-400">
                     Price: ${product.price}
                   </p>
                 </div>
               </div>
             ))}
           </div>
   
           {/* See More Button */}
           <Link href="/products">
             <button
               className="mt-12 px-8 py-3 rounded-xl font-bold border border-white/40 
               bg-white/10 backdrop-blur-md hover:bg-pink-500 hover:text-white 
               hover:shadow-pink-400/40 transition-all duration-300"
             >
               See More
             </button>
           </Link>
         </div>
       </section>
  )
}
