import React from 'react';
import Container from '../components/Container';
import movie from "../assets/movie.png";
import tourism from "../assets/tourism.png";

function Projects() {
    return (
        <>
            <Container>
                <div id="projects" className='w-full flex flex-col items-center'>
                    <div className='w-full flex justify-center text-2xl font-thin my-4'>
                        <h1 className='text-4xl md:text-4xl font-bold text-sky-500'>Projects</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="fade-right">
                        {/* Tourism-App */}
                        <div className='w-full md:w-[90%] flex flex-col-reverse items-center md:flex-row gap-10 py-6 px-4 my-4'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'>Tourism-App</h1>
                                <div className='flex flex-wrap gap-4 text-gray-900'>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>React.js</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>MongoDB</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Express.js</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Node.js</div>
                                </div>

                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'>
                                    Login/Signup: Secure user authentication ensures personalized experiences, such as saving bookings and reviews.<br />
                                    Tours and Tour Details: Showcases a list of tours with detailed descriptions, pricing, and availability. Users can view specific tour details.<br />
                                    User Reviews and Comments: Users can leave reviews and comments on tour packages to share their experiences.<br />
                                    Responsive Design: The app is optimized for various devices, offering a smooth experience on desktops, tablets, and smartphones.
                                </p>
                                <div className='flex w-full gap-4'>
                                    <a href="https://github.com/aj27sargar/Tourism-App.git" target="_blank" rel="noopener noreferrer">
                                        <div className='text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white'>Source Code</div>
                                    </a>
                                </div>
                            </div>
                            <img src={tourism} alt="Tourism App" className='w-[100%] md:w-[600px]' data-aos="fade-left" />
                        </div>

                        {/* Movie Recommendation System */}
                        <div className='w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4' data-aos="fade-right">
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'>Movie Recommendation System</h1>
                                <div className='flex flex-wrap gap-4 text-gray-900'>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>ML</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Python</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Streamlit</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Express.js</div>
                                </div>

                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'>
                                    Personalized Recommendations: Suggests movies tailored to the user's interests, preferences, and past interactions.<br />
                                    Collaborative Filtering: Uses machine learning techniques to recommend movies based on the preferences of similar users.<br />
                                    Trending and Popular Movies: Displays a list of trending and highly-rated movies for users to discover popular content.
                                </p>
                                <div className='flex w-full gap-4'>
                                    <a href="https://github.com/aj27sargar/Movie-Recommendation-System.git" target="_blank" rel="noopener noreferrer">
                                        <div className='text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white'>Source Code</div>
                                    </a>
                                </div>
                            </div>
                            <img src={movie} alt="Movie Recommendation System" className='w-[100%] md:w-[600px]' data-aos="fade-left" />
                        </div>

                        {/* BookStore-App */}
                        <div className='w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4' data-aos="fade-right">
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-4xl font-bold'>BookStore-App</h1>
                                <div className='flex flex-wrap gap-4 text-gray-900'>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>React.js</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>MongoDB</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Express.js</div>
                                    <div className='text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2'>Node.js</div>
                                </div>

                                <p className='w-full md:w-[90%] text-wrap text-justify text-md md:text-lg'>
                                    Book Browsing: Users can explore a wide range of books categorized by genre, author, or popularity.<br />
                                    Responsive Design: Optimized for use on multiple devices, including desktops, tablets, and mobile phones.
                                </p>
                                <div className='flex w-full gap-4'>
                                    <a href="https://github.com/aj27sargar/BookStore-App.git" target="_blank" rel="noopener noreferrer">
                                        <div className='text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white'>Source Code</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="https://github.com/aj27sargar">
                            <button className='bg-sky-500 text-white px-4 py-2 hover:bg-sky-600'>
                                More
                            </button>
                        </a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Projects;
