import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

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
            <h1 className="mb-2 text-5xl font-black leading-none font-display">
              {frontmatter.title}
            </h1>
            <p className="text-sm">{frontmatter.date}</p>
          </header>
        </div>

        <ReactMarkdown
          className="mb-4 prose lg:prose-lg"
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
        <hr className="mt-4" />
      </article>

      <nav className="flex justify-between mb-10 mt-4">
        {previousPost ? (
          // <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
          //   <a className="text-lg text-semibold">
          //     ← {previousPost.frontmatter.title}
          //   </a>
          // </Link>
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg text-semibold">
              ← Previous post
            </a>
          </Link>
        ) : (
            <div />
          )}
        {nextPost ? (
          // <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
          //   <a className="text-lg text-semibold">{nextPost.frontmatter.title} →</a>
          // </Link>
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg text-semibold">Next post</a>
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
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    webpSrc={require(`../../content/assets/${src}?webp`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);
