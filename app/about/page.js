"use client"
import { useRouter } from "next/navigation"
export default function About () {
    const router = useRouter()
    return (
       <div>
         <h1>This is about section of the page</h1>
         <button onClick={() => router.push('/')}> </button>
       </div>

    )
}