// app/api/articles/route.ts
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 0;
  const perPage = Number(searchParams.get('perPage')) || 2;

  const posts = await client.fetch(
    groq`*[_type == 'articles'] | order(orderRank desc) [${page}...${page + perPage}] {
      _id,
      title,
      "slug": slug.current,
      _createdAt,
      body,
      featured_description,
      date,
      "featured_image": featured_image.asset->url
    }`
  );

  const total = await client.fetch(groq`count(*[_type == 'articles'])`);

  return Response.json({ posts, total });
}
