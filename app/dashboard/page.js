import Link from "next/link"
export default function Dashboard () {
    return (
    <>
    <h1> This is your dashboard</h1>
    <ul>  
    <li> <Link href={'/dashboard/anil'}>Anil</Link> </li>
    <li> <Link href={'/dashboard/Subhash'}>Subhash</Link> </li>
    <li> <Link href={'/dashboard/Manoj'}>Manoj</Link> </li>
    
    </ul>
    <Link href={'/'}>Go back to Homepage</Link>
    </>
    )
}
