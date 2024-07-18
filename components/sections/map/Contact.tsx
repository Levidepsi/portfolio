"use client"
import {useJsApiLoader} from "@react-google-maps/api"
import Map from "./Map";
import { PortableText } from "@portabletext/react";

const Contact = ({ title, subtitle, map_api, description }: any) => {

  const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: `${map_api}`,
  });


  return (
    <div className="bg-[#E6ECF5] flex flex-col lg:flex-row px-[44px] lg:px-[88px] py-[46px] lg:py-[92px]  mx-5 lg:mx-[32px] mt-[87.5px] lg:mt-[175px] mb-[50px]">
      <div className="lg:max-w-[28vw] pb-[50px] lg:pb-0">
        <h1 className="text-[30px] text-[#0D4BA0] leading-[40px] lg:text-[40px] lg:leading-[50px] apercu pb-[20px] lg:pb-[40px]">{title}</h1>
        <h2 className="text-[22px] text-[#0D4BA0] leading-[28px] lg:text-[24px] lg:leading-[30px] apercu pb-[20px] lg:pb-[40px]">{subtitle}</h2>
        <div className="[&>p]:text-[#0D4BA0] contact_description text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px]" >
          <PortableText  value={description}/>
        </div>
      </div>
      <div className="w-full h-auto [&>div]:ml-auto">
        {isLoaded && <Map  />}
      </div>
    </div>
  );
};

export default Contact;
