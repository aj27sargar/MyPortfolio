import React, { useState } from 'react';
import Container from '../components/Container';
import ReactImg from "../assets/react.png";
import MaterialImg from "../assets/materialUI.png";
import ReduxImg from "../assets/redux.png";
import htmlImg from "../assets/html.png";
import tailwindcssImg from "../assets/tailwindcss.png";
import cssImg from "../assets/css.png";
import nodeImg from "../assets/node-js.png";
import mysqlImg from "../assets/mysql-logo.png";
import mongodbImg from "../assets/mongodb.png";
import expressImg from "../assets/express-js.png";
import gitImg from "../assets/git.png";
import awsImg from "../assets/aws.png";
import powerbiImg from "../assets/powerbi.png";
import javaImg from "../assets/java.png";
import pythonImg from "../assets/python.png";
import jsImg from "../assets/javascript.png";
import daisyuiImg from "../assets/daisyui.png";

const data = [
    { id: 1, imageUrl: javaImg, tag: "languages", text: "Java" },
    { id: 2, imageUrl: pythonImg, tag: "languages", text: "Python" },
    { id: 3, imageUrl: jsImg, tag: "languages", text: "JavaScript" },
    { id: 4, imageUrl: htmlImg, tag: "languages", text: "HTML" },
    { id: 5, imageUrl: cssImg, tag: "languages", text: "CSS" },
    { id: 6, imageUrl: ReactImg, tag: "frameworks", text: "React" },
    { id: 7, imageUrl: nodeImg, tag: "frameworks", text: "Node.js" },
    { id: 8, imageUrl: expressImg, tag: "frameworks", text: "Express.js" },
    { id: 9, imageUrl: tailwindcssImg, tag: "frameworks", text: "Tailwind CSS" },
    { id: 10, imageUrl: daisyuiImg, tag: "frameworks", text: "DaisyUI" },
    { id: 11, imageUrl: mongodbImg, tag: "databases", text: "MongoDB" },
    { id: 12, imageUrl: mysqlImg, tag: "databases", text: "SQL" },
    { id: 13, imageUrl: gitImg, tag: "tools", text: "Git" },
    { id: 14, imageUrl: awsImg, tag: "tools", text: "AWS" },
    { id: 15, imageUrl: powerbiImg, tag: "tools", text: "Power BI" },
];

function Skills() {
    const [clicked, setClicked] = useState("languages");

    return (
        <>
            <Container>
                <div id="skills" className='w-full h-[80%] flex flex-col items-center gap-4' data-aos="fade-up">
                    <div className='w-full flex justify-center text-2xl font-thin my-4'>
                        <h1 className='text-4xl md:text-4xl font-bold text-sky-500'>Technical Skills</h1>
                    </div>

                    <div className='w-auto bg-sky-100 flex justify-around md:gap-4 py-2 px-2 border-2 border-sky-300 rounded-md'>
                        <button
                            className={`w-[50%] py-2 px-6 rounded-md hover:bg-sky-500 hover:text-white text-sm md:font-semibold ${
                                clicked === "languages" ? "bg-sky-500 text-white" : "text-sky-500"
                            }`}
                            onClick={() => setClicked("languages")}
                        >
                            Languages
                        </button>
                        <button
                            className={`w-[50%] py-2 px-6 rounded-md hover:bg-sky-500 hover:text-white text-sm md:font-semibold ${
                                clicked === "frameworks" ? "bg-sky-500 text-white" : "text-sky-500"
                            }`}
                            onClick={() => setClicked("frameworks")}
                        >
                            Frameworks/Libraries
                        </button>
                        <button
                            className={`w-[50%] py-2 px-6 rounded-md hover:bg-sky-500 hover:text-white text-sm md:font-semibold ${
                                clicked === "databases" ? "bg-sky-500 text-white" : "text-sky-500"
                            }`}
                            onClick={() => setClicked("databases")}
                        >
                            Databases
                        </button>
                        <button
                            className={`w-[50%] py-2 px-6 rounded-md hover:bg-sky-500 hover:text-white text-sm md:font-semibold ${
                                clicked === "tools" ? "bg-sky-500 text-white" : "text-sky-500"
                            }`}
                            onClick={() => setClicked("tools")}
                        >
                            Tools
                        </button>
                    </div>

                    {/* Grid */}
                    <div className='grid grid-cols-3 w-full md:grid-cols-4 md:w-[50%] gap-10 my-4'>
                        {data
                            .filter((item) => item.tag === clicked)
                            .map((ele) => (
                                <div className='flex flex-col items-center gap-2' key={ele.id}>
                                    <img src={ele.imageUrl} alt={ele.text} className='size-16 bg-sky-100 p-2 rounded-full border-2 border-sky-300' />
                                    <h1 className='text-sky-500'>{ele.text}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Skills;
