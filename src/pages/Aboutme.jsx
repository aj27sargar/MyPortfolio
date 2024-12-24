import React from 'react'
import Container from '../components/Container'
function Aboutme() {
    return (
        <>
            <Container>
                <section id="about" className='mt-[50px] my-2 flex flex-col items-center '>

                    <div className='w-full flex justify-center text-2xl font-thin  my-6'>
                        <h1 className='text-4xl md:text-4xl font-bold text-button'>About me</h1>
                    </div>

                    <div className='flex flex-col md:flex-row '>

                        


                        {/* right part */}
                        <div className='flex flex-col justify-center  items-center md:items-start gap-4 w-full'>

                            <h1 className=' text-2xl md:text-4xl font-bold'>
                                Ajit Sargar
                            </h1>

                            <span className='text-button bg-secodary px-4 py-1 rounded-md border-2 border-border'>web developer</span>

                            <p className=' w-full md:w-[70%] text-md text-justify'>
                            Hi! I’m Ajit Sargar, a passionate Full Stack Developer from India. I specialize in creating efficient and user-friendly web applications using technologies like React, Node.js, and MongoDB. With a strong foundation in problem-solving and a keen interest in AI, I strive to deliver innovative solutions that make an impact. Let’s create something amazing together!
                            </p>

                            <button className=' w-[50%] md:w-[20%] py-2 px-4 rounded-md bg-button text-white text-sm md:font-semibold '>
                                {`Resume`}
                            </button>
                        </div>
                    </div>

                </section>
            </Container>
        </>
    )
}

export default Aboutme