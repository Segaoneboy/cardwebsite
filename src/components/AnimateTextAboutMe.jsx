import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextAboutMe = () => {
    const text = `
    Пересыпкин Сергей (Peressypkin Sergey):<br/>
    3+ года в Frontend.<br/>
    Победитель хакатонов.<br/>
    Разработчик web-приложений на React.<br/>
    Основатель и лидер команды Sycroll Arts.<br/>
  `;

    // Настройка useInView для отслеживания области видимости
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация сработает только один раз
        threshold: 0.1, // Компонент должен быть виден на 10% для активации
    });

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Задержка между символами
            },
        },
    };

    const charVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref} // Привязка элемента к useInView
            className="lg:ml-40 px-12 md:px-28 my-4 font-bold md:text-2xl text-xl text-center content-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Анимация запускается при попадании в область видимости
            variants={containerVariants}
        >
            {text.split(/(<br\/>)/).map((char, index) => (
                <motion.span
                    key={index}
                    variants={charVariants}
                    style={{ display: "inline-block" }}
                >
                    {char === "<br/>" ? <br /> : char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextAboutMe;
