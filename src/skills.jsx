import React, { useState } from 'react';

function Skills(){

    const[skills,setSkills] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.value,e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value])
        }
        else{
            setSkills([...skills.filter((item) => item != e.target.value)])
        }


    }


    return (
        <div>
            <h1>Skills</h1>

            <input onChange={handleChange} type="checkbox" value="JS" id="js" />
            <label htmlFor="js">JS</label>
            <br />

            <input onChange={handleChange} type="checkbox" value="NODE" id="node" />
            <label htmlFor="node">Node</label>
            <br />

            <input onChange={handleChange} type="checkbox" value="C++" id="C++" />
            <label htmlFor="C++">C++</label>
            <br />

            <input onChange={handleChange} type="checkbox" value="PYTHON" id="PY" />
            <label htmlFor="PY">PYTHON</label>
            <br />

            <p>{skills.toString()}</p>
        </div>
    )
}

export default Skills;