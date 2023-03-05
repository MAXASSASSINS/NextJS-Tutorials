import Navbar from "@/components/Navbar";
import styles from '../styles/index.module.css'
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <h1 className={`${styles.red} ${styles.blue}`}>Hello World</h1>
      <Image src="/vercel.svg" width={200} height={200} />
      <Image src="https://images.pexels.com/photos/15417676/pexels-photo-15417676.jpeg"
        width={200} height={200} alt="Picture of the author"
      />
    </div>

  )
}

export default Home;