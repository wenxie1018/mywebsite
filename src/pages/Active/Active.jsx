import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import graduate1 from "../../assets/png/graduate1.jpg";
import internation1 from "../../assets/png/internation1.JPEG";
import internation2 from "../../assets/png/internation2.JPEG";
import internation3 from "../../assets/png/internation3.JPEG";
import problem1 from "../../assets/png/problem1.JPG";
import AI1 from "../../assets/png/AI1.jpg";
import ODE from "../../assets/png/ODE.jpg";
import ICA from "../../assets/png/ICA.jpg";
import TAA from "../../assets/png/TAA.JPG";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Active = () => {
  return (
    <div className="global-bg">
      {/* Header Navigation (無動畫) */}
      <div className="flex justify-center items-center space-x-4 md:space-x-10 mx-[5%] py-[4%] md:py-[3%] xl:py-[1%] text-sm md:text-2xl tracking-wide font-bold border-b-2 border-dashed border-y-cyan-950">
        <Link to='/about-me' className="hover:underline">
          關於我
        </Link>
        <Link to='/work-experience' className="hover:underline">
          工作經歷
        </Link>
        <Link to='/portfolio' className="hover:underline">
          作品集
        </Link>
        <Link to='/event-experience' className="underline">
          活動經歷
        </Link>
        <a href="https://tw.trip.com/travel-guide/personal-home/B6E7959CBAD017763DA28142DCB6D2C5B003BE5AEA19BEE5B828FC7A7CDFB4DB?locale=zh_tw&curr=TWD" target="_blank" rel="noopener noreferrer" className="hover:underline">
          旅遊紀錄
        </a>
      </div>
      {/* Body */}
      <div className="mx-[10%] xl:mx-[20%] pb-6">
        {/* 2024 區塊 */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="text-5xl font-bold text-light-blue">2024</div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-blue md:col-span-4 rounded-xl p-4 relative transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={graduate1} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">畢聯會 活動長</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大四期間，我擔任了學校的畢聯會活動長。在擔任幹部的期間，解決了許多問題，像是學士服的團拍與協調全校系所時程。
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-blue-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-blue md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={internation1} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">國際生學伴接待計畫</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大四時我申請了國際學伴計畫，這次我接待的是來自大陸的學生們。經過了前幾次的國際交流，我很期待將台灣文化介紹給他們，也很期待認識來自不同文化背景的他們。
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-blue-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2023 區塊 */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <div className="text-5xl font-bold text-light-green" >2023</div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-green md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={AI1} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">第三名 - 人工智慧與大數據競賽</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大三下我與系上朋友組隊報名了人工智慧與大數據競賽，這是我第一次參與的大型比賽，很榮幸能以「想項，一言難盡」榮獲第三名的佳績...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-green-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-green md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={problem1} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">佳作 - 解決未來問題能力競賽</div>
              <div className="text-base font-semibold mt-1 mb-5">
                我們在比賽中，透過AI與VR科技的結合，設計出了「投影匠人」讓高中職以下的學生能透過這項教育產品不斷地練習簡報技巧，未來也能應用到大學與工作職場中...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-green-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-green md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={internation2} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">國際生學伴接待計畫</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大四上學期間，有幸申請到了接待國際生學伴，展開了我與國際生第二次的交流機會，也從每次的相處及互動中學習到了許多不同事物...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-green-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-green md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={internation3} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">暑期商業營隊</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大三暑假時，接待了來自美國的短期交換生。這是我第一次與國際學生做深入的交流，為期三週的時間，以全英文的方式進行交流。每日將近12小時的全英語學習環境，讓我收穫許多...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-green-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-green md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={ODE} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">ODE大使培訓計畫</div>
              <div className="text-base font-semibold mt-1 mb-5">
                透過一學期的培訓計畫，利用課後之餘，加強自己在拍攝、剪輯的技巧。接觸了全新的剪輯軟體、拍攝方式，也認識到了許多擁有相同愛好的朋友...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-green-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2022 區塊 */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <div className="text-5xl font-bold text-light-yellow">2022</div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-yellow md:col-span-4 rounded-xl p-4 relative transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={ICA} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">ICA青年培訓工作坊</div>
              <div className="text-base font-semibold mt-1 mb-5">
                大二期間，參與了為期一學期的實體工作坊。強化了自己英文、拍攝與剪輯的專業能力，並為未來的影片製作課程打下基礎...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-yellow-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
            <motion.div 
              transition={{ duration: 0.3 }}
              className="bg-light-yellow md:col-span-4 rounded-xl p-4 relative  transition-all duration-300 hover:scale-105"
            >
              <div className="w-full m-auto">
                <img src={TAA} alt="活動照片" className="rounded-md" loading="lazy"/>
              </div>
              <div className="text-xl font-bold mt-2">參賽 - TAA校園創意提案競賽</div>
              <div className="text-base font-semibold mt-1 mb-5">
                這是我第一次參與大型競賽，我與來自不同學校與學科背景的學生組隊一同參賽，學習到了許多知識，成為了一次寶貴的經驗...
              </div>
              <div className="absolute bottom-2 right-3 text-sm font-semibold text-yellow-900 hover:underline cursor-pointer">
                查看更多--
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Active;
