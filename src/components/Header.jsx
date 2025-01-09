import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {} from "../style.css"

const Header = () => {
    const variants = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity: 1,
            transition:{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
            }
        }
    }
    const secondary = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity: 1,
            transition:{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1.7,
            }
        }
    }

    const [screenType, setScreenType] = useState('large')

    useEffect(() =>{
        const handleResize = () =>{
            const width = window.innerWidth

            if(width < 768){
                setScreenType('mobile')
            } else if (width < 1024){
                setScreenType("tablet");
            } else {
                setScreenType('large')
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (

        <>
            {screenType === "large" && (
                <div className="h-screen ">
                    <div
                        className="flex items-center justify-center h-screen  text-white"
                    >
                        <h1 className="text-white text-12xl font-bold">S</h1>
                    </div>
                    <motion.div
                        className="absolute top-60 left-2-5 text-white  rotate-24 "
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}

                    >
                        <h1 className="text-white text-4xl ">#IT</h1>
                    </motion.div>
                    <motion.div
                        className="absolute top-65p left-3-5 text-white  rotate-24 "
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}

                    >
                        <h1 className="text-white text-4xl ">New?</h1>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/4 text-white  rotate-24 "
                        initial="hidden"
                        animate="visible"
                        variants={secondary}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        <h1 className="text-white text-4xl ">#Frontend</h1>
                    </motion.div>
                    <motion.div
                        className="absolute top-40p left-60p text-white  rotate-24 "
                        initial="hidden"
                        animate="visible"
                        variants={secondary}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        <h1 className="text-white text-4xl ">#Sycroll Arts</h1>
                    </motion.div>
                </div>
            )}
            {screenType === "mobile" && (
                <div
                    className='w-screen min-h-96 max-h-96 '>
                    <div className="min-h-96 flex items-center justify-center">
                        <h1 className="flex items-center justify-center text-white text-12xl font-bold">S</h1>
                    </div>
                    <motion.h1
                        className="absolute text-white top-24 left-20 text-4xl rotate-24"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        #IT
                    </motion.h1>

                    <motion.h1
                        className="absolute top-72 left-60p text-white text-4xl rotate-24"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        New?
                    </motion.h1>

                </div>
            )}
            {screenType ==="tablet" && (
                <div
                    className='w-screen min-h-28r max-h-96 '>
                    <div className="min-h-28r flex items-center justify-center">
                        <h1 className="flex items-center justify-center text-white text-12xl font-bold">S</h1>
                    </div>
                    <motion.h1
                        className="absolute text-white top-40 left-1/3 text-4xl rotate-24"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        #IT
                    </motion.h1>

                    <motion.h1
                        className="absolute top-2/3 left-60p text-white text-4xl rotate-24"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{fontFamily: "'Comic Sans MS', cursive"}}
                    >
                        New?
                    </motion.h1>

                </div>
            )}
        </>
    );
};

export default Header;
