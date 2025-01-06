"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({ navigation }: any) => {
  const pathname = usePathname()
  return (
    <>
      {pathname.includes("/admin") ? "" : 
      
        <div className="flex flex-col footer_wrap pt-[31px] pb-[31px] px-5 lg:px-[20px] bg-[#30282A]">
          <div className="text-[#EFEBE5] text-[13px] 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman">
            © Ninety-One Group 2024
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <div className="flex flex-col">
            {navigation.footer_menu && navigation.footer_menu.map((item: any, i: number) => {
              return (
                <Link className="text-[13px] 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman text-[#EFEBE5]" key={i} href={ item.link ? `/${item.link}` : "/"}>
                    {item.title}
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col">
            {navigation.social_links && navigation.social_links.map((item: any, i: number) => {
              return (
                <Link className="text-[13px] 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman text-[#EFEBE5]" key={i} href={ item.link ? `${item.link}` : "/"}>
                    {item.title}
                </Link>
              )
            })}
          </div>
          </div>
          <div>
            <h2 className="text-[13px] mb-5 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman text-[#EFEBE5]">Get on the list</h2>
            <form className="flex flex-col items-baseline">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-none mb-[30px] pb-[3px] email_input outline-none border-b-[1px] border-solid border-[#EFEBE5] w-full max-w-[310px] text-[13px] 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman text-[#EFEBE5]"
                placeholder="Your email" />
              <button type="submit" className="text-[13px] mb-5 2xl:text-[0.813vw] tracking-[0.33px] leading-[18px] avenir_roman text-[#EFEBE5]">Submit</button>
            </form>
          </div>
        </div>
      }
    </>
    
  );
};

export default Footer;
