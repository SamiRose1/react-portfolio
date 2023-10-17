import React from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_swkzyum",
        "template_77fh79v",
        form.current,
        "R-UoQroTv8l2P5b-K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="h-[80vh] flex justify-center items-center">
      <div className="  bg-slate-500 w-fit flex items-center justify-center rounded-2xl shadow-xl shadow-neutral-600 bg-opacity-50 text-white text-xl font-extralight h-fit">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-black flex justify-around items-center flex-col  h-2/3 "
        >
          <label>Name</label>
          <input
            type="text"
            className="text-black rounded-2xl p-1 w-[70%]"
            name="user_name"
            placeholder="enter your name"
          />
          <label>Email</label>
          <input
            type="email"
            className="text-black rounded-2xl p-1 w-[70%]"
            name="user_email"
            placeholder="enter your email"
          />
          <label>Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="text-black rounded-xl p-1 w-[80%] max-h-[50%]"
            placeholder="enter your message"
          />
          <button
            value="Send"
            type="submit"
            className="p-2 bg-black rounded-lg mt-2 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
