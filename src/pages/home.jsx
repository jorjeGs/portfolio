import { FaLinkedin, FaGithub, FaPhp, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt  } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Home = () => {
  return (
    <>
        <div className="">
            <div className='home flex flex-col h-full max-w-3xl items-center gap-8'>
                <div className='home-title flex sm:flex-row flex-col items-center h-auto mt-14 justify-center bg-[#004B87] mx-auto gap-6 rounded-3xl p-8'>
                    <div className="home-title-photo sm:w-1/4 w-1/3 rounded-full bg-white">
                        <img className="rounded-full w-full" src="https://avatars.githubusercontent.com/u/78532617?v=4" alt="profile" />
                    </div>
                    <div className="home-title-text sm:w-3/4 w-full flex flex-col gap-3">
                        <h1 className='text-white font-bold text-3xl text-center sm:text-start'>Hi, I'm <span className="text-[#FF4136]">Jorge</span></h1>
                        <p className='text-white text-center sm:text-start'>I'm recent computer science graduate who is particularly interested in using my knowledge to create and develop web and mobile solutions.</p>
                        <div className="home-title-text-icons flex justify-center items-center sm:justify-start gap-4">
                            <a className=" text-white hover:text-blue-300 transition duration-300 ease-in-out" href="https://www.linkedin.com/in/jorge-garcia-serrano-dev/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a className=" text-white hover:text-blue-300 transition duration-300 ease-in-out" href="https://github.com/jorjeGs" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl" />
                            </a>
                            <button className="download-cv py-2 px-4 bg-white hover:bg-black text-black hover:text-white rounded-full transition duration-300 ease-in-out">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className='home-study flex sm:flex-row flex-col items-center h-auto justify-center gap-6'>
                    <div className="home-study-degree sm:w-2/5 w-full flex flex-col bg-[#004B87] rounded-3xl p-4 mx-auto items-center justify-center gap-4">
                        <div className="home-study-degree-logo flex justify-center items-center">
                            <FaGraduationCap className=" text-8xl text-white" />
                        </div>
                        <div className="home-study-degree-text flex flex-col justify-center items-center text-center mx-auto">
                            <p className="text-white font-bold text-3xl">Computer Science</p>
                            <p className="text-white mt-1">At Universidad Autonoma de Baja California (2019-2023)</p>
                        </div>
                    </div>
                    <div className="home-study-frameworks sm:w-3/5 w-full flex flex-col bg-[#004B87] rounded-3xl p-8 mx-auto">
                        <div className="home-study-frameworks-text flex justify-center items-center gap-3">
                            <p className="font-bold text-3xl text-white">Knowledgement</p>
                        </div>
                        <div className="home-study-frameworks-logos flex flex-wrap mt-8 gap-3 items-center justify-center">
                            <FaReact className="text-6xl text-white" />
                            <IoLogoJavascript className="text-6xl text-white" />
                            <FaPhp className="text-6xl text-white" />
                            <FaNodeJs className="text-6xl text-white" />
                            <DiMysql className="text-6xl text-white" />
                            <FaGitAlt className="text-6xl text-white" />
                            <FaCss3Alt className="text-6xl text-white" />
                            <SiTailwindcss className="text-6xl text-white" />
                        </div>
                    </div>
                </div>
                <div className='home-experience flex sm:flex-row flex-col items-center h-auto justify-center bg-[#004B87] mx-auto gap-6 rounded-3xl p-8'>
                    <div className="home-experience-title flex justify-center items-center gap-3">
                        <p className="font-bold text-3xl text-white">Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;