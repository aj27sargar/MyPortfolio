import React from 'react';
import wavinghand from "../assets/wavinghand.gif";
import Container from '../components/Container';
import { TypeAnimation } from 'react-type-animation';
import Ajit from "../assets/MyPhoto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function LandingPage() {
    return (
        <>
            <Container>
                <section id="home" className='mt-[20%] flex flex-col-reverse justify-center gap-2 md:flex-row md:mt-[10%]'>
                    {/* left part */}
                    <div className='flex flex-col justify-center gap-4 w-full md:w-[50%]' data-aos="fade-right">
                        <h1 className='flex items-center'>
                            <img src={wavinghand} alt="wavinghand" className='w-8' />
                            <p className='text-xl md:text-2xl text-sky-500'>Hey!</p>
                        </h1>
                        <h1 className='text-4xl md:text-6xl font-bold text-sky-500'>
                            I'm Ajit Sargar
                        </h1>
                        <h1 className='text-xl md:text-2xl'>
                            I am
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer.',
                                    2000,
                                    'Problem Solver.',
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    color: "#00BFFF",
                                    fontStyle: "bold",
                                    fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.5rem',
                                    lineHeight: "1rem",
                                    marginLeft: "10px",
                                    display: 'inline-block',
                                }}
                            />
                        </h1>
                        <div className='flex gap-4'>
                            <a
                                href="https://github.com/aj27sargar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className='size-6 text-sky-500 hover:text-sky-600' />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ajit-sargar-495a1a253/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className='size-6 text-sky-500 hover:text-sky-600' />
                            </a>

                            <a
                                href="https://leetcode.com/u/ajitsargar/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLeetcode className="size-6 text-sky-500 hover:text-sky-600" />
                            </a>
                        </div>
                        <p className='w-full md:w-[70%] text-md text-justify text-white'>
                            I’m a passionate Full Stack Developer from India. I specialize in creating efficient and user-friendly web applications using technologies like React, Node.js, and MongoDB. With a strong foundation in problem-solving and a keen interest in AI, I strive to deliver innovative solutions that make an impact. Let’s create something amazing together!
                        </p>

                        <a
                            href="https://drive.google.com/file/d/1SnPvrPx3Wmpjtd0Z0wIejRUkcNdZeLit/view?usp=drive_linkk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-sky-500 text-white font-bold md:font-semibold border-2 border-sky-600 hover:bg-sky-600'>
                                Resume
                            </button>
                        </a>
                    </div>

                    {/* right part */}
                    <div className='flex items-center justify-center my-4' data-aos="fade-left">
                        <img src={Ajit} alt="avatar" className='rounded-full w-[200px] md:w-[300px] border-4 border-sky-500' />
                    </div>
                </section>
            </Container>
        </>
    );
}

export default LandingPage;
