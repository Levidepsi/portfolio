"use client"
import {useJsApiLoader} from "@react-google-maps/api"
import Map from "./Map";
import { PortableText } from "@portabletext/react";
import "./contact.css"
import {motion} from "motion/react"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Requests, Socials } from "@/components/global/components";
import Link from "next/link";
import Image from "next/image";

const Contact = (
  {
    title,
    telephone,
    api,
    address,
    email,
    socials,
    description,
    layout,
    requests,
    image
  }
    : 
  {
    title: string;
    api: string
    telephone:Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
    address:Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
    email:Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
    description: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
    socials: Socials[];
      layout: string
      requests: Requests[];
      image:string
  }
  ) => {
  const form = useRef<any>(null);

  const [emailSent, setEmailSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_mm4n9tg`,
        `template_dy9miw4`,
        form.current,
        `hyoP__E0E9QikO5ZG`
      )
      .then(
        (result: any) => {
          console.log(result);
          setEmailSent(true);
          setHasError(false);
          return result;
        },
        (error: any) => {
          console.log(error);
          setEmailSent(false);
          setHasError(true);

          return error;
        }
      );
  };

  const [interestsValue, setInterests] = useState("")

  const [openSelect, setOpenSelect] = useState(false);


	const openCustomSelect = () => {
		setOpenSelect(!openSelect);
  };
  
  
  
  let { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: `${api}`,
    });
  
  


  return (
    <div className="px-[32px] py-[101px] lg:py-[161px]">
      
      
      {layout == "layout1"
        ?
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="contact_details lg:w-[50%] flex gap-5 justify-between md:flex-row lg:flex-col flex-col mb-[50px] ">
            <div className="md:w-[50%] lg:w-[100%] ]">
              <h1 className=" mb-[25px] text-[30px] leading-[40px] lg:text-[40px] lg:leading-[42px] text-[#0D0D0D] moinster_regular">{title}</h1>
              <div className="contact_description mb-5">
                <PortableText value={description}/>
              </div>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(50px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  easing: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className="mb-[30px]">
                <div className="telephone details mb-[10px] lg:mb-[20px]">
                  <PortableText value={telephone}/>
                </div>
                {email && 
                <div className="email details mb-[10px] lg:mb-[20px]">
                  <PortableText value={email}/>
                </div>
                }

                <div className="address details mb-[20px] lg:mb-0">
                  <PortableText value={address}/>
                </div>
              
              </motion.div>
              <div className="mb-[30px] lg:mb-[30px]">
                <h2  className="text-[20px] form_title tracking-[1.4px] leading-[29px] moinster_regular text-[#0D0D0D] mb-[14px]">FOLLOW US</h2>
                <div className="flex gap-5 items-center">
                  {socials && socials.map((soc: Socials, index: number) => {
                    console.log(soc)
                    return (
                      <Link key={index} href={soc.url ? soc.url : ""}>
                        <Image src={soc.image} alt="" width={500} height={500} className="w-[23px] h-auto"/>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="form md:w-[60%]">
              <h2 className="text-[20px] form_title text-[#0D0D0D] tracking-[1.4px] leading-[29px] m moinster_regular mb-[25px]">WRITE US</h2>
              <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className="user-info flex flex-col md:flex-row gap-[16px] mb-[30px]">
                  <div className="firstName flex flex-col md:w-[50%]">
                    <input
                      type="name"
                      name="first_name"
                      id="first_name"
                      placeholder="First Name"
                      className="border-b-[0.5px] lg:max-w-[215px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                  <div className="secondName flex flex-col md:w-[50%]">
                    <input
                      type="name"
                      name="second_name"
                      id="second_name"
                      placeholder="Second Name"
                      className="border-b-[0.5px] lg:max-w-[215px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                </div>

                <div className="user-info flex flex-col md:flex-row gap-[16px] mb-[30px]">
                  <div className="email flex flex-col md:w-[50%]">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="border-b-[0.5px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                  <div className="phoneNumber flex flex-col md:w-[50%]">
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      className="border-b-[0.5px] lg:max-w-[215px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                </div>

                <div className="interests flex flex-col lg:max-w-[215px] lg:w-[50%] relative mb-[15px]">
                    <select
                      name='interest'
                      id='interest'
                      className='hidden'
                      defaultValue={
                        requests
                          ? interestsValue?.length > 25
                            ? interestsValue?.substring(0, 25) + "..."
                            : interestsValue
                          : "Select"
                      }
                  >
                    {requests && requests.map((item: Requests, index: number) => {
                      return (
                        <option
                          className='bg-[#00042780] aktiv_regular'
                          key={index}
                          defaultValue={item.title}
                        >
                          {item.title}
                        </option>
                      )
                    })}
                  </select>
                  <div
                    onClick={openCustomSelect}
                    className='border-b-[0.5px] lg:max-w-[215px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] outline-none cursor-pointer'
                  >
                    {interestsValue
                      ? interestsValue?.length > 25
                        ? interestsValue?.substring(0, 25) + "..."
                        : interestsValue
                      : "Select"}
                  </div>
                  <div
                    className={`icon-container w-auto h-auto absolute  right-[10px] top-[5px] ${
                      openSelect ? "active" : "not-active"
                    }`}
                  >
                    <svg
                      className="w-[5.98px] rotate-[90deg]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.98"
                      height="11.343"
                      viewBox="0 0 5.98 11.343">
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
                        transform="translate(-16296.321 1662.301) rotate(-90)"
                        fill="none"
                        stroke="#00042780"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7" />
                    </svg>
                  </div>
                  <ul
                    className={`drop-down-item text-center ${
                      openSelect ? "active" : "not-active"
                    }`}
                    >
                    {requests && requests.map((item: Requests, index: number) => {
                      return (
                        <li
                          className={`text-[#00042780] hover:opacity-[1]  text-[13px] 2xl:text-[0.846vw] 2xl:leading-[1.107vw] leading-[17px] aktiv_regular opacity-[0.5] cursor-pointer p-[5px] border-r-[1px] border-l-[1px] border-b-[1px] border-solid border-[black]	`}
                          onClick={() => {
                            if (item.title !== interestsValue) {
                              setInterests(item.title);
                              setOpenSelect(false);
                            }
                          }}
                          key={index}
                        >
                          {item.title}
                        </li>
                      )
                    })}
                  
                  </ul>
                </div>
                
                <div className="message flex flex-col mb-[30px]">
                  <label className="forma_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] mb-[15px] leading-[18px] text-[#00042780]" htmlFor="">Message</label>
                  <textarea name="message" id="message" className="w-full   border-b-[0.5px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid ">

                  </textarea>
                </div>
                <button type="submit" className="text-[12px] leading-[16px] tracking-[0.24px] flex  cursor-pointer  text-[#0D0D0D] forma_regular">SUBMIT</button>
              </form>
            </div>
            <div>
            </div>
            
          </div>
          {isLoaded && 
            <div className="lg:w-[50%] rounded-[10px] map">
              <Map />
            </div>
          }
        </div>
        : layout == "layout2" 
        ?
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="contact_details lg:w-[50%] flex gap-5 justify-between lg:justify-start md:flex-row lg:flex-col flex-col mb-[50px] lg:mb-0 ">
            <div className="md:w-[50%] lg:w-[100%] mb-[50px]">
              <h1 className=" mb-[25px] text-[30px] leading-[40px] lg:text-[40px] lg:leading-[42px] text-[#0D0D0D] moinster_regular">{title}</h1>
              <div className="contact_description mb-5">
                <PortableText value={description}/>
              </div>
            </div>
            <div className="form md:w-[60%]">
              <h2 className="text-[20px] form_title text-[#0D0D0D] tracking-[1.4px] leading-[29px] m moinster_regular mb-[25px]">SIGN IN</h2>
              <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className="user-info flex flex-col md:flex-row gap-[16px] mb-[30px]">
                  <div className="firstName flex flex-col md:w-[100%] lg:w-[50%]">
                    <input
                      type="name"
                      name="first_name"
                      id="first_name"
                      placeholder="First Name"
                      className="border-b-[0.5px] lg:max-w-[215px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                  
                </div>

                <div className="user-info flex flex-col md:flex-row gap-[16px] mb-[30px]">
                  <div className="email flex flex-col md:w-[100%] lg:w-[50%]">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="border-b-[0.5px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                  </div>
                  </div>
                  
                  <div className="user-info flex flex-col md:flex-row gap-[16px] mb-[30px]">
                    <div className="email flex flex-col md:w-[100%] lg:w-[50%]">
                      <input
                        type="number"
                        name="cask_number"
                        id="cask_number"
                        placeholder="Cask Number"
                        className="border-b-[0.5px] border-[#00042780] pb-[5px] text-[#00042780] text-[13px] tracking-[0.26px] leading-[16px] border-solid outline-none forma_regular" />
                    </div>
                  </div>

                <button type="submit" className="text-[12px] leading-[16px] tracking-[0.24px] flex  cursor-pointer  text-[#0D0D0D] forma_regular">Sign in</button>
              </form>
            </div>
            </div>
            {image && 
              <div className="lg:w-[50%] h-[400px] lg:h-auto overflow-hidden rounded-[10px]">
                <Image
                src={image}
                alt=""
                width={1000}
                height={1000}
                className="
                  w-full
                  h-[400px]
                  lg:h-auto
                  object-cover
                  lg:aspect-[16/16]   // at md ≥768px (good for 1280)
                  xl:aspect-[16/16.8]   // at xl ≥1280px (for 1536)
                  2xl:aspect-[16 / 14.8]
                "
                />
              </div>
            }
            
        </div>
          :
          ""
      }
      
    </div>
  );
};

export default Contact;