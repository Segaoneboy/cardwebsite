import React from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { FaInstagram, FaTelegram  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contacts = () => {
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
    const handleClick = () =>{
        window.location.href = "https://t.me/sega_oneboy";
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <motion.h1
                    ref={ref}
                    className="text-4xl font-bold flex justify-center py-6"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    Контакты
                </motion.h1>
                <motion.p
                    ref={ref}
                    className="text-center py-4 px-4"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    Хотите узнать больше или просто пообщаться?<br/>
                    Вперёд!
                </motion.p>
                <button className= 'rounded-lg text-bold text-xl border-2 border-white my-4 px-4 py-2' onClick={handleClick}>
                    Написать
                </button>
                <div className="flex justify-between mb-4">
                    <a href="https://www.instagram.com/sega_oneboy/">
                        <FaInstagram color="white" size={40} className="my-4 mx-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/sega-oneboy-97b0332b4">
                        <CiLinkedin color="white" size={40} className="my-4 mx-4" />
                    </a>
                    <a href="https://t.me/segasdays">
                        <FaTelegram color="white" size={40} className="my-4 mx-4" />
                    </a>

                </div>

            </div>
        </>
    );
};

export default Contacts;
