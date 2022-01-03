import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>

      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet" />
    </Head>
  );
}
