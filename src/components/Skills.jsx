import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {useInView} from "react-intersection-observer";

const IconCarousel = () => {
    const icons = [
        <FaHtml5 size={100} color="white" />,
        <FaCss3Alt size={100} color="white" />,
        <FaJsSquare size={100} color="white" />,
        <SiTypescript size={100} color="white" />,
        <FaReact size={100} color="white" />,
        <RiTailwindCssFill size={100} color="white" />,
        <FaNodeJs size={100} color="white" />,
        <FaGitAlt size={100} color="white" />
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
        <div className="w-full  mx-auto my-10  py-10">
            <motion.h1
                ref={ref}
                className="text-4xl font-bold flex justify-center py-10"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                Skills
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
                {icons.map((icon, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        {icon}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default IconCarousel;
