"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");
  // легкая валидация
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Неправильный адресс почты",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Неправильный текст",
    };
  }
let data
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mavlyutov269@gmail.com",
      subject: "Сообщения от контактной формы",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  }
};
("invalid email");
