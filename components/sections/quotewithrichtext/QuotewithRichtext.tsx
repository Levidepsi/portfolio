"use client";
import { useWindowWide } from "@/hooks/ScreenSize";
import "./quotewithrichtext.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import { inView } from "motion";
import Link from "next/link";

type Body = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

type Quote = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface QuotewithRichtextProps {
  title: string;
  background_color: string;
  body: Body[];
  button_label: string;
  button_url: string;
  quote_content: Quote[];
  padding_top: number;
  padding_bottom: number;
}

const QuotewithRichtext: React.FC<QuotewithRichtextProps> = ({
  title,
  body,
  quote_content,
  background_color,
  button_url,
  button_label,
  padding_top,
  padding_bottom,
}) => {
  const sectionPT: number = padding_top;
  const desktop = useWindowWide(1024);

  return (
    <div
      className={`quote-with-richtext--section px-[15px] md:px-[47px] flex flex-col justify-between`}
      style={{
        backgroundColor: background_color,
        paddingTop: `${padding_top}px`,
        paddingBottom: `${padding_bottom}px`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className="quote-container"
      >
        <PortableText value={quote_content} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className="richtext-container"
      >
        <h2>{title}</h2>
        <div className="body-container">
          <PortableText value={body} />
        </div>
        <Link className="button" href={`${button_url}`}>
          <span>{button_label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_27_"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default QuotewithRichtext;
