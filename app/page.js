'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router  = useRouter()
  return (
  <main>
    <h1>hello World this is Home Page</h1>
    <User name ='Ram'></User>
    <User name ='premm'></User>
    <User name ='shyam'></User>
    <button onClick={() => router.push('/dashboard')}>Click here</button> 
    <br/> <br/>
    <Link href={'/dashboard'}> Go to dashboard</Link>

  </main>
  )
}

  const User = (prop) => {
    return (
      <h1>my name is {prop.name} </h1>
    )
  }
