import React from "react";
import { motion } from "framer-motion";

const AnimatedTextAboutMe = () => {
    const text = `
    Пересыпкин Сергей (Peressypkin Sergey):<br/>
    3+ года в Frontend.<br/>
    Победитель хакатонов.<br/>
    Разработчик web-приложений на React.<br/>
    Основатель и лидер команды Sycroll Arts.<br/>
  `;

    return (
        <motion.div
            className="lg:ml-40 px-12 md:px-28 my-4 font-bold md:text-2xl text-xl text-center content-center"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
        >
            {text.split(/(<br\/>)/).map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    {char === "<br/>" ? <br /> : char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextAboutMe;
