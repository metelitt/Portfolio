import React from "react";
import { Tailwind } from "@react-email/tailwind";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight">
                  Ты получил сообщение от контактной формы
                </Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>Отправитель письма: {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}

export default ContactFormEmail;
