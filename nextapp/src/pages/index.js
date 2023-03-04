import Navbar from "@/components/Navbar";
import styles from '../styles/index.module.css'

const Home = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <h1 className={`${styles.red} ${styles.blue}`}>Hello World</h1>
    </div>
  )
}

export default Home;