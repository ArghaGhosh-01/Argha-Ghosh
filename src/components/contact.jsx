import React from "react";

const ContactForm = () => {
    return (
        <form className="bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md px-8 pt-6 pb-8 mb-4 rounded-lg lg:mx-60 sm:mx-6 mt-10 border border-white form_glow">
            <div className="mb-4">
                <label
                    className="block text-green-500 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Name{" "}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    id="name"
                    type="text"
                    placeholder="Argha Ghosh"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-green-500 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    id="email"
                    type="email"
                    placeholder="argha@example.com"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-green-500 text-sm font-bold mb-2"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    id="message"
                    rows="7"
                    placeholder="Your message here"
                ></textarea>
            </div>
            <div className="flex items-center justify-center sm:justify-between">
                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    type="button"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
