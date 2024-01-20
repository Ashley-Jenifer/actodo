import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"


function Todocontainer()
{

    const[activityarr,setactivityarr]=useState([{id:1,activity:"Go for a walk"}])

    return(<div>
                <div className="flex gap-5 flex-wrap">
                    <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr}></Addtodoform>
                    <Todolist activityarr={activityarr} setactivityarr={setactivityarr} ></Todolist>
                </div>
            </div>)
}
export default Todocontainer