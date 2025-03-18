import React from 'react'
import { Link } from "react-router-dom";
import CV from "../../assets/png/cv.png";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div class="global-bg">
      <div class='flex justify-center items-center space-x-4 md:space-x-10 mx-[5%] py-[4%] md:py-[3%] xl:py-[1%] text-sm md:text-2xl tracking-wide font-bold border-b-2 border-dashed border-y-cyan-950'>
        <Link to='/about-me' class='underline'>
          關於我
        </Link>
        <Link to='/work-experience' class='hover:underline'>
          工作經歷
        </Link>
        <Link to='/portfolio' class='hover:underline'>
          作品集
        </Link>
        <Link to='/event-experience' class='hover:underline'>
          活動經歷
        </Link>
        <a href="https://tw.trip.com/travel-guide/personal-home/B6E7959CBAD017763DA28142DCB6D2C5B003BE5AEA19BEE5B828FC7A7CDFB4DB?locale=zh_tw&curr=TWD" target="_blank" rel="noopener noreferrer" class='hover:underline'>
          旅遊紀錄
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center items-center py-10"
      >
        <img src={CV} alt='CV' class="max-w-xs lg:max-w-3xl h-auto"></img>
      </motion.div>
    </div>
  )
}

export default Aboutme