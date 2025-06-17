import { motion } from "framer-motion";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xpyu1qf', 'template_ayoqcff', form.current, {
        publicKey: 'UV3nRvWglyc8R9qar',
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-20 pb-4"
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Whether you have a question, want to collaborate or just want to say hi,
          feel free to drop a message. I’ll try my best to get back to you!
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
        className="w-full max-w-xl space-y-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        ></textarea>
        <motion.button
          type='submit'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className='w-full h-10 px-4 py-2 bg-gradient-to-r from-violet-600 
          to-violet-400 hover:from-violet-700 hover:to-purple-700
          transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50'
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;