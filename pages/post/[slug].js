import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import torchlight from 'remark-torchlight' 

import { Layout, Image, SEO, Bio } from "@components/common";
import { getPostBySlug, getPostsSlugs } from "@utils/posts";

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <div className="flex flex-row">
          <header className="mb-8">
            <h1 className="mb-2 text-5xl font-bold leading-none">
              {frontmatter.title}
            </h1>
            <span className="text-sm font-semibold text-gray-500">{frontmatter.date}</span>
          </header>
        </div>

        <ReactMarkdown
          className="mb-4 prose lg:prose-lg font-"
          skipHtml={false}
    //       remarkPlugins={[torchlight,{
    // token: 'torch_ImyRgG5kK5xOpXpgqbMtq8ZrYDQLG18iVFlL4O85',
    //             theme: 'material-theme-palenight'

    //       }]}
          children={post.content}
        />
        <hr className="mt-4" />
      </article>

      <nav className="flex justify-between mb-10 mt-4">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-md font-semibold hover:no-underline text-blue-500 hover:text-blue-400">
              Previous post
            </a>
          </Link>
        ) : (
            <div />
          )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-md font-semibold hover:no-underline text-blue-500 hover:text-blue-400">Next post</a>
          </Link>
        ) : (
            <div />
          )}
      </nav>

        <footer className="flex-row justify-center items-center w-full">
          <Bio className="" />
        </footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <img
    alt={alt}
    src={`../../content/assets/${src}`}
    className="w-full"
  />
);
