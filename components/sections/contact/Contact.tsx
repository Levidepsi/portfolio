"use client"
import {useJsApiLoader} from "@react-google-maps/api"
import Map from "./Map";
import { PortableText } from "@portabletext/react";
import "./contact.css"
import {motion} from "motion/react"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Interests } from "@/components/global/components";

const Contact = (
  {
    title,
    telephone,
    api,
    address,
    email,
    interests
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
    interests: Interests[]
  }
  ) => {

  const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: `${api}`,
  });

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

  return (
    <div className="px-[14px] lg:px-[47px]">
      <h1 className="max-w-[378px] lg:fixed mb-[50px] text-[45px] leading-[50px] lg:text-[50px] lg:leading-[58px] text-[#181818] caslon_trial_regular">{title}</h1>

      <div className="contact_details flex gap-5 justify-between md:flex-row flex-col py-[57] px-[15px] lg:px-[79] bg-[#F5F7FA]">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(50px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            easing: [0.19, 1, 0.22, 1],
          }}
          viewport={{ once: true }}
          className="md:w-[40%] lg:ml-auto">
          <div className="telephone details mb-[30px]">
            <PortableText value={telephone}/>
          </div>
          {email && 
          <div className="email details mb-[30px]">
            <PortableText value={email}/>
          </div>
          }

          <div className="address details mb-[30px]">
            <PortableText value={address}/>
          </div>
        
        </motion.div>
        <div className="form md:w-[60%]">
          <h2 className="text-black text-[14px] leading-[16px] 2xl:text-[0.911vw] 2xl:leading-[1.042vw] aktiv_medium mb-[30px]">MESSAGE US</h2>
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <div className="user-info flex flex-col lg:flex-row gap-[16px] mb-[30px]">
              <div className="email flex flex-col lg:w-[50%]">
                <label className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] mb-[10px] leading-[18px] text-black" htmlFor="">Email</label>
                <input type="email" name="email" id="email" className="border-b-[0.5px] border-solid outline-none aktiv_regular"/>
              </div>
              <div className="name flex flex-col lg:w-[50%]">
                <label className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw]  mb-[10px] leading-[18px] text-black" htmlFor="">Name</label>
                <input type="name" name="name" id="name" className="border-b-[0.5px] border-solid outline-none aktiv_regular"/>
              </div>
            </div>
            <div className="user-info flex flex-col lg:flex-row gap-[16px] mb-[30px]">
              <div className="phone flex flex-col lg:w-[50%]">
                <label className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw]  mb-[10px] leading-[18px] text-black" htmlFor="">Phone</label>
                <input type="number" name="number" id="number" className="border-b-[0.5px] border-solid border-black outline-none aktiv_regular"/>
              </div>
              <div className="interests flex flex-col lg:w-[50%] relative">
                <label className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw]  mb-[10px] leading-[18px] text-black" htmlFor="">Interests</label>
                  <select
                    name='interest'
                    id='interest'
                    className='hidden'
                    defaultValue={
                      interests
                        ? interestsValue?.length > 25
                          ? interestsValue?.substring(0, 25) + "..."
                          : interestsValue
                        : "Select"
                    }
                >
                  {interests && interests.map((item: Interests, index: number) => {
                    return (
                      <option
                        className='bg-[#CCD9E1] aktiv_regular'
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
                  className='text-[13px] 2xl:text-[0.846vw] 2xl:leading-[1.107vw] leading-[17px] aktiv_regular cursor-pointer text-[#00000055] border-b-[0.5px] pb-[8px] border-black border-solid outline-none'
                >
                  {interestsValue
                    ? interestsValue?.length > 25
                      ? interestsValue?.substring(0, 25) + "..."
                      : interestsValue
                    : "Select"}
                </div>
                <div
                  className={`icon-container w-auto h-auto absolute  right-[10px] top-[30px] ${
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
                      stroke="#000"
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
                  {interests && interests.map((item: Interests, index: number) => {
                    return (
                      <li
                        className={`text-[#000] hover:opacity-[1]  text-[13px] 2xl:text-[0.846vw] 2xl:leading-[1.107vw] leading-[17px] aktiv_regular opacity-[0.5] cursor-pointer p-[5px] border-r-[1px] border-l-[1px] border-b-[1px] border-solid border-[black]	`}
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
              
            </div>
            <div className="message flex flex-col mb-[30px]">
              <label className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] mb-[30px] leading-[18px] text-black" htmlFor="">Message</label>
              <textarea name="message" id="message" className="w-full   border-b-[0.5px] border-solid border-[black]">

              </textarea>
            </div>
            <button type="submit" className="text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] flex ml-auto cursor-pointer leading-[18px] text-[#000] aktiv_regular">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;