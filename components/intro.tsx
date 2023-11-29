"use client";
import Image from "next/image";
import React from "react";
import Myphoto from "../public/my photo.jpg";
import { motion } from "framer-motion";
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
          <motion.span className="absolute bottom-0 right-0 text-4xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness:125,delay:0.1,duration:0.7}}
          
          >✌️</motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Привет, меня зовут Ринат.</span> Моя профессия это{" "}
        <span className="font-bold">full-stack developer.</span> Мой опыт работы перевалил уже за{" "}
        <span className="font-bold">2 года</span> Мне нравится 
        создавать <span className="italic">сайты и приложения</span>. Мой основной стек-{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
