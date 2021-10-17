import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Instagram</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <Header />

            {/* Feed */}

            {/*Modal */}
         </main>
      </div>
   );
}
