import Link from "next/link";
import React from "react";

const Posts = ({posts}: any) => {
  return <div className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/posts/${post.slug.current}`}
          >
            <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
  </div>;
};

export default Posts;
