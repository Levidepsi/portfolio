"use client"

import SpreadComponents from "@/components/global/SpreadComponents";
// import SpreadComponents from "../global/SpreadComponents";



export default function Destinations({ page }: any) {


  return (
    <>
   {page && page.components != null &&  <SpreadComponents components={page.components} />}

    </>
  );
}