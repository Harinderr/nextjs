import userApi from "@/#@/services/getUser"
export default async function Userdetails(props) {
    const userList = await userApi()
     const selectedUser = props.params.userid
     const selectedUserDetails = userList.filter(val => val.id == selectedUser)
    console.log(selectedUserDetails)
    return (
      <>
      <h1>{selectedUserDetails[0].firstName}</h1>
      <h1>{selectedUserDetails[0].email}</h1>
      <h1>{selectedUserDetails[0].gender}</h1>
      </>
    )
}