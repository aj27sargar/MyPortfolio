import React, { useState } from "react";
import Container from "../components/Container";
import ContactMe from "../assets/contactMe.png";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // EmailJS configuration
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(
                "service_pty4mo3", // Your EmailJS Service ID
                "template_2jnw0fq", // Your EmailJS Template ID
                templateParams,
                "1HQ3bb3yMxGDjzsvS" // Your EmailJS Public Key
            );
            toast.success("Thank you for reaching out. I will get back to you soon.");
        } catch (error) {
            console.error(error);
            toast.error("Error while sending your message. Please try again.");
        } finally {
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <>
            <Container>
                <div id="contact" className="w-full flex flex-col items-center gap-4" data-aos="fade-up">
                    <div className="w-full flex justify-center text-2xl font-thin my-6">
                        <h1 className="text-4xl md:text-4xl font-bold text-sky-500">Contact</h1>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[50%]">
                            <img src={ContactMe} alt="Contact" />
                        </div>
                        <div className="w-full md:w-[50%] bg-sky-100 p-6 rounded-lg shadow-md border-2 border-sky-500">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-md my-2 font-medium text-sky-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-md my-2 font-medium text-sky-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-md my-2 font-medium text-sky-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-sky-500 text-white rounded-lg font-bold hover:bg-sky-600"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
