import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import polakids from "../../assets/png/polakids.png";
import pchomethai from "../../assets/png/pchomethai.png";

const Work = () => {
  return (
    <div class="global-bg">
        <div class='flex justify-center items-center space-x-4 md:space-x-10 mx-[5%] py-[3%] md:py-[1%] text-sm md:text-2xl tracking-wide font-bold border-b-2 border-dashed border-y-cyan-950'>
            <Link to='/about-me' class='hover:underline'>
                關於我
            </Link>
            <Link to='/work-experience' class='underline'>
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
        <div class="mx-10 md:mx-16 xl:mx-32 mt-10 md:mt-15 xl:mt-20">
            <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div class="w-full md:w-1/2 xl:w-[30%] mb-6 md:mb-0">
                    <img src={polakids} alt="PolaKids" class="w-[100%] h-[100%]"></img>
                </div>
                <div class="md:ml-8 xl:ml-12 flex-1">
                    <div class="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                        宇宙製造股份有限公司
                    </div>
                    <div class="text-base md:text-lg xl:text-xl font-bold mt-2">
                        2023.07 - 2024.07
                    </div>
                    <div class="text-base md:text-lg xl:text-xl font-bold mt-2">
                        全端工程師兼行銷企劃實習生
                    </div>
                    <div class="mt-6 text-sm md:text-base xl:text-lg">
                        這一年的實習期間，我主要負責公司與雅文基金會合作開發
                        的「雅文聽語系統」。實習期間參與了產品的功能研發、介面與
                        流程設計、使用者訪談等工作，增強了我的程式與AI Prompt修改的能力外，也
                        能有效率地處理不同類型的工作。<br></br>
                        除此之外，實習期間也常支援公司其他產品。像是協助開發
                        為弱勢孩童研發的AISOLLY、撰寫公司每月電子報、現場教學孩
                        童程式邏輯的「玩麥快學程式」課程等。偶爾遇到大型活動時，
                        我也會負責事先的展場規劃，並到現場宣傳與推廣產品。
                        雖然工作內容繁雜，但學習到的知識遠比一般實習還多。透
                        過不斷地挑戰與嘗試，培養出我多元競爭的能力與探究新知的好
                        奇心，也更能夠因應未來各種不同挑戰...
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="flex flex-col md:flex-row w-[100%] mt-10 xl:mt-20 items-center pb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div class="w-full md:w-1/2 xl:w-[30%] mb-6 md:mb-0">
                    <img src={pchomethai} alt="pchomethai" class="w-[100%] h-[100%]"></img>
                </div>
                <div class="md:ml-8 xl:ml-12 flex-1">
                    <div class="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                        PC HOME Thai
                    </div>
                    <div class="text-base md:text-lg xl:text-xl font-bold mt-2">
                        2023.09 - 2024.10
                    </div>
                    <div class="text-base md:text-lg xl:text-xl font-bold mt-2">
                        行銷企劃實習生
                    </div>
                    <div class="mt-3 lg:mt-6 text-sm md:text-base xl:text-lg">
                        大四開學前，透過學校推薦爭取到了這份實習機會，遠
                        赴到泰國曼谷進行為期一個月的實習工作。
                        在實習期間，我負責修改官網產品文案、聯絡台灣團購主、
                        撰寫部落格推廣文案與拍攝短影音等行銷工作。其中，在撰寫部
                        落格文案與拍攝短影音上，我以將泰國文化與當地特色連結到當
                        地產品為發想方向，以不一樣的角度來重新介紹泰國，讓更多台
                        灣人認識到不一樣的泰國文化。最終，我的部落格文案與短影音
                        的創新主題受到當地主管的肯定，給予了高度的評價...
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Work