import React from 'react';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import medi from "../assets/medi.png"
import ProjectBlock from "./ProjectBlock";
const Projects = () => {
    const mediText = 'Meditation project'
    const mediHref = 'https://segaoneboy.github.io/MEDI/'

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
                    Projects
                </motion.h1>
                <ProjectBlock image = {medi} text ={mediText} href={mediHref} />
            </div>
        </>
    );
};

export default Projects;
