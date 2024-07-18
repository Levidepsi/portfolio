"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({ navigation }: any) => {
  const pathname = usePathname()
  return (
    <>
      {pathname.includes("/admin") ? "" : 
      
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between pt-[50px] pb-[40px] px-5 lg:px-[32px]">
          <Image src={navigation.footer_logo} alt="footer" width={500} height={500} className="h-auto w-[88px] mb-5 lg:mb-0 ]" />
          <div className="flex">
            {navigation.footer_menu && navigation.footer_menu.map((item: any, i: number) => {
              return (
                <Link className="text-[15px] px-[10px] lg:px-[18px] leading-[18px] apercu text-[#0D4BA0]" key={i} href={ item.link ? `/${item.link}` : "/"}>
                    {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      }
    </>
    
  );
};

export default Footer;
