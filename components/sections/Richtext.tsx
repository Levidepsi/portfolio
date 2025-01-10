"use client";

import {PortableText} from "@portabletext/react";

const Richtext = ({title, bgcolor, text_color, description}: any) => {
  return (
    <div
      style={{
        background: `${bgcolor}`,
      }}
      className="py-[50px] lg:py-[70px] px-5 ">
      <div className="lg:w-full lg:max-w-[50%] lg:ml-[auto]">
        {title && (
          <h1
            style={{
              color: `${text_color}`,
            }}
            className="mb-[20px]">
            {title}
          </h1>
        )}
        <PortableText value={description} />
      </div>
    </div>
  );
};

export default Richtext;
