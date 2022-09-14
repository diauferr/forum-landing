import React from "react";

import "./styles.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const data = [
  {
    id: 0,
    question: "Acesso e autenticação",
    answer:
      "Minim occaecat id aute sint ipsum magna aute eiusmod. Velit velit ullamco ad culpa adipisicing sunt esse. Incididunt aute aliqua duis eiusmod officia anim. Quis Lorem pariatur labore sunt ex aliqua amet.",
  },
  {
    id: 1,
    question: "Pesquisa",
    answer:
      "Sit occaecat id ullamco veniam. Commodo fugiat esse voluptate dolor adipisicing ipsum ullamco esse nulla incididunt exercitation nostrud. Ullamco ex culpa amet reprehenderit. Amet laborum sunt in quis labore duis consectetur minim qui nostrud duis. Laboris elit consequat enim proident minim nisi ad cillum nulla. Irure sunt anim tempor tempor. Dolore laboris Lorem laborum minim commodo nostrud eiusmod occaecat commodo.",
  },
  {
    id: 2,
    question: "Funcionalidades",
    answer:
      "Sint irure eiusmod tempor commodo reprehenderit. Excepteur anim exercitation elit elit commodo aliqua. Aliqua cupidatat officia cillum cupidatat ex duis dolore cupidatat consectetur. Sint cillum velit exercitation sunt ullamco non nulla in exercitation velit id pariatur. Aute consectetur incididunt commodo ut ut veniam aliqua non sit nulla excepteur. Tempor tempor adipisicing cupidatat voluptate eu.",
  },
  {
    id: 3,
    question: "Glossário",
    answer:
      "Nisi incididunt eiusmod Lorem ad pariatur duis ipsum nostrud anim elit consequat occaecat. Esse in eiusmod proident mollit quis aute. Pariatur amet fugiat aliquip ea. Lorem in nulla nostrud aute sint commodo anim. Sunt eiusmod sunt consectetur aute fugiat. Minim elit laboris irure nostrud exercitation aliqua. Enim cillum voluptate aute eu esse cillum pariatur nulla pariatur Lorem.",
  },
];

export const Collapse = () => {
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.answer}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
