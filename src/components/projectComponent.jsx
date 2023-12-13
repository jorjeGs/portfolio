import React from 'react';
import { FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";

const ProjectComponent = (props) => {
    const { project } = props;
    const { title, description, image, live, code, iconosArray } = project;

    return (
        <>
            <div className="flex sm:flex-row flex-col w-full sm:max-h-56 h-auto items-center rounded-lg justify-center p-2">
                <div className="flex sm:w-1/2 w-full sm:max-h-full max-h-40 mx-auto mb-2 sm:mb-0">
                    <img className="w-11/12 mx-auto rounded-2xl" src={image} alt="" />
                </div>
                <div className="flex flex-col sm:w-1/2 w-full sm:h-full h-full sm:justify-between justify-center items-start">
                    <div className="text flex flex-col text-center sm:text-left gap-2">
                        <p className="text-3xl font-bold text-white">{title}</p>
                        <p className="mb-2 text-gray-200">{description}</p>
                    </div>
                    <div className="icons flex flex-row gap-4 items-center sm:justify-start justify-center mb-2 ">
                        <FaReact className="text-4xl text-white" />
                        <IoLogoJavascript className="text-4xl text-yellow-400" />
                        <DiMysql className="text-4xl font-bold text-white" />
                        <FaBootstrap className="text-4xl text-purple-500" />
                    </div>
                    <div className="buttons flex flex-row gap-2 sm:justify-start justify-center align-bottom">
                        <a href={live} className="download-cv font-bold py-2 px-4 bg-white hover:bg-red-500 text-black hover:text-white rounded-md transition duration-300 ease-in-out">Live</a>
                        <a href={code} className="download-cv font-bold py-2 px-4 bg-white hover:bg-black text-black hover:text-white rounded-md transition duration-300 ease-in-out">Code</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectComponent;