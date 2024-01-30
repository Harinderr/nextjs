import User from "../components/User"
import Link from "next/link"
import userApi from '../../services/getUser'




export default async function Users() {
    let users =  await userApi()

    return (
        <>
        
        <h1>Users List</h1>
   <ul>
   {
     
        users.map((val,index)=> {
            return ( 
            <Link style={{display:'block'}} key={index} href={`/users/${val.id}`} > <h3>{val.firstName}</h3></Link> 
            
            )
          })
      
      }
   </ul>

   <User></User>
      
        </>
    )
}