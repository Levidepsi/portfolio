"use client"

import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import TruncatedPortableText from "../../../hooks/TruncatedText";

const Posts = ({ posts }: any) => {


 let [imageWidth, setImageWidth] = useState<Number>(0)

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    };

    // Set initial width
    handleResize();

    // Update width on window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [categories, setCategories] = useState("Categories")
  const [openCategories, setOpenCategories] = useState(false)

   const [sections, setSections] = useState("Sections")
  const [openSections, setOpenSections] = useState(false)

   const [latest, setLatest] = useState("Latest")
  const [openlatest, setopenLatest] = useState(false)

 const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6; // Number of items per page
const [pageRange, setPageRange] = useState([1, 2, 3]);

// Exclude the first item
const filteredPosts = posts.slice(1); // Remove the first item

const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

// Calculate items to display based on the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const postsData = filteredPosts.slice(startIndex, endIndex);

// Handle "Next" button click
const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      if (nextPage > pageRange[pageRange.length - 1]) {
        setPageRange((prevRange) => prevRange.map((num) => num + 1));
      }
      return nextPage;
    });
  }
};

// Handle "Prev" button click
const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage((prevPage) => {
      const prevPageData = prevPage - 1;
      if (prevPage < pageRange[0]) {
        setPageRange((prevRange) => prevRange.map((num) => num - 1));
      }
      return prevPage;
    });
  }
};

// Jump to a specific page
const jumpToPage = (page: any) => {
  setCurrentPage(page);
  if (page > pageRange[pageRange.length - 1]) {
    setPageRange([page, page + 1, page + 2, page + 3]);
  } else if (page < pageRange[0]) {
    setPageRange([page - 3, page - 2, page - 1, page]);
  }
};

  
  return <div className="py-[100px] lg:py-[47px]">

    {/* item 0 */}
    {posts && posts.map((post: any, index: number) => {
      if (index == 0) {
        return (
          <FirstPost imageWidth={imageWidth} imageRef={imageRef} key={index} post={post} />
        )
      }
    })}
      
    <div className="border-b-[1px] border-solid border-[#30282A] mx-[18px] my-[84px]"></div>

    {/* filters */}
    <div className="flex gap-x-[50px] gap-y-[20px] max-w-[320px] ml-auto lg:mr-[328px] mr-auto">
      <div className="relative">
        <button className="text-[15px] tracking-[0.15px] leading-[22pxx] text-[#30282A] flex justify-between gap-x-[5px] items-center avenir_book" onClick={() => setOpenCategories(!openCategories)}>
          {categories}
          <div className="button_arrow pt-[3px]">
            <svg
              className="rotate-[90deg]"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#30282A" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,
                0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z" />
            </svg>
          </div>
        </button>
        <div className={`flex absolute transition-all duration-[0.3s] ${openCategories ? "visible opacity-[1] top-[20px]" : "top-[-10px] opacity-0 invisible"} flex-col bg-[#30282A] max-w-[100px]`}>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5] p-[5px]">
            {categories}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {categories}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {categories}
          </button>
        
        </div>
      </div> 
      <div className="relative">
        <button
          className="text-[15px] tracking-[0.15px] leading-[22pxx] flex justify-between items-center gap-x-[5px] text-[#30282A] avenir_book" onClick={() => setOpenSections(!openSections)}>
          {sections}
          <div className="button_arrow pt-[3px]">
            <svg
              className="rotate-[90deg]"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#30282A" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,
                0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z" />
            </svg>
          </div>

        </button>
        <div className={`flex absolute transition-all duration-[0.3s] ${openSections ? "visible opacity-[1] top-[20px]" : "top-[-10px] opacity-0 invisible"} flex-col bg-[#30282A] max-w-[100px]`}>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5] p-[5px]">
            {sections}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {sections}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {sections}
          </button>
        
        </div>
      </div> 
      <div className="relative">
        <button className="text-[15px] tracking-[0.15px] leading-[22pxx]  text-[#30282A] flex items-center gap-x-[5px] avenir_book" onClick={() => setopenLatest(!openlatest)}>
          {latest}
          <div className="button_arrow pt-[3px]">
            <svg
              className="rotate-[90deg]"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#30282A" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,
                0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z" />
            </svg>
          </div>

        </button>
        <div className={`flex absolute transition-all duration-[0.3s] ${openlatest ? "visible opacity-[1] top-[20px]" : "top-[-10px] opacity-0 invisible"} flex-col bg-[#30282A] max-w-[100px]`}>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5] p-[5px]">
            {latest}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {latest}
          </button>
          <button
            className="text-[15px] tracking-[0.15px] leading-[22pxx] avenir_book hover:bg-[#EFEBE5] border-solid border-[1px] border-[#30282A] hover:text-[#30282A] text-[#EFEBE5]">
            {latest}
          </button>
        
        </div>
      </div>
    </div>

    {/* all posts */}
    <div className="py-[78px] px-[18px] grid gap-x-[24px] gap-y-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {postsData && postsData.map((post: any, index: number) => {
      if (index != 0) {
        
        return (
          <AllPostsNotFirstItem post={post} key={index} />
        )
      }
    })}
    </div>

       <div className="pagination max-w-[320px] ml-auto lg:mr-[328px] mr-auto flex">
        <button className="text-[#30282A] text-[11px] tracking-[1.32px] leading-[15px] uppercase avenir_roman pr-[40px]" onClick={prevPage} disabled={currentPage === 1}>Prev</button>
      <div className="">
        {pageRange.map(num => (
          num <= totalPages && num > 0 && (
            <button
              key={num}
              className={`${currentPage === num ? 'active' : ''} text-[#30282A] text-[15px] tracking-[0.15px] leading-[22px] uppercase pr-[25px] avenir_book`}
              onClick={() => jumpToPage(num)}
            >
              {num} 
            </button>
          )
        ))}
        <span className="text-[#30282A] text-[15px] tracking-[0.15px] leading-[22px] uppercase avenir_book pr-[25px]">...</span>
        </div>
      <button
         onClick={() => jumpToPage(totalPages)}
        className="text-[#30282A] text-[15px] tracking-[0.15px] leading-[22px] uppercase avenir_book">{totalPages}</button>
        <button className="text-[#30282A] text-[11px] tracking-[1.32px] leading-[15px] uppercase avenir_roman pl-[40px]" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
  </div>;
};

