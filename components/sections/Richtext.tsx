"use client";

import {PortableText} from "@portabletext/react";
import Link from "next/link";
import {useWindowWide} from "../../hooks/ScreenSize";

const Richtext = ({title, bgcolor, text_color, description}: any) => {
  return (
    <div
      style={{
        background: `${bgcolor}`,
      }}
      className="py-[50px] px-5 multiple_text_wrapper">
      {title && (
        <h1
          style={{
            color: `${text_color}`,
          }}
          className={``}>
          {title}
        </h1>
      )}
      <PortableText value={description} />
    </div>
  );
};

export default Richtext;
