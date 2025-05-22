"use client";
import { useWindowWide } from "@/hooks/ScreenSize";
import "./featuredarticle.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import { inView } from "motion";
import Link from "next/link";

type Body = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface FeaturedArticleProps {
  title: string;
  featured_article_items: any;
  padding_top: number;
  padding_bottom: number;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  featured_article_items,
  padding_top,
  padding_bottom,
}) => {
  const sectionPT: number = padding_top;
  const desktop = useWindowWide(1024);

  return (
    <div
      className={`featured-article--section px-[15px] md:px-[47px] flex flex-col justify-between`}
      style={{
        paddingTop: `${padding_top}px`,
        paddingBottom: `${padding_bottom}px`,
      }}
    >
      <div className="title-link-wrapper">
        <h2>{title}</h2>
        <Link className="button" href={"articles"}>
          <span>Read All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_27_"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>
        </Link>
      </div>

      <div className="featured-article-container">
        {featured_article_items &&
          featured_article_items.map((item: any, index: number) => {
            console.log(featured_article_items);
            return (
              <div key={index} className="article-item">
                <Link
                  href={`${item.article_title.slug}`}
                  className="article-item-image"
                >
                  {item.article_title.featured_image && (
                    <Image
                      priority
                      src={item.article_title.featured_image}
                      alt="Title"
                      width={2000}
                      height={2000}
                      className="object-cover background-image w-full h-[100vh]"
                    />
                  )}
                </Link>
                <Link href={`${item.article_title.slug}`}>
                  <span className="article-date">
                    {item.article_title.date}
                  </span>
                  <h3>{item.article_title.title}</h3>
                  <div className="article-body">
                    <PortableText
                      value={item.article_title.featured_description}
                    />
                  </div>
                </Link>
                <Link href={`${item.article_title.slug}`} className="button">
                  <span> Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedArticle;
