'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function Contact() {
    const {ref}=useSectionInView('Контакты',0.5 )
  return (
    <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    viewport={{
        once:true
    }}
    >
      <SectionHeading>Контакты</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Cвяжитесь со мной через почту{" "}
        <a className="underline" href="mailto:mavlyutov-1999@inbox.ru">
          mavlyutov-1999@inbox.ru
        </a>{" "}
        или через форму.
      </p>
      <form action="submit" className="mt-10 flex flex-col ">
        <input type="email" className="h-14 px-4 rounded-lg borderBlack" placeholder="Ваш email"/>
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Ваше сообщение"/>
        <button
          type="submit"
          className="group flex items-center h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none translate-all justify-center gap-2 active:scale-105 focus:scale-110 hover:scale-105 hover:bg-gray-950"
        >
          Отправить{" "}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
