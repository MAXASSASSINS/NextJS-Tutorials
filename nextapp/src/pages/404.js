import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
const ErrorPage = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])


    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <h1>404 - Page Not Found</h1>
        </>
    )
}

export default ErrorPage