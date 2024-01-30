'use client'
import Link from "next/link"
import custom from './custom.module.css'
import outside from './outside.module.css'
import Image from "next/image"
import Photo from '../public/vercel.svg'
import {Roboto_Mono} from 'next/font/google'
import { API_BASE_URL } from "./utility/constants"
const roboto = Roboto_Mono({
    weight : '700',
    subsets : ['latin'],
    display : 'swap'
})
28.596086
77.3844388
export default function Home() {
  
    return (
        <main>
            <h1 className={custom.main}>This is the Home page</h1>
            <h2 className={roboto.className} >Welcome to the Landing page</h2>
            <Link href='/productlist'>Go to product list page</Link>
            <Image src={Photo} width={200} height={200} ></Image>
            {/* <Image src={'https://unsplash.com/photos/aerial-view-photography-of-mountain-with-snow-jl2T_E4tUyo'} width={200} height={150}></Image> */}
     {API_BASE_URL }  
        </main>
    )
}

