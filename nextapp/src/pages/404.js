import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const ErrorPage = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])


    return (
        <>
            <h1>404 - Page Not Found</h1>
        </>
    )
}

export default ErrorPage