import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {/* {pageTitle &&
          `${pageTitle} || Duy Lan Le - Portfolio`} */}
          Duy Lan Le - Software Engineer Portfolio
      </title>
      <meta content="I'm Duy Lan Le and a Software Engineer" name="description"/>
      <meta content="duy lan le, fullstack software engineer, software engineer, developer" name="keywords" />
    </Head>
  </>
);

export default Seo;
