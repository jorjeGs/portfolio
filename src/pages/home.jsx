import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaToolbox, FaBootstrap, FaStar } from "react-icons/fa";
import { FaGraduationCap, FaAws } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { SiTailwindcss, SiPhp, SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import profilePhoto from '../assets/photo.jpeg';
import cookioPhoto from '../assets/cookio.png';
import taskflowPhoto from '../assets/taskflow.png';
import apiPhoto from '../assets/api.png';
import resume from '../assets/CV.pdf';

const handleDownload = () => {
    window.open(resume, '_blank'); // Abre una nueva pestaña
};

const copyToClipboard = async () => {
    //function to copy email to clipboard from input field with navigator clipboard api
    try {
        await navigator.clipboard.writeText("jgs_23072000@outlook.com");
        alert("Email copied to clipboard");
    } catch (err) {
        console.log("Failed to copy: ", err);
    }
}

const Home = () => {
    return (
        <>
            <div className="">
                <div className='home flex flex-col h-full sm:max-w-3xl w-10/12 justify-center items-center gap-8 mb-6 mx-auto'>
                    <div className='home-title hover:bg-transparent transition duration-300 flex sm:flex-row flex-col items-center h-auto mt-14 justify-center bg-[#004B87] mx-auto gap-6 rounded-3xl p-8'>
                        <div className="home-title-photo sm:w-1/4 w-1/3 rounded-full shadow-2xl bg-white transition duration-300 transform hover:scale-110">
                            <img className="rounded-full w-full border-8 border-blue-500 shadow-2xl" src={profilePhoto} alt="profile" />
                        </div>
                        <div className="home-title-text sm:w-3/4 w-full flex flex-col gap-3">
                            <h1 className='text-white font-bold text-3xl text-center sm:text-start'>Hi, I'm <span className="text-[#FF4136]">Jorge</span></h1>
                            <p className='text-white text-center sm:text-start'>I´m a passionate <strong>web developer</strong></p>
                            <div className="home-title-text-icons flex justify-center items-center sm:justify-start gap-4">
                                <a className=" text-white hover:text-blue-500 transition duration-300 ease-in-out" href="https://www.linkedin.com/in/jorge-garcia-serrano-dev/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                                <a className=" text-white hover:text-gray-400 transition duration-300 ease-in-out" href="https://github.com/jorjeGs" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-3xl" />
                                </a>
                                <button onClick={handleDownload} className="download-cv sm:py-2 sm:px-4 py-1 px-2 bg-white hover:bg-black text-black hover:text-white rounded-full transition duration-300 ease-in-out">Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className='home-study flex sm:flex-row flex-col w-full items-center h-auto justify-center gap-6'>
                        <div className="home-study-degree hover:bg-transparent transition duration-300 transform hover:scale-110 ease-in-out sm:w-2/5 w-full h-full flex flex-col bg-[#004B87] rounded-3xl p-4 mx-auto items-center justify-center gap-4">
                            <div className="home-study-degree-logo flex justify-center items-center">
                                <FaGraduationCap className=" text-8xl text-white" />
                            </div>
                            <div className="home-study-degree-text flex flex-col justify-center items-center text-center mx-auto">
                                <p className="text-white font-bold text-3xl">Computer Science</p>
                                <p className="text-white mt-1">At Universidad Autonoma de Baja California (2019-2023)</p>
                            </div>
                        </div>
                        <div className="home-study-frameworks transform hover:scale-110 hover:bg-transparent transition duration-300 sm:w-3/5 w-full h-full flex flex-col bg-[#004B87] rounded-3xl p-8 mx-auto">
                            <div className="home-study-frameworks-text flex justify-center items-center gap-3">
                                <p className="font-bold text-3xl text-white">Knowledgement</p>
                            </div>
                            <div className="home-study-frameworks-logos flex flex-wrap mt-8 gap-3 items-center justify-center">
                                <FaReact className="text-6xl text-white hover:text-blue-400 transition duration-300 ease-in-out" />
                                <IoLogoJavascript className="text-6xl text-white hover:text-yellow-300 transition duration-300 ease-in-out" />
                                <SiPhp className="text-6xl text-white hover:text-purple-400 transition duration-300 ease-in-out" />
                                <FaNodeJs className="text-6xl text-white hover:text-green-400 transition duration-300 ease-in-out" />
                                <DiMysql className="text-6xl text-white hover:text-orange-300 transition duration-300 ease-in-out" />
                                <FaGitAlt className="text-6xl text-white hover:text-orange-500 transition duration-300 ease-in-out" />
                                <FaCss3Alt className="text-6xl text-white hover:text-blue-500 transition duration-300 ease-in-out" />
                                <SiTailwindcss className="text-6xl text-white hover:text-blue-300 transition duration-300 ease-in-out" />
                            </div>
                        </div>
                    </div>
                    <div className='home-experience transform hover:scale-110 hover:bg-transparent transition duration-300 flex sm:flex-row flex-col items-center w-full h-auto justify-center bg-[#004B87] mx-auto gap-6 rounded-3xl p-8'>
                        <div className="home-experience-title flex flex-col justify-center items-center gap-3">
                            <FaToolbox className="text-6xl text-white" />
                            <p className="font-bold text-3xl text-white">Experience</p>
                        </div>
                        <div className="home-experience-timeline flex w-full items-center justify-center">
                            <ol className="relative border-s border-gray-200">
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-200">June 2023 - August 2023</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer - AXP TEK</h3>
                                    <p className="text-base font-normal text-gray-200">Requirement analysis based on client needs.</p>
                                    <p className="text-base font-normal text-gray-200">Front view (responsive) and database table design.</p>
                                    <p className="text-base font-normal text-gray-200">SQL querys and MVC.</p>
                                    <p className="text-base font-normal text-gray-200">Login auth and session data management.</p>
                                    <div className="home-experience-timeline-icons flex justify-end items-center gap-4 mt-4">
                                        <SiPhp className="text-4xl text-purple-400" />
                                        <IoLogoJavascript className="text-2xl text-yellow-400" />
                                        <DiMysql className="text-4xl font-bold text-orange-300" />
                                        <FaBootstrap className="text-3xl text-purple-500" />
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='home-projects hover:bg-transparent transition duration-300 flex flex-col items-center w-full h-auto justify-center bg-[#004B87] mx-auto gap-6 rounded-3xl p-8'>
                        <div className="home-projects-title flex justify-center items-center gap-3">
                            <p className="font-bold text-3xl text-white">Projects</p>
                            <FaStar className="text-3xl text-white" />
                        </div>
                        <div className="home-projects-list flex flex-col w-full h-auto gap-6">
                            <div className="flex sm:flex-row flex-col w-full sm:max-h-56 h-auto items-center rounded-lg justify-center p-2 gap-6 transition duration-300 transform hover:scale-110">
                                <div className="flex sm:w-1/2 w-full sm:max-h-full max-h-40 mx-auto my-auto sm:mb-0">
                                    <img className="w-full h-full mx-auto rounded-2xl" src={taskflowPhoto} alt="Taskflow" />
                                </div>
                                <div className="flex flex-col sm:w-1/2 w-full sm:h-full h-full sm:justify-between justify-center items-start">
                                    <div className="text flex flex-col text-center sm:text-left gap-2">
                                        <p className="text-3xl font-bold text-white">Taskflow</p>
                                        <p className="mb-2 text-gray-200">Simply login, tables and tasks management (local storage).</p>
                                    </div>
                                    <div className="icons flex flex-row gap-4 items-center sm:justify-start justify-center mb-2 ">
                                        <FaReact className="text-4xl text-blue-400" />
                                        <IoLogoJavascript className="text-4xl text-yellow-400" />
                                        <SiTailwindcss className="text-4xl text-blue-300" />
                                    </div>
                                    <div className="buttons flex flex-row gap-2 sm:justify-start justify-center align-bottom">
                                        <a href="https://taskflow-app.onrender.com" target="_blank" rel="noopener noreferrer" className="download-cv font-bold py-1 px-2 bg-white hover:bg-red-500 text-black hover:text-white rounded-md transition duration-300 ease-in-out">Live</a>
                                        <a href="https://github.com/jorjeGs/ToDo-Metrics" target="_blank" rel="noopener noreferrer" className="download-cv font-bold py-1 px-2 bg-white hover:bg-black text-black hover:text-white rounded-md transition duration-300 ease-in-out">Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col w-full sm:max-h-56 h-auto items-center rounded-lg justify-center p-2 gap-6 transition duration-300 transform hover:scale-110">
                                <div className="flex sm:w-1/2 w-full sm:max-h-full max-h-40 mx-auto my-auto sm:mb-0">
                                    <img className="w-full h-full mx-auto rounded-2xl" src={cookioPhoto} alt="Cookio" />
                                </div>
                                <div className="flex flex-col sm:w-1/2 w-full sm:h-full h-full sm:justify-between justify-center items-start">
                                    <div className="text flex flex-col text-center sm:text-left gap-2">
                                        <p className="text-3xl font-bold text-white">Cookio Blog</p>
                                        <p className="mb-2 text-gray-200">Login auth, image and text entry creation and interaction (AWS S3).</p>
                                    </div>
                                    <div className="icons flex flex-row gap-4 items-center sm:justify-start justify-center mb-2 ">
                                        <FaReact className="text-4xl text-blue-400" />
                                        <IoLogoJavascript className="text-4xl text-yellow-400" />
                                        <SiTailwindcss className="text-4xl text-blue-300" />
                                        <TbApi className="text-5xl text-white" />
                                    </div>
                                    <div className="buttons flex flex-row gap-2 sm:justify-start justify-center align-bottom">
                                        <a href="https://cookio-app.onrender.com" target="_blank" rel="noopener noreferrer" className="download-cv font-bold py-1 px-2 bg-white hover:bg-red-500 text-black hover:text-white rounded-md transition duration-300 ease-in-out">Live</a>
                                        <a href="https://github.com/jorjeGs/cookio" target="_blank" rel="noopener noreferrer" className="download-cv font-bold py-1 px-2 bg-white hover:bg-black text-black hover:text-white rounded-md transition duration-300 ease-in-out">Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col w-full sm:max-h-56 h-auto items-center rounded-lg justify-center p-2 gap-6 transition duration-300 transform hover:scale-110">
                                <div className="flex sm:w-1/2 w-full sm:max-h-full max-h-40 mx-auto my-auto sm:mb-0">
                                    <img className="w-full h-full bg-cover mx-auto rounded-2xl" src={apiPhoto} alt="Cookio" />
                                </div>
                                <div className="flex flex-col sm:w-1/2 w-full sm:h-full h-full sm:justify-between justify-center items-start">
                                    <div className="text flex flex-col text-center sm:text-left gap-2">
                                        <p className="text-3xl font-bold text-white">Cookio API</p>
                                        <p className="mb-2 text-gray-200">Token auth, password encrypt, CRUD, AWS S3 file management.</p>
                                    </div>
                                    <div className="icons flex flex-row gap-4 items-center sm:justify-start justify-center mb-2 ">
                                        <FaNodeJs className="text-4xl text-green-400" />
                                        <DiMysql className="text-4xl font-bold text-orange-300" />
                                        <SiExpress className="text-4xl text-white" />
                                        <FaAws className="text-4xl text-yellow-600" />
                                    </div>
                                    <div className="buttons flex flex-row gap-2 sm:justify-start justify-center align-bottom">
                                        <a href="https://github.com/jorjeGs/CookioAPI" target="_blank" rel="noopener noreferrer" className="download-cv font-bold py-1 px-2 bg-white hover:bg-black text-black hover:text-white rounded-md transition duration-300 ease-in-out">Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="home-contact flex flex-col items-center w-full h-auto justify-center mx-auto gap-6 mb-6">
                        <div className="home-contact-title flex justify-center items-center gap-3">
                            <p className="font-bold text-3xl text-white">Email</p>
                            <MdEmail className="text-3xl text-white" />
                        </div>
                        <div className="home-contact-email w-full flex justify-center items-center gap-3">
                            <input className="w-full text-white h-10 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-300" type="text" placeholder="Email" value="   jgs_23072000@outlook.com" disabled />
                            <button onClick={copyToClipboard} className="copy-email py-2 px-4 bg-white hover:bg-black text-black hover:text-white rounded-md transition duration-300 ease-in-out">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;