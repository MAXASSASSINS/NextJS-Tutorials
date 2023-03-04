import React from 'react'
import { useRouter } from 'next/router'

const blogNo = () => {
    const router = useRouter()

  return (
    <>
        <h1>
            My {router.query.blogNo} blog content
        </h1>
    </>
  )
}

export default blogNo