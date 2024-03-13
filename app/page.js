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
  const[darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Badal Chowdhary</title>
      </Head>

      <main className=" bg-white px-10 md:px20 lg:px-40 dark:bg-gray-900">
        {/* header */}
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-gray-200">Badal Chowdhary</h1>
            <ul className="flex justify-center">
              <li className="dark:text-gray-200">
                {darkMode? <BsSunFill onClick={handleClick} className=" cursor-pointer text-2xl"/> : <BsFillMoonStarsFill onClick={handleClick} className=" cursor-pointer text-2xl"/>}
              </li>
              <li>
                
              </li>
            </ul>
          </nav>

          <div className=" text-center p-5 md:p-10">
            <h2 className=" text-4xl mt-1 py-3 text-cyan-800 font-medium md:text-6xl md:mt-28">Badal Chowdhary</h2>
            <h3 className=" text-md py-2 md:text-2xl dark:text-gray-200">Software Engineer Fresher</h3>
            <p className=" text-sm md:text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat aut delectus tempora sit labore? Doloremque cumque odio pariatur explicabo iusto debitis? Omnis possimus laboriosam rem rerum nesciunt consectetur odio.
            </p>
            
            <div className=" text-l flex justify-center py-3 text-cyan-800 dark:text-gray-200 md:text-3xl md:gap-8">
              {/* <AiFillGithub/>
              <AiFillLinkedin/>
              <AiFillMail/> */}
              <a href="https://drive.google.com/file/d/1AEMWYrzNnD3k_7sBgMhQQAev846j_04H/view?usp=sharing" target="blank" className=" bg-cyan-500 text-white px-2 py-2 rounded-md ml-8">
                Resume
              </a>
              <a href="https://drive.google.com/file/d/1oXpuSl9cER6oEJxzJDwgajwM1SMC7doZ/view?usp=sharing" target="blank" className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">
                Connect
            </a>
            </div>
          </div>
          
          {/* <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profile} layout="fill" objectFit="cover"/>
          </div> */}
        </section>

          {/* Projects */}
        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-gray-200">Projects</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <span className=" text-teal-500"> Highlight </span>Laboriosam commodi optio pariatur maiores adipisci necessitatibus nemo labore nesciunt esse architecto eveniet sequi non iure natus mollitia voluptate, et id veniam.
            </p>
          </div>

          <div className="lg:flex gap-10">
            {projects.map((item) => (
              <div key={item.id}>
                <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image src={car} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2 text-teal-600">{item.title}</h3>
              <p className="py-3">
                {item.desc}
              </p>
              <span className=" py-4 text-teal-600">Tech Stack : </span>
              <span>{item.stack}</span>
              <div className=" text-3xl flex justify-center gap-10 py-5 text-gray-600">
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

        {/* Experience  and Education*/}
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet <span className=" text-teal-500"> ABCD </span>consectetur, adipisicing elit. Sed quaerat cum rem at! Reprehenderit provident earum adipisci temporibus quidem accusamus magnam laudantium, animi consequatur molestias, odit beatae quae cumque minima?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100'} height={'100%'} layout="responsive"/>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image src={car} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>

       {/* Footer */}
      </main>
      <section className=" bg-teal-600">
          <nav className=" p-10 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-gray-200">Badal Chowdhary</h1>
            <ul className="flex justify-center">
              <li className="dark:text-gray-200">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/>
              </li>
              <li>
                <a href="#" className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          </section>
    </div>
  );
}