const FirstPost = ({post, imageWidth, imageRef}: any) => {
  return (
    <div className="">
      <div className={`flex flex-col-reverse lg:flex-row`} >
      <div className={`lg:w-[50%] px-[18px]`}>
        <div className={` lg:flex flex-col h-full justify-end`}>
        {post.title && <h1 className={`  text-[#30282A] text-[45px] mb-5 lg:text-[65px] tracking-[1.3px] lg:leading-[56px] lg:max-w-[480px]  boing_thin `}>{post.title}</h1>}
           {post.body &&
          <div
            className={` avenir_book  max-w-[451px]  lg:hidden  pt-[20px] [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
            <TruncatedPortableText blocks={post.body} maxLength={205} />
          </div>}
      </div>  
      </div>
      <div className="lg:w-[50%]">
          <Image
            ref={imageRef}
            src={post.mainImage}
            alt={post.title ? post.title : "Text With Image"}
            width={2000}
            height={2000}
            priority
            className="object-cover xl:min-h-[47.461vw] mb-5 lg:mb-0" />
        
      </div>
      </div>
      <div
        style={{ maxWidth: `${imageWidth}px` }}
        className=" lg:mr-0 lg:ml-auto max-w-[700px]"
      >
        {post.body &&
          <div
            className={` avenir_book hidden max-w-[451px]  lg:block  pt-[47px] [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
            <TruncatedPortableText blocks={post.body} maxLength={205} />
          </div>}
        <Link className="text-[#30282A] px-[18px] lg:px-0 uppercase pt-[32px] block text-[11px] tracking-[1.32px] leading-[15px]" href={`/news-and-press/${post.slug}`}>Read more</Link>
      </div>
    </div>
  )
}

const AllPostsNotFirstItem = ({ post }: any) => {
  return (
   <div className="2xl:aspect-[16/17.7]">
      <Link  href={`/news-and-press/${post.slug}`}>
        <Image alt={post.title} src={post.mainImage} width={1000} height={1000} className="object-cover w-full h-full max-h-[529px] lg:max-h-full " />
      </Link>
      <div className="flex flex-col justify-between min-h-[211px] ">
        <div>
          <h1 className="pt-[23px] text-[#30282A] text-[13px] tracking-[1.56px] leading-[20px] pb-[23px]">{post.title}</h1>
          {post.body &&
            <div
              className={` avenir_book  max-w-[451px]  lg:block   [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
              <TruncatedPortableText blocks={post.body} maxLength={205} />
            </div>
          }
        </div>
        <div>
          <Link
            className="text-[#30282A] uppercase pt-[32px] block text-[11px] tracking-[1.32px] leading-[15px]"
            href={`/news-and-press/${post.slug}`}>
            Read more
          </Link>
        </div>
        </div>
    </div>
  )
}


export default Posts;
