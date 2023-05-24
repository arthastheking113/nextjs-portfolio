import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Duy Lan Le - Software Engineer Portfolio";
  const description = "I'm Duy Lan Le and a Software Engineer";
  const image = "/images/about/avatar.jpg";
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <meta name="description" content={description}/>

        <meta itemprop="name" content={title}/>
        <meta itemprop="description" content={description}/>
        <meta itemprop="image" content={image}/>

        <meta property="og:url" content="https://duylanle.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
        <meta content="duy lan le, software engineer, lan le, arthastheking113@gmail.com, lanle97work@gmail.com" name="keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
