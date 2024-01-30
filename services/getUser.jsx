export default async function userApi() {
    try {
        const data = await fetch('https://dummyjson.com/users')
        const parsedData = await data.json()
       
   return parsedData.users 
    }
    catch (err) {
        console.log('There is an error' + err)
    }
}