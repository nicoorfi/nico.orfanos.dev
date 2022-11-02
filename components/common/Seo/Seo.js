import Head from "next/head";

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-ZHKVDMJD3S');
};

export function SEO({ title, description = "", image = "" }) {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>

      <title>Nico Orfanos</title>
      <meta name="title" content="Nico Orfanos"></meta>
      <meta name="description" content="Software Developer living in Greece."></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://nico.orfanos.dev/"></meta>
      <meta property="og:title" content="Nico Orfanos"></meta>
      <meta property="og:description" content="Software Developer living in Greece."></meta>
      <meta property="og:image" content={`https://nico.orfanos.dev/${image}`}></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://nico.orfanos.dev/"></meta>
      <meta property="twitter:title" content="Nico Orfanos"></meta>
      <meta property="twitter:description" content="Software Developer living in Greece."></meta>
      <meta property="twitter:image" content={`https://nico.orfanos.dev/${image}`}></meta>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>

    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-ZHKVDMJD3S"
    />
    <script>{injectGA()}</script>

    </Head>
  );
}
