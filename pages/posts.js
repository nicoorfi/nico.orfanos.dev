import Link from "next/link";

import { Layout, Bio, SEO, Image, Header } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Nico Orfanos | Blog Posts" image="/cards/all-posts.png" />
      <h3 className="pb-5 pt-10 text-3xl font-bold">All Posts</h3>
      <ul className="divide-y divide-gray-300">
      {posts.map(({ frontmatter: { title, description, date, author, image }, slug }) => (
      <li key={slug} className="px-4 py-4 sm:px-0">
        <article>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-xl font-bold text-black hover:no-underline">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm font-semibold text-gray-500">{date}</span>
          </header>
          <section>
            <p className="mb-8 font-normal text-base">{description}</p>
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-sm hover:no-underline cursor-pointer font-bold text-blue-500">
                 Continue Reading 
                </a>
              </Link>
          </section>
        </article>
      </li>
      ))}
    </ul>
</Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
