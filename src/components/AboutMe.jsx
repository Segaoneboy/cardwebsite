import React from "react";
import photo from "../assets/test2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
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
        <>
            <div>
                <motion.h1
                    ref={ref}
                    className="text-4xl font-bold flex justify-center py-10"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    About me
                </motion.h1>
                <div className="flex justify-center flex-col md:flex-row md:mx-24 my-4 ">
                    <div className="md:w-1/2 w-3/4 m-auto ">
                        <img src={photo} alt='Sega' className=" rounded-xl  "/>
                    </div>

                    <p className="md:ml-40 px-12 md:px-28  my-4 font-bold text-2xl  text-center content-center ">
                        Пересыпкин Сергей (Peresypkin Sergey):<br/>
                        3+ года в Frontend.<br/>
                        Победитель хакатонов.<br/>
                        Разработчик web-приложений на React.<br/>
                        Основатель и лидер команды Sycroll Arts.<br/>

                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
