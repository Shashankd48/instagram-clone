import Head from "next/head";

const Page = ({ title }) => {
   return (
      <Head>
         <title>{title}</title>
         <link rel="icon" href="/favicon.png" />
      </Head>
   );
};

export default Page;
