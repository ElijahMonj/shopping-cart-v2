import Link from 'next/link'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router =useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
    return ( 
        <>
        <Head>
            <title>Not found</title>
        </Head>
        <div>Not FOUND!!!! 404</div>
        </>
     );
}
 
export default NotFound;