import Link from "next/link";

import { Layout, Bio, SEO, Image, Header, Avatar } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <div className="w-full min-h-screen">

<div className="max-w-screen-sm px-4 py-12 mx-auto antialiased text-semibold text-gray-800">
      <div className="flex flex-row items-center space-x-4 pb-10">
      <div className="block">
        <Avatar></Avatar>
      </div>
      <Header></Header>

      </div>

      <div className="prose">

<p>Hi there, I’m Nico. I am a full-stack developer and entrepreneur currently living in Dortmund, Germany.</p>

<p>I love using Elasticsearch as a search engine for building On-Site search experiences. I am writing about Elasticsearch on the  <a href="https://blog.sigmie.com">Sigmie Blog</a>, where I am sharing everything I know about it. </p>

<p>Right now I am bootstrapping the <a href="https://app.sigmie.com">Sigmie Application</a>, which is Search Engine as a Service. You can find updates about my progress on <a href="hhttps://twitter.com/nicoorfi">Twitter</a>.</p>

<p>I spend my free time with my wife and my two boys. On Sundays mornings, I play football at a local team, and in the afternoons I am watching football on TV. I am a big fan of FC Barcelona.</p>

<p>Here and on <a href="hhttps://twitter.com/nicoorfi">Twitter</a> I am sharing my work, daily challenges and some of my thoughts and opinions. </p>

      </div>
      <SEO title="Nico Orfanos" />
      <h3 className="pb-5 pt-10 text-3xl font-bold">Latest Posts</h3>
      <ul className="divide-y divide-gray-300">
      {posts.slice(0, 5).map(({ frontmatter: { title, description, date, author }, slug }) => (
      <li key={slug} className="py-4 sm:px-0">
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
    </div>
</div>
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
