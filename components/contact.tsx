"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submin-btn";
import toast from "react-hot-toast";
function Contact() {
  const { ref } = useSectionInView("Контакты", 0.5);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Контакты</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Cвяжитесь со мной через почту{" "}
        <a className="underline" href="mailto:mavlyutov-1999@inbox.ru">
          mavlyutov-1999@inbox.ru
        </a>{" "}
        или через форму.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(
              "Что то не работае,a если бы работала я бы уже был мидлом"
            );
            return;
          }
          toast.success(
            "Ваше письмо успешно отправлено.Отвечу в ближайшее время"
          );
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Ваш email"
          required={true}
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Ваше сообщение"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
