import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props)
{             
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers
    const[eusername,setEusername]=useState("")
    const[epassword,setEpassword]=useState("")

    function handleUname(evt)
    {
        setEusername(evt.target.value)
    }
    function handleUpass(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername, password:epassword}])
        console.log(users)
        navigate("/")
    }

   
    return(
        <div>
    <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi!</h1>
        <p>Signup here :)</p>

        <div className="flex flex-col my-2 gap-2">
            <input type="text" 
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUname}>
            </input>

            <input type="text" 
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handleUpass}>
            </input>

            <input type="text" 
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm password">
            </input>

            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={addUser}> Signup</button>
            <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </div>
    </div>
    </div>
    </div>
   )
}
export default Signup