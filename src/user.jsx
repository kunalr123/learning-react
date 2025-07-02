

// function User({name,age,email}){
//     return (
//         <div>
//             <h1>name:{name}</h1>
//             <h1>name:{age}</h1>
//             <h1>name:{email}</h1>

//         </div>
//     )
// }


// function User({user}){
//     return (
//         <div>
//             <h1>name:{user.name}</h1>
//             <h1>name:{user.age}</h1>
//             <h1>name:{user.email}</h1>

//         </div>
//     )
// }


function Useron({displayname,name}){

    return(
        <>
        <button  onClick={()=>displayname(name)}>click on this</button>
        </>
    )

}



export default Useron;


// named export whil import {

