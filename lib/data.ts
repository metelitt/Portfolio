import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Главная",
    hash: "#home",
  },
  {
    name: "Обо мне",
    hash: "#about",
  },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Навыки",
    hash: "#skills",
  },
  {
    name: "Опыт",
    hash: "#experience",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Окончил курсы",
    location: "Казань,Россия",
    description:
      "Я прошел курсы full-stack разработчика в Казани. Начал создавать свои первые проекты и искать работу",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Бишкек,Кыргызстан",
    description:
      "Я начал работать в коммерческой организации связанной с IT технологиями.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Казань,Россия",
    description:
      "Сейчас я активно развиваюсь как Full-stack разработчик и работаю на фрилансе. Мой стек состоит из  React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.Я открыт для ваших вакансий и предложений.",
    icon: React.createElement(FaReact),
    date: "2021 - настоящие",
  },
] as const;

export const projectsData = [
  {
    title: "Blog-post",
    description:
      "Я работал над этим коммерческим проектом больше года.Пользователи могут общаться,оставлять комментарии и лайкать посты.",
    tags: ["React", "Next.js", "MongoDB", "Redux Toolkit", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Employees",
    description:
      "Это приложение для хранения данных сотрудников вашей фирмы.Пройдите простую аутентификацию и база данных ваших сотрудников готова.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "Веб-приложение для быстрого анализа текста. Оно показывает количество слов, количество символов и ограничения на публикации в социальных сетях.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;