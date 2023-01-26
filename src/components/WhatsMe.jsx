import React from "react";
import { useState } from "react";

const text = [
  {
    message: "messageSectionOne",
    text: "Olá, tenho interesse em saber mais sobre como posso estudar medicina na upap, se puder me informar mais sobre o assunto.",
  },
  {
    message: "messageSectionFour",
    text: "Olá, tenho interesse em me matricular e estudar na upap, se puder me orientar",
  },
  {
    message: "vestibular",
    text: "Olá, estou curioso para saber mais sobre a inscrição sem vestibular",
  },
  {
    message: "certificacion",
    text: "Olá, você pode me dar mais informações sobre os credenciamentos da universidade?",
  },
  {
    message: "reconocimiento",
    text: "Olá, você pode me dar mais informações sobre os reconhecimentos que a universidade possui?",
  },
  {
    message: "barato",
    text: "Olá, estou interessado em saber mais sobre a vida no Paraguai",
  },
  {
    message: "cutura",
    text: "Olá, estou interessado em saber mais sobre a vida no Paraguai",
  },
  {
    message: "infraestructura",
    text: "Olá, estou interessado em saber mais sobre a infraestrutura da universidade",
  },
];

function WhatsMe() {
  const [send, setSend] = useState("");

  const telNumber = "595982789647"

  const message = (message) => {
    setSend(
      text
        .filter((smsFilter) => smsFilter.message.includes(message))
        .map(
          (filteredMessage) =>
            `whatsapp://send?phone=${telNumber}&text=${filteredMessage.text}`
        )
    );
  };

  return { message, send };
}

export default WhatsMe;
