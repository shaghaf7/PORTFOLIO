import React from 'react'
import  heroImage  from "../assets/heroImage.png";
import { MdArrowRightAlt } from "react-icons/md";


const Home = () => {
  return (
    <div name="home"  className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
     
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4  md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            I'm Shaghaf Kashif, a passionate Full Stack Developer skilled in building dynamic web applications. With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I create seamless user experiences and robust back-end solutions. As a Data Science student at RNSIT, I blend analytical skills with coding expertise to develop innovative projects
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio<span className='group-hover:rotate-90 duration-300'>
                        <MdArrowRightAlt className='ml-1'/>
                    </span>
                </button>
            </div>
        </div>
        <div >
            <img style={{ width: 500, height: 650 }} src={heroImage} alt='my profile ' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
     </div>
    </div>
  )
}

export default Home
