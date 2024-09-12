"use client"

import Image from "next/image";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { BsSunFill } from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlineGlobal} from 'react-icons/ai'
import car from '../public/car.jpg'
import { useState } from "react";


import { projects } from "./data";


export default function Home() {
  const[darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Badal Chowdhary</title>
      </Head>

      <main className=" bg-white px-10 md:px20 lg:px-40 dark:bg-slate-900">
        {/* header */}
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-sm lg:text-2xl font-serif dark:text-gray-200">Badal Chowdhary</h1>
            <ul className=" flex justify-center gap-6 lg:gap-20">
              <li className="dark:text-gray-200">
                {darkMode? <BsSunFill onClick={handleClick} className=" cursor-pointer text-sm mt-1 lg:text-2xl"/> : <BsFillMoonStarsFill onClick={handleClick} className=" cursor-pointer text-sm mt-1 lg:text-2xl text-cyan-800"/>}
              </li>
              <li className="dark:text-gray-200">
                <a href="https://drive.google.com/file/d/1umoWy1ZKdbv-0wUyuyIsm4Q7K-aTOhtK/view?usp=sharing" target="blank" className=" bg-cyan-800 text-gray-200 px-2 py-1 rounded-md text-sm lg:text-xl lg:px-4 lg:py-2 dark:bg-teal-400">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-2 md:p-10 ">
            <h2 className=" text-4xl mt-1 py-3 text-cyan-800 font-medium md:text-6xl md:mt-28 dark:text-teal-400">Badal Chowdhary</h2>
            <h3 className=" text-md py-2 md:text-2xl dark:text-gray-200">Software Engineer Fresher</h3>
            <p className=" text-sm py-5 leading-8 lg:leading-10 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200">
            I am Badal Chowdhary, a recent B.Tech graduate from IIT Gandhinagar. I am passionate about software development and engineering, and actively seeking opportunities in the software development industry, to apply my skills and knowledge to real-world challenges. 
            Here are my <a href="https://leetcode.com/badal_0503/" target="blank" className="text-cyan-800 font-medium font-mono dark:text-teal-400">Leetcode</a> and <a href="https://auth.geeksforgeeks.org/user/badalchorre0" target="blank" className="text-cyan-800 font-medium font-mono dark:text-teal-400">GFG</a> profiles.
            </p>
            
            <div className=" text-l gap-4 flex justify-center py-3 text-cyan-800 dark:text-teal-400 lg:text-3xl lg:gap-8 lg:py-10">
              <a href="https://github.com/badalchowdhary" target="blank" >
                <AiFillGithub/>
              </a>
              <a href="https://www.linkedin.com/in/badalchowdhary47/" target="blank" >
                <AiFillLinkedin/>
              </a>
              <a href="mailto:badal.chowdhary@iitgn.ac.in" target="blank" >
                <AiFillMail/>
              </a>
              
              
            </div>
          </div>
          
          {/* <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profile} layout="fill" objectFit="cover"/>
          </div> */}
        </section>

          {/* Experience  and Education*/}
        <section>
          <div className=" py-2 lg:py-10 dark:text-gray-200">
            <h3 className=" text-xl lg:text-3xl py-5 font-serif">Experience</h3>
            <div className="flex justify-between px-5 lg:px-10 gap-5">
              <h4 className=" text-sm lg:text-2xl underline"> Image Processing Intern , ESI</h4>
              <h4 className=" py-2 text-xs lg:text-lg italic">May23 - July23</h4>
            </div>
            <div className="text-sm lg:text-lg lg:leading-8 py-2 px-8 lg:px-14 leading-8 text-gray-800 dark:text-gray-200">
              <ul class="list-disc">
                <li>Researched and studied image processing techniques, including Image Blurring, Image Thresholding, and Feature Extraction. Explored about depth estimation techniques including <span className=" text-cyan-800 dark:text-teal-400">  Depth from Focus and Depth from Defocus.</span></li>
                <li>Performed the Depth From Focus depth estimation technique and validated on over 8+ image sets having different objects, achieving precise depth estimates for objects within a 30-40 cm range.</li>
              </ul>
            </div>
          </div>

          <div className=" py-2 lg:py-10 dark:text-gray-200">
            <h3 className=" text-xl lg:text-3xl py-5 font-serif">Education</h3>
            <div className="flex justify-between px-5 lg:px-10 gap-5">
              <h4 className=" text-sm lg:text-2xl underline"> IIT Gandhhinagar</h4>
              <h4 className=" py-2 text-xs lg:text-lg italic">2020 - 2024</h4>
            </div>
            <p className="text-sm lg:text-lg lg:leading-8 py-2 px-5 lg:px-10 leading-8 text-gray-800 dark:text-gray-200">
              B.Tech in Materials Science and Engineering with <span className=" text-cyan-800 dark:text-teal-400">Minors in Computer Science and Engineering</span>.
            </p>
          </div>
          
        </section>


          {/* Projects */}
        <section>
          <div className=" py-2 lg:py-10 dark:text-gray-200">
            <h3 className=" text-xl lg:text-3xl py-5 font-serif">Projects</h3>
            {/* <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <span className=" text-teal-500"> Highlight </span>Laboriosam commodi optio pariatur maiores adipisci necessitatibus nemo labore nesciunt esse architecto eveniet sequi non iure natus mollitia voluptate, et id veniam.
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-20">
            {projects.map((item) => (
              <div key={item.id}>
                <div className=" text-center shadow-xl p-5 lg:p-10 rounded-xl my-10 flex-1 dark:bg-slate-800 dark:shadow-xl dark:shadow-slate-900">
                  {/* <Image src={item.img} width={100} height={100} alt={item.title}/> */}
                  <h3 className=" text-sm lg:text-xl lg:mb-5 font-medium pt-8 pb-2 text-cyan-800 dark:text-teal-400">{item.title}</h3>
                  <p className="py-3 text-xs lg:text-lg leading-6 lg:leading-8 lg:mb-5 dark:text-gray-200">
                    {item.desc}
                  </p>
                  <span className=" py-4 text-cyan-800 text-xs lg:text-lg dark:text-teal-400">Tech Stack : </span>
                  <span className="text-xs lg:text-lg leading-6 lg:leading-8 dark:text-gray-200">{item.stack}</span>
                  <div className=" text-xl gap-6 lg:text-3xl flex justify-center lg:gap-10 py-5 lg:pt-10 text-cyan-800 dark:text-teal-400">
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <AiFillGithub />
                    </a>
                    {item.webLink && <a href={item.webLink} target="_blank" rel="noopener noreferrer">
                      <AiOutlineGlobal />
                    </a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        

      </main>
    </div>
  );
}
