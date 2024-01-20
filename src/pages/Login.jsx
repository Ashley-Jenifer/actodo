
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props)

{
    const navigate=useNavigate()
    const[eusername,setEusername]=useState("")
    const[epassword,setEpassword]=useState("")
    const[ruser,setRuser]=useState(true)

const users=props.users

function handleUname(evt)
{
    setEusername(evt.target.value)
}
function handleUpass(evt)
{
    setEpassword(evt.target.value)
}

    function checkUser()
    {
        var userfound = false
        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {
                    console.log("login success")  
                    userfound = true       
                    navigate("/landing" ,{state:{user:eusername}})   
                }
               
        })
        if(userfound===false)
        {
         console.log("login failed") 
         setRuser(false)
    }
}
   
    return( <div>
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            {ruser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-400">Please signup before you login"</p>}
    
            <div className="flex flex-col my-2 gap-2">
                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Username"
                onChange={handleUname}></input>
    
                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Password"
                onChange={handleUpass}></input>
    
                
    
                <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkUser}> Login </button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
        </div>
        </div>)
}

export default Login