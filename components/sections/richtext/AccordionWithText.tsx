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
      </div>
      <div className="accordionData_Wrapper max-w-[800px]">
        {accordionData && accordionData.map((item: AccordionDataProp, index: number) => {
          return (
            <div
              className="accordionItem_Wrapper px-[20px]  rounded-[10px]"
              onClick={() => handleClickAcc(index)}
              key={index}>
              <div className={`flex cursor-pointer justify-between items-center accordionItemTitle_Wrapper pt-[10px] ${openAccordion == index ? "active" : ""} `}>
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
                  ">{item.title}</h3>
                <div>
                  {item.enableCheckBox && 
                    <div className={"checkBox flex items-center gap-5"}>
                        <label className="text-[10px] lg:text-[13px] leading-[25px] 2xl:text-[0.846vw] 2xl:leading-[1.628vw] forma_regular"
                            htmlFor="consent">
                          {item.subtitle}
                        </label>
                      <input type="checkbox" id="consent" defaultChecked />
                    </div>
                  }
                </div>
              </div>
              <div className={`cookieGroup_Wrapper pt-[20px] px-5 ${openAccordion == index ? "active" : ""}`}>
                {item.cookieGroups && item.cookieGroups.map((cookie: CookieGroupsProp, jindex: number) => (
                  <div key={jindex} className="mb-6">
                    <h4 className="text-xs lg:text-sm 2xl:text-[0.846vw] border-b border-[#000427] mb-2 pb-1 forma_regular">
                      {cookie.groupTitle}
                    </h4>

                    <div className="w-full overflow-auto">
                      <div className="min-w-[600px]">
                        <div className="grid grid-cols-3 gap-4 font-semibold text-sm border-b border-[#000427] pb-2">
                          <div>Name</div>
                          <div>Expiration</div>
                          <div>Function</div>
                        </div>

                        {cookie.cookies && cookie.cookies.map((cok: CookiesProp, kindex: number) => (
                          <div key={kindex} className="grid grid-cols-3 gap-4 py-2 not-last:border-b border-[#000427] ">
                            <div className="name">
                              <PortableText value={cok.name} />
                            </div>
                            <div className="expiration">
                              <PortableText value={cok.expiration} />
                            </div>
                            <div className="function">
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