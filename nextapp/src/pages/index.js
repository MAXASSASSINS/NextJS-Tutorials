import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">  
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Hello World</h1>
    </>
  )
}

export default Home;