"use client";
import { useWindowWide } from "@/hooks/ScreenSize";
import "./twocolrichtext.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import { inView } from "motion";

type LeftCont = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

type RightCont = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface TwoColRichtextProps {
  title: string;
  padding_top: number;
  padding_bottom: number;
  margin_top: number;
  margin_bottom: number;
  background_color: string;
  tableData: any;
  add_border_bottom: boolean;
  left_content: LeftCont[];
  right_content: RightCont[];
}

const TwoColRichtext: React.FC<TwoColRichtextProps> = ({
  title,
  padding_top,
  padding_bottom,
  margin_top,
  margin_bottom,
  background_color,
  left_content,
  right_content,
  tableData,
  add_border_bottom,
}) => {
  const sectionPT: number = padding_top;
  const desktop = useWindowWide(1024);

  return (
    <div
      style={{
        backgroundColor: background_color,
      }}
    >
      <div
        className={`two-col-rich--section mx-[15px] md:mx-[47px] flex lg:flex-row flex-col justify-between ${add_border_bottom ? "add-border-bottom" : ""}`}
        style={{
          paddingTop: `${padding_top}px`,
          paddingBottom: `${padding_bottom}px`,
          marginTop: `${margin_top}px`,
          marginBottom: `${margin_bottom}px`,
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
          className={`two-col-rich-left ${!left_content || left_content.length === 0 ? "no-content" : ""}`}
        >
          {title?.trim() && <h2 className="left-title">{title}</h2>}
          <div className="left-body-content">
            <PortableText value={left_content} />
          </div>
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
          className="two-col-rich-right"
        >
          <div className="right-body-content">
            {tableData &&
              tableData.some(
                (item: any) => item.column1 || item.column2 || item.column3
              ) && (
                <div className="table-content">
                  {tableData &&
                    tableData.map((item: any, index: number) => {
                      return (
                        <div className="table-row" key={index}>
                          <div className="table-col table-col-1">
                            {item.column1}
                          </div>
                          <div className="table-col table-col-2">
                            {item.column2}
                          </div>
                          <div className="table-col table-col-3">
                            {item.column3}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            <PortableText value={right_content} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TwoColRichtext;
