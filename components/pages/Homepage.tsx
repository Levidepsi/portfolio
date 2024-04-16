import Link from "next/link";
import React from "react";

const Homepage = ({data}: any) => {
  return <div className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {data.title}
  </div>;
};

export default Homepage;
