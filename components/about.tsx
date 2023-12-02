"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About () {
  const {ref}=useSectionInView('Обо мне',0.75 )
  return (
<motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
ref={ref}
initial={{opacity:0,y:0}}
animate={{opacity:1,y:0}}
transition={{delay:0.175}}
id="about"
>
    <SectionHeading>Обо мне</SectionHeading>
    <p className="mb-3">
  Я студент КНИТУ-КАИ кафедры{" "}
  <span className="font-medium">Лазерных и аддитивных технологий</span>, но я решил, что свою жизнь хочу связать с разработкой. Я записался на курсы и стал изучать{" "}
  <span className="font-medium">full-stack веб-разработку</span>.{" "}
  <span className="italic">Моя любимая часть в программировании</span> - это решение сложных задач и устранение проблем. Мне <span className="underline">нравится</span>, когда код написан корректно, и все ошибки исправлены. Стек моих технологий - 
  <span className="font-medium">
    React, Redux Toolkit, Next.js, Node.js и MongoDB
  </span>. Также я изучаю TypeScript и Prisma. Я всегда пытаюсь учить что-то новое и двигаться в ногу со временем. В данный момент я открыт для {" "}
  <span className="font-medium">работы </span>как software
  developer.
</p>

<p>
  <span className="italic">Помимо разработки</span>, я увлекаюсь футболом, занимаюсь в тренажерном зале и тренирую свой интеллект в шахматах. Мне нравится {" "}
  <span className="font-medium">узнавать новое о нашем мире</span>. Я часто
  читаю и изучаю{" "}
  <span className="font-medium">исторические книги</span>. А еще я очень люблю музыку.
</p>
</motion.section>
  )
}
