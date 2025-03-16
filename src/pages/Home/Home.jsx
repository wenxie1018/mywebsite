import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="global-bg flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[80%] max-w-4xl mx-auto grid grid-cols-4 gap-10 gap-y-10 lg:gap-y-16 text-center text-lg lg:text-2xl font-extrabold font-sans"
      >
        <Link 
          to='/about-me' 
          className="border rounded-2xl border-gray-700 col-span-4 py-10 cursor-pointer flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          關於我 / About Me
        </Link>
        <Link 
          to='/work-experience' 
          className="border rounded-2xl border-gray-700 col-span-2 py-10 cursor-pointer flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          工作經歷 / Work Experience
        </Link>
        <Link 
          to='/portfolio' 
          className="border rounded-2xl border-gray-700 col-span-2 py-10 cursor-pointer flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          作品集 / Portfolio
        </Link>
        <Link 
          to='/event-experience' 
          className="border rounded-2xl border-gray-700 col-span-2 py-10 cursor-pointer flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          活動經歷 / Event Experience
        </Link>
        <a 
          href="https://tw.trip.com/travel-guide/personal-home?locale=zh-TW&curr=TWD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border rounded-2xl border-gray-700 col-span-2 py-10 cursor-pointer flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          旅遊紀錄 / Travel Blog
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
