"use client"

import { PortableText } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

type Profile = {
  image: string;
  name: string;
  type: string;
  description: Array<{
    _type: string;
    style?: string; 
    children?: Array<{ 
      _type: string;
      text?: string; 
        }>;
      }>;
      body_bottom: Array<{
        _key: string;
        markDefs: Array<any>;
        children: Array<{
          _type: string;
          text?: string; 
        }>;
      }>;
    };

type Props = {
  profiles: Array<Profile>;
  background_color: string; // Add background color
};


const People: React.FC<Props> = ({ profiles, background_color }) => {
  let bg: string = background_color

  const [open, setOpen] = useState(null);

  const handleToggle = (index: any) => {
    setOpen(open == index ? null : index);
  };

      console.log("opened")

  useEffect(() => {
    const html = document.documentElement; 
    if (open != null) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }
}, [open]);
  return (
    <div>
      <div className={`bg-[${bg}] px-[18px] pt-[21px] pb-[70px] gap-x-[24px] gap-y-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {profiles && profiles.map((profile:
          {
            image: string
            name: string
            type: string
            description: Array<{
          _type: string;
          style?: string; 
          children?: Array<{ 
            _type: string;
            text?: string; 
              }>;
            }>;
            body_bottom: Array<{
              _key: string;
              markDefs: Array<any>;
              children: Array<{
                _type: string;
                text?: string; 
              }>;
            }>;
          }, index: number) => {
          return (
            <div  className=" overflow-hidden cursor-pointer" key={index}>
              <div onClick={() => handleToggle(index)} className="profile_wrapper">
                <Image src={profile.image} alt={profile.name} width={1000} height={1000} className="object-cover w-full h-auto" />
              <div className="flex justify-between gap-x-5 pt-[16px]">
                <span className="text-[#EFEBE5] text-[13px] leading-[19px] tracking-[1.56px] avenir_book">{profile.name}</span>
                <span className="text-[#EFEBE5] text-[13px] leading-[19px] tracking-[1.56px] avenir_book">{profile.type}</span>
              </div>
              </div>
              <div className={`overflow-y-scroll pb-[100px] px-[20px] bg-[${bg}] w-full h-full fixed top-0 transition-all duration-[0.7s] left-0 ${open == index ? "z-[9999] opacity-[1] visible" : "z-0 opacity-0 invisible"}  justify-between`}>
                <div onClick={() => setOpen(null)} className="x-shape"></div>
                <div className="flex">
                  <div className="lg:w-[50%] flex flex-col justify-between">
                  <div className="flex flex-col gap-y-5 pt-[16px]">
                    <span className="text-[#EFEBE5] text-[65px] leading-[56px] tracking-[1.3px] uppercase boing_thin">{profile.name}</span>
                    <span className="text-[#EFEBE5] text-[13px] leading-[14px] uppercase tracking-[1.56px] avenir_book">{profile.type}</span>
                  </div>
                  <div className="max-w-[451px] [&>p]:text-[#EFEBE5] text-[15px] tracking-[0.2px] leading-[22px] avenir_book">
                    {profile.description ? (
                      <PortableText value={profile.description} />
                  ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="lg:w-[50%]">
                  <Image src={profile.image} alt={profile.name} width={1000} height={1000} className="object-cover w-full h-auto " />
                    </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default People;
