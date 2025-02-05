import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const icons = [
        { icon: <FaHtml5  color="white" />, name: "HTML" },
        { icon: <FaCss3Alt  color="white" />, name: "CSS" },
        { icon: <FaJsSquare  color="white" />, name: "JavaScript" },
        { icon: <SiTypescript  color="white" />, name: "TypeScript" },
        { icon: <FaReact  color="white" />, name: "React" },
        { icon: <RiTailwindCssFill  color="white" />, name: "Tailwind" },
        { icon: <FaNodeJs  color="white" />, name: "Node.js" },
        { icon: <FaGitAlt  color="white" />, name: "Git" },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
            },
        },
    };

    return (
        <div className="w-full mx-auto my-10 py-10">
            <motion.h1
                ref={ref}
                className="text-4xl font-bold flex justify-center py-10"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                Навыки
            </motion.h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                speed={5000}
            >
                {icons.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col items-center justify-center text-center h-full"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div className="text-[50px] sm:text-[70px] md:text-[100px]">
                            {item.icon}
                        </div>
                        <span className="text-white mt-2 text-lg">{item.name}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skills;
