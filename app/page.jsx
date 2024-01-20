'use client'
import Link from "next/link"
import custom from './custom.module.css'
import outside from './outside.module.css'
import Image from "next/image"
import Photo from '../public/vercel.svg'
export default function Home() {
    return (
        <main>
            <h1 className={custom.main}>This is the Home page</h1>
            <h2 className={outside.main}>Welcome to the Landing page</h2>
            <Link href='/productlist'>Go to product list page</Link>
            <Image src={Photo} width={200} height={200} ></Image>
            <Image src={'https://unsplash.com/photos/aerial-view-photography-of-mountain-with-snow-jl2T_E4tUyo'} width={200} height={150}></Image>
        </main>
    )
}