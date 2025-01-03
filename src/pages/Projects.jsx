import React, { useEffect, useRef } from 'react';
import Container from '../components/Container';
import AiVideo from "../assets/trailBall5.mp4";
import tourismVideo from "../assets/trailBall4.mp4";
import MovieVideo from "../assets/trailBall3.mp4";

// Reusable VideoPlayer Component
const VideoPlayer = ({ src, threshold = 0.5 }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        videoElement.play(); // Auto-play video
                    } else {
                        videoElement.pause(); // Pause video
                    }
                },
                { threshold } // Trigger when visible at this percentage
            );

            observer.observe(videoElement);

            return () => {
                observer.unobserve(videoElement); // Cleanup observer
            };
        }
    }, [threshold]);

    return (
        <video
            className="w-[100%] md:w-[600px]"
            muted
            loop
            controls
            playsInline
            ref={videoRef}
            loading="lazy" // Lazy loading for performance
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag. <a href={src}>Download the video</a>.
        </video>
    );
};

// Main Projects Component
function Projects() {
    return (
        <Container>
            <div id="projects" className="w-full flex flex-col items-center">
                <div className="w-full flex justify-center text-2xl font-thin my-4">
                    <h1 className="text-4xl md:text-4xl font-bold text-sky-500">Projects</h1>
                </div>

                <div className="flex flex-col justify-center items-center" data-aos="fade-right">
                    {/* AI Video */}
                    <div className="w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4" data-aos="fade-right">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold">AI Powered Legal Advisor</h1>
                            <p className="w-full md:w-[90%] text-wrap text-justify text-md md:text-lg">
                                A chatbot that provides legal advice, generates documents, and assists in understanding legal concepts. Built with React and AI models.<br />
                                Equipped with Natural Language Processing (NLP) to understand user queries in plain English and provide accurate responses.<br />
                                Creates various legal documents such as contracts, agreements, and affidavits with ease and precision, reducing manual effort.
                            </p>
                            <div className="flex w-full gap-4">
                            
                                <a href="https://github.com/aj27sargar/AI-Based-Legal-Adviser.git" target="_blank" rel="noopener noreferrer">
                                    <div className="text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white">Source Code</div>
                                </a>
                            </div>
                        </div>
                        <VideoPlayer src={AiVideo} />
                    </div>
                    

                    {/* Tourism-App */}
                    <div className="w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4" data-aos="fade-right">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold">Tourism-App</h1>
                            <div className="flex flex-wrap gap-4 text-gray-900">
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">React.js</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">MongoDB</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">Express.js</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">Node.js</div>
                            </div>
                            <p className="w-full md:w-[90%] text-wrap text-justify text-md md:text-lg">
                                Login/Signup: Secure user authentication ensures personalized experiences, such as saving bookings and reviews.<br />
                                Tours and Tour Details: Showcases a list of tours with detailed descriptions, pricing, and availability.<br />
                                User Reviews and Comments: Users can leave reviews and comments on tour packages to share their experiences.<br />
                                Responsive Design: The app is optimized for various devices, offering a smooth experience on desktops, tablets, and smartphones.
                            </p>
                            <div className="flex w-full gap-4">
                            <a href="https://tourism-app-flame.vercel.app/" target="_blank">
                                        <div className='text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white'>Live Demo</div>
                                    </a>
                                <a href="https://github.com/aj27sargar/Tourism-App.git" target="_blank" rel="noopener noreferrer">
                                    <div className="text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white">Source Code</div>
                                </a>
                            </div>
                        </div>
                        <VideoPlayer src={tourismVideo} />
                    </div>

                    {/* Movie Recommendation System */}
                    <div className="w-full md:w-[90%] flex flex-col-reverse md:flex-row gap-10 py-6 px-4 my-4" data-aos="fade-right">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold">Movie Recommendation System</h1>
                            <div className="flex flex-wrap gap-4 text-gray-900">
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">ML</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">Python</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">Streamlit</div>
                                <div className="text-sm font-bold bg-sky-500 text-white px-4 md:px-6 py-2">Express.js</div>
                            </div>
                            <p className="w-full md:w-[90%] text-wrap text-justify text-md md:text-lg">
                                Personalized Recommendations: Suggests movies tailored to the user's interests, preferences, and past interactions.<br />
                                Collaborative Filtering: Uses machine learning techniques to recommend movies based on the preferences of similar users.<br />
                                Trending and Popular Movies: Displays a list of trending and highly-rated movies for users to discover popular content.
                            </p>
                            <div className="flex w-full gap-4">
                                <a href="https://github.com/aj27sargar/Movie-Recommendation-System.git" target="_blank" rel="noopener noreferrer">
                                    <div className="text-sm font-bold border-2 border-sky-500 text-sky-500 px-2 py-2 md:px-6 md:py-2 hover:bg-sky-500 hover:text-white">Source Code</div>
                                </a>
                            </div>
                        </div>
                        <VideoPlayer src={MovieVideo} />
                    </div>

                    <a href="https://github.com/aj27sargar">
                        <button className="bg-sky-500 text-white px-4 py-2 hover:bg-sky-600">More</button>
                    </a>
                </div>
            </div>
        </Container>
    );
}

export default Projects;
