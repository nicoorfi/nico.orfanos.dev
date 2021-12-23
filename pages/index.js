import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <ul className="divide-y divide-gray-200">
      {posts.map(({ frontmatter: { title, description, date, author }, slug }) => (
      <li key={slug} className="px-4 py-4 sm:px-0">
        <article>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-xl font-semibold text-gray-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}&nbsp;-&nbsp;{author}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
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
