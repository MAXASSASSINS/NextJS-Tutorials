import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
const about = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div>
        about
        <button onClick={() => router.push('/')}>Back to Home</button>
      </div>
    </>
  )
}

export default about