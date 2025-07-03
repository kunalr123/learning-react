import { useState } from "react"

const useToggle=(defaultval)=>{

    const[value,setValue] = useState(defaultval);

    function toggle(val){
        if(typeof val != 'boolean'){
            setValue(!value);
        }
        else{
            setValue(val);
        }
    }

    return [value,toggle];

}

export default useToggle();