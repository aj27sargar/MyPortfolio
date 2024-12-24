import React from 'react';
import Container from '../components/Container';

const TimelineItem = ({ title, organization, duration, description }) => {
    return (
        <li className="mb-10 ms-4" data-aos="fade-left">
            <div className="absolute w-6 h-6 rounded-full mt-1.5 -start-8 border border-white bg-sky-500"></div>
            <time className="mb-1 text-md font-normal leading-none">{duration}</time>
            <h3 className="text-xl my-2 font-semibold text-sky-500">{title}</h3>
            <span className="text-md font-thin">{organization}</span>
            <ul className="mb-4 text-sm text-justify font-normal list-disc list-inside md:text-md">
                {description.map((desc, index) => (
                    <li key={index} className="my-2">{desc}</li>
                ))}
            </ul>
        </li>
    );
};

const Certifications = () => {
    const certificationsData = [
        {
            title: "AWS Academy Data Analytics",
            organization: "AWS Academy",
            duration: "June 2022 – Aug 2022",
            description: [
                "Completed a comprehensive course on data analytics, covering topics like data analysis, visualization, and interpretation.",
                "Learned how to use AWS tools and services to perform data analytics tasks efficiently.",
            ],
        },
        {
            title: "Data Analytics Virtual Internship",
            organization: "AICTE",
            duration: "May 2023 – July 2023",
            description: [
                "Gained hands-on experience in data preprocessing, visualization, and analysis using modern tools and techniques.",
                "Worked on real-world datasets to derive actionable insights and improve decision-making.",
            ],
        },
        {
            title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
            organization: "Amazon Web Services (AWS)",
            duration: "",
            description: [
                "Developed foundational knowledge in cloud computing, covering AWS core services and concepts.",
                "Learned how to leverage cloud technologies for scalable and cost-effective solutions.",
            ],
        },
        {
            title: "React and Redux Certification Test",
            organization: "KG CODING",
            duration: "September 2024",
            description: [
                "Completed a certification test to demonstrate proficiency in React and Redux for building modern web applications.",
                "Gained skills in state management, component architecture, and building dynamic user interfaces.",
            ],
        },
        {
            title: "TCS iON Career Edge – Young Professional",
            organization: "Tata Consultancy Services (TCS)",
            duration: "July 2024",
            description: [
                "Developed foundational skills in professional etiquette, communication, and critical thinking, preparing for entry-level professional roles.",
            ],
        },
        {
            title: "Responsive Web Design Developer Certification",
            organization: "freeCodeCamp",
            duration: "December 2024",
            description: [
                "Completed a comprehensive course on responsive web design, mastering CSS flexbox, grid layouts, and accessibility principles.",
                "Learned how to create websites that work seamlessly across devices of all sizes.",
            ],
        },
    ];

    return (
        <Container>
            <div id="certifications" className="w-full md:w-[50%] my-6 flex flex-col items-center gap-4" data-aos="fade-up">
                <div className="w-full flex justify-center text-2xl font-thin my-4">
                    <h1 className="text-4xl md:text-4xl font-bold text-sky-500">Certifications</h1>
                </div>
                <ol className="relative border-s-4 border-sky-300">
                    {certificationsData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            organization={item.organization}
                            duration={item.duration}
                            description={item.description}
                        />
                    ))}
                </ol>
            </div>
        </Container>
    );
};

export default Certifications;
