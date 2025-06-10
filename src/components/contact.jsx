import React, { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const [isVisible, setVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(formRef.current);
    return () => observer.unobserve(formRef.current);
  }, []);

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/YOUR_EMAIL@example.com"
      method="POST"
      className={`bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md px-8 pt-6 pb-8 mb-4 rounded-lg lg:mx-60 card-hover sm:mx-6 mt-10 border card_glow ${isVisible ? 'fade-in' : 'fade-out'}`}
    >
      <div className="mb-4">
        <label
          className="block text-cyan-400 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name{" "}
        </label>
        <input
          name="name"
          className="shadow appearance-none border border-cyan-400 rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          id="name"
          type="text"
          placeholder="Argha Ghosh"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-cyan-400 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          name="email"
          className="shadow appearance-none border border-cyan-400 rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          id="email"
          type="email"
          placeholder="argha@example.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-cyan-400 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          className="shadow appearance-none border border-cyan-400 rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          id="message"
          rows="7"
          placeholder="Your message here"
          required
        ></textarea>
      </div>

      {/* Optional: spam protection and redirect */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

      <div className="flex items-center justify-center sm:justify-between">
        <button
          className="button_visit text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pointer-cursor"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
