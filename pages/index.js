import Link from "next/link";

import { Layout, Bio, SEO, Image, Header } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <div className="w-full min-h-screen">

<div className="max-w-screen-sm px-4 py-12 mx-auto antialiased text-semibold text-gray-800">
      <div className="flex flex-row items-center space-x-4 pb-10">
      <div className="block">
        <div className="h-32 w-32 md:64 md:64 bg-gradient-to-r from-blue-400 to-green-300 rounded-full overflow-hidden shadow-lg">
          <img src="https://avatars0.githubusercontent.com/u/15706832?s=460&u=e2262b5777aea47219f3f10ec55e5339ec40be3a&v=4" alt="James Brooks" class="h-32 w-32 flex-shrink-0 rounded-full p-2"></img>
        </div>
      </div>
      <Header></Header>

      </div>

      <div className="prose">
Hi there, my name is Nico. I am a full-stack developer and entrepreneur currently living in Dortmund, Germany.
<br></br>
<br></br>

I’m fascinated by Elasticsearch used as a search engine for building nice On-Site search experiences. I am writing about Elasticsearch on https://blog.sigmie.com, sharing all I know about it. 
<br></br>
<br></br>

Right now I am bootstrapping https://app.sigmie.com and I share updates about my progress on Twitter.
<br></br>
<br></br>

I spend my free time with my wife and my two boys. Sundays are football days, I play football myself with a nearby local team. And in the afternoons I watch football mostly “LaLiga” where I am fan of Barcelona.

<br></br>
<br></br>

I also share my work on Twitter and here, where I am sharing daily challenges that I encounter during development and some personal thoughts and opinions on topics. 

      </div>
      <SEO title="Nico Orfanos" />
      <h3 className="pb-5 pt-10 text-3xl font-bold">Latest Posts</h3>
      <ul className="divide-y divide-gray-300">
      {posts.slice(0, 5).map(({ frontmatter: { title, description, date, author }, slug }) => (
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
