function Data({data}){
    return (
        <div style={{
            border:"solid 5px green",
            margin:"10px",
            padding:"5px",
            width: "400px",
            borderRadius:"10px"
        }} >
        <h3>name: <span style={{color:"red"}} >{data.name}</span></h3>
        <h3>age: <span style={{color:"green"}}  >{data.age}</span></h3>
        <h3>id: <span style={{color:"blue"}}  >{data.id}</span></h3>
        </div>
    )
}


export default Data;