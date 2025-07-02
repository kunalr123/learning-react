
import {useEffect, useState} from 'react'
function Effectus({counter:parentCounter}){

    const[counter,setCounter] = useState(0);

    useEffect(()=>{
         callone();
    },[])

    function callone(){
        console.log("function called ");
    }


    return(
        <div>
            <button onClick={()=>setCounter(counter+1)} >counter{counter}</button>

        </div>
    )

}

export default Effectus;