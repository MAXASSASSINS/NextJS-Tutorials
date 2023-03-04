import React from 'react'
import { useRouter } from 'next/router'
const about = () => {
  const router = useRouter()
  return (
    <div>
      about
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  )
}

export default about