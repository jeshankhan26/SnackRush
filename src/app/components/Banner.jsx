"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] text-white">
      <div className=" px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
        
        {/* Left: Text */}
        <div className="text-center md:text-left order-2 md:order-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Savor the Taste of <span className="text-pink-400">Delicious Meals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-lg max-w-md mx-auto md:mx-0 text-gray-200"
          >
            Explore a variety of mouth-watering dishes prepared with fresh ingredients,
            crafted to delight your taste buds. Perfect for lunch, dinner, or anytime cravings.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 
              text-white font-semibold shadow-lg hover:bg-pink-500 hover:shadow-pink-400/50 
              transition-all duration-300"
          >
            Order Now
          </motion.button>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end order-1 md:order-2 relative"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl hover:scale-105 transition-all duration-300">
            <Image
              src="https://i.ibb.co/5hGQ94Jj/grilled-beef-burger-with-fries-cheese-tomato-generative-ai.jpg" 
              alt="Delicious Food"
              width={650}
              height={420}
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
