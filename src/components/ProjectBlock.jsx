import React from 'react';

const ProjectBlock = ({image,text, href}) => {
    return (
        <div >
            <div className="flex justify-center">
                <img src={image} alt="project preview" className="border-2 rounded-lg border-white w-1/2"/>
            </div>
            <div className="flex justify-center my-4">
                <a className="text-center text-2xl underline"  href={href}>
                    {text}
                </a>
            </div>


        </div>
    );
};

export default ProjectBlock;
