function Todoitem(props)
{
  
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
   

    function handledelete(deleteid)
    {
        var temp=activityarr.filter(function(item)
        {
            if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityarr(temp)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem