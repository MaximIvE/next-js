import Head from "next/head";
import Heading from "../components/Heading";
// import Image from 'next/dist/client/image';
// import youtubeImg from "../public/youtube.png"
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";


export const getStaticProps = async () => {
    const responce = await fetch(`${process.env.API_HOST}/socials`);
    const data = await responce.json();
  
    if (!data) return { notFound: true}
    
    return {
        props: {
            socials : data,
        }
    }
}


const Home = ({ socials }) => {
  return (
     <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
      
    </div>
  )
}

export default Home;