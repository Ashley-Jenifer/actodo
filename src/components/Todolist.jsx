import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props)
{

  const activityarr=props.activityarr
  const setactivityarr=props.setactivityarr


    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
          <h1 className="text-2xl font-medium">Today's Activity</h1>
          {activityarr.length===0? <p>You haven't added anything yet</p>:""}
          
          {
            activityarr.map(function(item,index)
            {
                return <Todoitem id={item.id} index={index} item={item} activityarr={activityarr} setactivityarr={setactivityarr} activity={item.activity}></Todoitem>
            })
          }

        </div>
    )
}
export default Todolist