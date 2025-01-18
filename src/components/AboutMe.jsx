import React from "react";
import photo from "../assets/test2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedTextAboutMe from "./AnimateTextAboutMe";

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
                <div className="flex justify-center flex-col lg:flex-row sm:mx-24 my-4 ">
                    <div className="md:w-2/3 w-3/4 m-auto ">
                        <motion.img
                            src={photo}
                            alt='Sega'
                            className=" rounded-xl"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={variants}
                        />
                    </div>

                    <AnimatedTextAboutMe/>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
