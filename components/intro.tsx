"use client";
import Image from "next/image";
import React from "react";
import Myphoto from "../public/my photo.jpg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaInstagram, FaGithubSquare, FaTelegram } from "react-icons/fa";
import Link from "next/link";
export default function Intro() {
  return (
    <section className="mb-2 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Myphoto}
              alt="Metelitt"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Привет, меня зовут Ринат.</span> Моя
        профессия это <span className="font-bold">full-stack developer.</span>{" "}
        Мой опыт работы перевалил уже за{" "}
        <span className="font-bold">2 года.</span> Мне нравится создавать{" "}
        <span className="italic">сайты и приложения</span>. Мой основной стек
        состоит из {""}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-nine focus:scale-110 hover:scale-105 hover:bg-gray-950 transition"
        >
          Связаться со мной{" "}
          <BsArrowRight className="opacity-70  group-hover:translate-x-4 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-nine focus:scale-110 hover:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Скачать резюме{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer" href="https://www.instagram.com/metelitt/" target="_blank">
          <FaInstagram />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer"href="https://github.com/metelitt" target="_blank">
          <FaGithubSquare/>
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer"
          href="tg://resolve?domain=metelitt" target="_blank"
        >
          <FaTelegram />
        </a>
      </motion.div>
    </section>
  );
}
