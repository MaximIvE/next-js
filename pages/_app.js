import Loyout from '../components/Layout';
// import Image from 'next/dist/client/image';
import Head from 'next/head';
// import youtubeImg from "../public/youtube.png"
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Loyout> 
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>

    {/* <Image src={youtubeImg} width={500} height={350} alt="preview" placeholder="blur"/> */}
  </Loyout>
);

export default MyApp;
