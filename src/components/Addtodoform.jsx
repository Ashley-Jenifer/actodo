import { useState } from "react"

function Addtodoform(props)
{

  const activityarr=props.activityarr
  const setactivityarr=props.setactivityarr


  const[newactivity,setnewactivity]=useState("")
   
  function handlechange(evt)
  {
    setnewactivity(evt.target.value)
  }

  function addactivity()
  {
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
    setnewactivity("")

  }
    return(<div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <div>
              <input type="text" onChange={handlechange} value={newactivity} placeholder="Enter new activity" className="border border-black bg-transparent p-1" ></input>
              <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
          </div>
    </div>)
}
export default Addtodoform