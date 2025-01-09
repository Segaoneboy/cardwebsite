import React from "react";
import photo from "../assets/about_me_photo.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About_me = () => {
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
                <div>
                    <div className="flex justify-center mx-24 my-4 ">
                        <img src={photo} alt="Photo" className="w-1/3 rounded-xl  "/>

                        <p className="ml-40 px-28 font-bold text-2xl content-center ">
                            Пересыпкин Сергей (Peresypkin Sergey):<br/>
                            3+ года в Frontend.<br/>
                            Победитель хакатонов<br/>
                            Разработчик web-приложений на React<br/>
                            Основатель и лидер команды Sycroll Arts<br/>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About_me;
