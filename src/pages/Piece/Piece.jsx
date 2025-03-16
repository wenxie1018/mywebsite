import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import piece1 from "../../assets/png/piece1.png";
import movieblog from "../../assets/png/movieblog.png";
import awakepdf from "../../assets/file/awake.pdf";
import awake from "../../assets/png/awake.png";
import thaipdf from "../../assets/file/Thai.pdf";
import thai from "../../assets/png/thai.png";
import toy from "../../assets/png/toy.png";
import dapon from "../../assets/png/dapon.png";
import grad from "../../assets/png/gradfinal.png";
import furniture from "../../assets/png/furniture.png";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const projects = [
    { 
        id: 1, 
        title: "電影網站 - 電影宅急便", 
        type: "programming", 
        description: "使用 HTML+CSS+JS 打造的電影租借網站。",
        link: "https://wenxie1018.github.io/MovieDelivery/",
        image: piece1
    },
    { 
        id: 2, 
        title: "前端網站 - 康乃爾家具", 
        type: "programming", 
        description: "基於全新流程設計打造的一頁式網站，可大幅度縮短開發時程。",
        link: "https://wenxie1018.github.io/furniture/",
        image: furniture
    },
    { 
        id: 3, 
        title: "流程設計 - 小琉球一日遊預定系統", 
        type: "programming", 
        description: "一日遊訂購系統流程設計，直覺式設計讓你訂購不再卡關",
        link: "https://dapon.onrender.com/home/index/",
        image: dapon
    },
    { 
        id: 4, 
        title: "前端網站 - 玩物喪薪", 
        type: "programming", 
        description: "基於HTML+CSS+JSP打造的公仔販售購物網站(前端展示)",
        link: "https://wenxie1018.github.io/Toy/",
        image: toy
    },
    { 
        id: 5, 
        title: "畢業專題 - 全新的網站開發模式", 
        type: "programming", 
        description: "基於敏捷式開發延伸的全新網站開發模式，開發時間與成本大幅縮減。",
        link: "https://wenxie1018.github.io/graduatefinal/",
        image: grad
    },
    { 
        id: 6, 
        title: "行銷企劃 - 寶持清醒", 
        type: "marketing", 
        description: "從0到1的實體商店行銷企劃",
        link: awakepdf,
        image: awake
    },
    { 
        id: 7, 
        title: "電影部落格", 
        type: "marketing", 
        description: "真實影評，那些我從電影中學到的事。",
        link: "https://leze0311.pixnet.net/blog",
        image: movieblog
    },
    { 
        id: 8, 
        title: "曼谷六天五夜旅遊書", 
        type: "others", 
        description: "實習一個月，探索曼谷的精華都在這！",
        link: thaipdf,
        image: thai
    },
    /*{ 
        id: 9, 
        title: "東京六天五夜旅遊書", 
        type: "others", 
        description: "",
        link: "https://your-marketing-report.com",
        image: "/images/marketing1.jpg"
    },
    { 
        id: 10, 
        title: "福島六天五夜旅遊書", 
        type: "others", 
        description: "",
        link: "https://your-marketing-report.com",
        image: "/images/marketing1.jpg"
    }*/
];

const Piece = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(project => project.type === filter);
    
  return (
    <div class="global-bg">
        <div class='flex justify-center items-center space-x-4 md:space-x-10 mx-[5%] py-[3%] md:py-[1%] text-sm md:text-2xl tracking-wide font-bold border-b-2 border-dashed border-y-cyan-950'>
            <Link to='/about-me' class='hover:underline'>
                關於我
            </Link>
            <Link to='/work-experience' class='hover:underline'>
                工作經歷
            </Link>
            <Link to='/portfolio' class='underline'>
                作品集
            </Link>
            <Link to='/event-experience' class='hover:underline'>
                活動經歷
            </Link>
            <a href="https://tw.trip.com/travel-guide/personal-home?locale=zh-TW&curr=TWD" target="_blank" rel="noopener noreferrer" class='hover:underline'>
                旅遊紀錄
            </a>
        </div>
        <div className="min-h-screen py-10">            
            {/* 篩選按鈕 */}
            <div className="flex justify-center space-x-4 mb-6">
                <button 
                    onClick={() => setFilter("all")} 
                    className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                    全部
                </button>
                <button 
                    onClick={() => setFilter("programming")} 
                    className={`px-4 py-2 rounded ${filter === "programming" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                    程式作品
                </button>
                <button 
                    onClick={() => setFilter("marketing")} 
                    className={`px-4 py-2 rounded ${filter === "marketing" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                    行銷作品
                </button>
                <button 
                    onClick={() => setFilter("others")} 
                    className={`px-4 py-2 rounded ${filter === "others" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                    其他作品
                </button>
            </div>

            {/* 作品列表 */}
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-[5%]">
                {filteredProjects.map(project => (
                    <motion.div key={project.id} transition={{ duration: 0.3 }} className="bg-white p-4 rounded-lg shadow-lg flex flex-col  transition-all duration-300 hover:scale-105">
                        <img src={project.image} alt={project.title} className="rounded-md mb-4" loading="lazy" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600 flex-grow mt-1">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 self-end">
                            查看詳情 →
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
    </div>
  )
}

export default Piece