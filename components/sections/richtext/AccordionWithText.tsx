"use client"

import { AccordionDataProp, CookieGroupsProp, CookiesProp } from "@/components/global/components";
import { PortableText } from "next-sanity";
import { useState } from "react";

const AccordionWithText = (
  {
    accordionData,
    title,
    description
  }
  : 
  {
    title: string;
    accordionData: AccordionDataProp[];
    description: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
  }
) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const handleClickAcc = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }
  return (
    <div className="px-[32px] lg:px-[109px]">
      <div className="accordionTitleWrapper">
        <h2>{title}</h2>
        {description && 
          <div className="max-w-[800px] description mb-5">
            <PortableText value={description} />
          </div>
        }
      </div>
      <div className="accordionData_Wrapper max-w-[900px]">
        {accordionData && accordionData.map((item: AccordionDataProp, index: number) => {
          return (
            <div
              className="accordionItem_Wrapper px-[20px]  rounded-[10px]"
              
              key={index}>
              <div
                onClick={() => handleClickAcc(index)}
                className={`flex cursor-pointer justify-between items-center accordionItemTitle_Wrapper pt-[10px] ${openAccordion == index ? "active" : ""} `}>
                <h3
                  className="
                  text-[#000427]
                  moinster_regular
                  text-[12px]
                  lg:text-[17px]
                  tracking-[1.4px]
                  leading-[29px]
                  2xl:text-[1.102vw]
                  2xl:leading-[1.888vw]
                  2xl:tracking-[0.091vw]
                  uppercase
                  ">{item.title}
                </h3>
                <div
                onClick={() => handleClickAcc(index)}

                >
                  <div className={"checkBox flex items-center gap-5"}>
                    <div
                      className="text-[10px] lg:text-[13px] leading-[25px] 2xl:text-[0.846vw] 2xl:leading-[1.628vw] forma_regular"
                      >
                        {item.subtitle}
                    </div>
                    {item.alwaysActive && 
                      <div
                      className="text-[10px] text-[#008000] lg:text-[13px] leading-[25px] 2xl:text-[0.846vw] 2xl:leading-[1.628vw] forma_regular"
                      >
                        Always Active
                    </div>
                    }
                    {item.enableCheckBox && 
                      <input type="checkbox" id="consent" />
                    } 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="18">
                      <path
                        d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
                      </path>
                    </svg>
                    </div>
                </div>
                
              </div>
              
              <div className={`cookieGroup_Wrapper pt-[20px] px-5 ${openAccordion == index ? "active" : ""}`}>
              <div className="flex flex-col lg:flex-row justify-between">
                {item.right_content && 
                    <div className="left_content lg:w-[500px]">
                      <h3>Usage</h3>
                      <div className="">
                        <PortableText value={item.right_content}/>
                    </div>
                  </div>
                  }
                  {item.left_content && 
                    <div className="right_content lg:w-[500px]">
                      <h3>Sharing data
                      </h3>
                      <div className="">
                        <PortableText value={item.left_content}/>
                    </div>
                  </div>
                }
                </div>
                {item.description && 
                  <div className="description">
                    <PortableText value={item.description}/>
                  </div>
                }
                {item.cookieGroups && item.cookieGroups.map((cookie: CookieGroupsProp, jindex: number) => (
                  <div key={jindex} className="my-6">
                    <h4 className="text-xs lg:text-sm 2xl:text-[0.846vw] border-b border-[#000427]  pb-[10px] moinster_regular">
                      {cookie.groupTitle}
                    </h4>

                    <div className="w-full overflow-auto">
                      <div className="min-w-[600px]">
                        <div className="grid grid-cols-3  border-r-[1px] border-l-[1px] border-b-[1px] border-[#000427]">
                          <div className="moinster_regular border-r-[1px] pl-[16px]  pb-2 pt-2 border-solid border-[#000427] ">Name</div>
                          <div className="moinster_regular border-r-[1px] pl-[16px] pb-2 pt-2 border-solid border-[#000427]">Expiration</div>
                          <div className="moinster_regular pl-[16px] pb-2 pt-2">Function</div>
                        </div>

                        {cookie.cookies && cookie.cookies.map((cok: CookiesProp, kindex: number) => (
                          <div key={kindex} className="grid grid-cols-3 border-r-[1px] border-l-[1px] border-b-[1px] border-[#000427] ">
                            <div className="name  border-r-[1px] pl-[16px]  pb-2 pt-2 border-solid border-[#000427] ">
                              <PortableText value={cok.name} />
                            </div>
                            <div className="expiration  border-r-[1px] pl-[16px]  pb-2 pt-2 border-solid border-[#000427]">
                              <PortableText value={cok.expiration} />
                            </div>
                            <div className="function pl-[16px]  pb-2 pt-2">
                              <PortableText value={cok.function} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccordionWithText