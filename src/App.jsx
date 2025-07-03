// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import User from './user.jsx'
// import Collage from './collage.jsx'
// import Wrapper from './wrapper.jsx'
// import Skills from './skills.jsx'
// import Data from './data.jsx'
// // import Clock from './clock.jsx'
// import Effectus from './effectus.jsx'
// // import { createElement } from 'react'

import { use, useRef, useTransition,useState, useActionState, Fragment, useId } from "react";

// import {use, useState} from 'react'
// import Usffect from './effectus.jsx'

// // hooks are that are with "use" ! - speacial features  // useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback etc

// function App() {

//   let path = "https://imgs.search.brave.com/ph3CUhZjOU0uMo2NFbWUp6cUQPVn40Dm9T1OFQ346AA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9taW5pbWFsaXN0/LWhlYWRlci1waG90/by13aXRoLXdvbWFu/LXdpdGgtY2xvc2Vk/LWV5ZXMtZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA"

//   let username = "Lion";

//     function callfn(){
//       alert("hello this is");
//     }


//     const fun=(name)=>{
//       alert(name)
//     }

//     function operation(x,y){
//       return x*y;
//     }

//     const obj ={
//       "name":"Kunal",
//       "age":20,
//     }

//     // let fruit = "apple";

//     const [fruit,setFruit] =  useState("Apple");

//     function fruitchnage (){
//       setFruit("Banana");
//       alert(fruit);

//     }

//     const [count,setCount] = useState(0);


//     const userobj = {
//       name: "Kunal",
//       age: 20,
//       email: "123@test"
//     }

//     const userobj2 ={
//       name: "Rajesh",
//       age: 39,
//       email: "rah@test"

//     }

//     const collagename =["sggs","IITB","IISCB","NIT"];

//     const [val,setVal] = useState();




//     let userData = [
//       {
//         name:"tah",
//         age:30,
//         id :1
//       },

//       { 
//         name:"opf",
//         age:67,
//         id:2

//       },

//       { 
//         name:"mnod",
//         age:12,
//         id:3

//       }
//     ]

//     const [color,setColor] = useState("green");
//     const [textcolor,setTextColor] = useState("white")

//     const[counter,setCounter] = useState(0);





//   return (
//     <div>
//        <h1>Kunal Rathod</h1>
//        <p>Website Dveloper !</p>
//        <h1>{username}</h1>

//         {/* <User name="rajesh" age = {39} email="rejk@gmail.com" /> */}

//         <User user={userobj} />
//         <User user={userobj2} />

//         <Collage name={collagename} />
//         <Collage />


//         <Wrapper color="blue"> <h1>hello this is me</h1> </Wrapper>
//         <Wrapper> <h1>hello </h1> </Wrapper>




//         <button onClick={callfn}>This</button>
//         <button onClick={()=>fun("raj")}>This</button>
//         <h1>operation is {operation(20,10)}</h1>
//         <h1>{obj.name} is {obj.age} years old</h1>
//         <h1>{fruit}</h1>
//         <button onClick={fruitchnage}>Change</button>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Counter</button>
//         {
//           count==0?<h1>Counter is zero</h1>:
//           count==1?<h1>Counter is one</h1>:
//           <h1>Counter is greater than one</h1>
//         } 

//         <h1>User Input </h1>
//         <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='enter name' />
//         <h2>{val}</h2>
//         <button onClick={()=>setVal("")}> clear</button>

//       <Skills/>

// <Skills/>

// {userData.map((user) => (
//   <div key={user.id}>
//     <Data data={user} />
//   </div>
// ))}



// <label htmlFor="">color</label>
   
//   <select onChange={(e)=>setColor(e.currentTarget.value)} name="" id=""> 
//     <option value="red">Red</option>
//     <option value="green">Green</option>
//     <option value="yellow">Yellow</option>
//     <option value="blue">Blue</option>
//   </select>

// <label htmlFor="">Textcolor</label>

//   <select onChange={(e)=>setTextColor(e.currentTarget.value)} name="" id="">
//     <option value="red">Red</option>
//     <option value="green">Green</option>
//     <option value="yellow">Yellow</option>
//     <option value="blue">Blue</option>
//   </select>

//   {/* <Clock color ={color} textcolor= {textcolor}/> */}


//      <Effectus counter={counter}/>





//         {/* <img src={path}/> */}
//     </div>
       
//   )
// }

// // return createElement("div",{class:"idname"},"division")    without jsx


// export default App



// Posting on SOcials 
// day 01

// make a job profile image using inline css in react 

// import React, { useState } from 'react';
// import './App.css'
// import style from './style.module.css';
// import styled from 'styled-components';

// function App() {
//   const [blockStyle, setBlockStyle] = useState({
//     border: '1px solid white',
//     boxShadow: '1px 2px 3px 0px blue',
//     width: '200px',
//     margin: '10px',
//     backgroundColor: 'white',
//     color: 'black',
//   });

//  function updateTheme(textColor, backgroundColor) {
//   setBlockStyle({
//     backgroundColor: backgroundColor,
//     color: textColor,
//   });
// }


// const Heading = styled.h4`
//   color: green;
//   border: 2px solid white;
//   border-radius: 2px;
// `;

//   return (
//     <div>
//       <h1 className={style.heading} >Job Profiles</h1>
//       <button onClick={() => updateTheme('white', 'black')}>Dark Theme</button>
//       <button onClick={() => updateTheme('black', 'white')}>Default Theme</button>

//       <div style={{ display: 'flex', flexWrap: 'wrap', margin:"3px",padding:"5px" }}>
//         <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>

//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//          <div style={blockStyle}>
//           <img
//             className='card_img '
//             src="https://imgs.search.brave.com/ocAqlAHBvjEUOVPix0n-S7Gh8U9oVCi3WpvHNZVIH8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVHVLdklS/NUxOUVJtN1liaWtE/UEt0cnUxSHktYlpa/clBzMkVjSkpzLW16/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2Y0ZsNU1q/UnIvWlZoaWRrdHRM/WFpzVTFRNS9OMjl0/YkZWWGVFWkpNRkpR/L1pHVkRSbEpWZEhR/MGVrUk8vTkM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/TWJrSndMMkp0YkhS/YS9lVFZxWWpJd2Rt/SXpTbkF2L1dqSnNk/VmxYZUhwTWVtZDMv/VEhwb2FDOU1NbEYz/VEhwbi9kMDlIUm10/TlJFVjRMMWxVL1Ft/MVBSMHB0V2xSRk1r/MTYvV1RVdlRWUmpN/Vmt5Vm10YS9WR3Mx/V1ZkRk15OU1iWEIz/L1duYy5qcGVn"
//             alt="Profile"
//           />
//           <div style={{ padding: '5px' }}>
//             {/* <h4>Kunal Rathod</h4> */}
//             <Heading>Kunal Rathod</Heading>
            
//             <p>Software Developer</p>
//           </div>
//         </div>
//       </div>

      
      
//     </div>
//   );
// }


// day 2 
// useRef for html direct DOM manupulation 

// function App(){

//   const inputref = useRef('null');

//   const nameref = useRef();

//   const passwordref = useRef();


//   // const namehandle =()=>{
//   //   console.log(nameref.current.value);

//   // }

//   // const passwordhandle =()=>{
//   //   console.log(passwordref.current.value);
//   // }

//   function formhandle(event){
//     event.preventDefault();
//     console.log(nameref.current.value);
//     console.log(passwordref.current.value);
//     nameref.current.value = "ram";
//   }

//   function inputhandle(){
//     inputref.current.focus();
//     inputref.current.style.color='red';
//     inputref.current.placeholder="do some";
//     inputref.current.value="do";

//   }
//   return(
//     <div>
//       <input ref={inputref} type="text" placeholder="enter something" />
//       <button  onClick={inputhandle} > Change by useref </button>

//       <form onSubmit={formhandle} action=""> 
//         <input ref={nameref} type="text" placeholder="enter the name" id="name"  />
//         <input ref={passwordref} type="password"  autoComplete="current-password" placeholder="enter the password" id="password"  />

//         <button >
//           Submit 
//         </button>
//       </form>
//     </div>
//   )
// }


// pass a function as a props 

// import React from 'react';
// import Useron from './user.jsx';
// function App(){

//   function displayname(name){
//     alert(name);
//   }
//   return(
//     <>
//     <Useron displayname={displayname} name={"maharaj"} />
//     <Useron displayname={displayname} name={"chatrapati"} />
//     </>
//   )
// }


// useTransition 

// function App() {
//   const [pending, startTransition] = useTransition();

//   const handlebutton = () => {
//     startTransition(() => {
//       // Simulate some state update or heavy calculation here
//       // For demo, you can use a setTimeout outside of startTransition if needed
//       console.log("Transition started");
//     });
//   };

//   return (
//     <>
//       <button onClick={handlebutton}>Submit</button>
//       {pending && <p>Loading...</p>}
//     </>
//   );
// }


// Day 03 



// const App =()=>{
//   const [users, setUsers] =useState([]);
//   const [user,setUser] = useState("");

//   const adduserhandler=()=>{
//     setUsers(...users,user);

//     console.log(user);
//   }

//   return(
//     <div>
//       <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter user" />
//       <button onClick={adduserhandler}>Add User</button>      
//       {
//         users.map((item,index)=>{
//           <h4 key={index}>{item}</h4>
//         })
//       }
//     </div>
//   )
// }


// export default App;

// DAY 04 UODATE object using state

// const App=()=>{

//   const[data,setData] = useState({
//     name: " ",
//     address: {
//       city: " ",
//       state: " "
//     }
//   });

//   function updatename(val){
//     data.name = val;
//     setData({...data});
//   }

//   function updatecity(city){
//     data.address.city = city;
//     setData({...data})
//   }

//   function updatestate(state){
//     data.address.state = state;
//     setData({...data})
//   }

//   return(
//     <div>
//       <input type="text" placeholder="enter name" onChange={(event)=>updatename(event.target.value)} />
//       <input type="text" placeholder="enter city" onChange={(event)=>updatecity(event.target.value)} />
//       <input type="text" placeholder="enter state" onChange={(event)=>updatestate(event.target.value)} />

//       <h1>name: {data.name}</h1>
//       <h2>city: {data.address.city}</h2>
//       <h2>state: {data.address.state}</h2>
//     </div>
//   )


// }

// export default App;



// useActionState use case for form

// const App=()=>{

//   const submitcalled = async (previousData,formdata)=>{

//     let name = formdata.get('name');
//     let password = formdata.get('password');

//     await new Promise(res => setTimeout(res,2000));

//     console.log("submitcalled:",name,password);

//     if(name && password){
//       return{message:'Data Submitted !',name,password}
//     }
//     else{
//       return{error:'failed to submit',name,password}
//     }

//   }

//   const [data,action,pending] = useActionState(submitcalled,undefined)

//   return(
//     <div>
//       <h1>useActionState use </h1>
//       <form action={action}>
//         <input defaultValue={data?.name} type="text" placeholder="enter Name" name="name" />
//         <br /><br />
//         <input defaultValue={data?.password} type="password" placeholder="enter password" name="password" />
//         <br /><br />
//         <button disabled={pending}>Submit</button>

//         {
//           data?.error && <span style={{color:"red"}}>{data?.error}</span>
//         }
//         {
//           data?.message && <span style={{color:"green"}} >{data?.message}</span>
//         }
//       </form>

//       <h3>name:{data?.name}</h3>
//       <h3>password:{data?.password}</h3>
//     </div>
//   )
// }


// export default App;


// day 05 
// Fragment - to remove extra div of componrnts
// we can use empty tag also 


// useId use for unique id to all components  when render !


const App=()=>{

  const name = useId();



return(
    <>  //fragment 
     <h2>hiii</h2>
    <label htmlFor={name}> Name</label>
    <input type="text" id={name} placeholder="Enter Name" />
    <label htmlFor={name}> Name</label>
    <input type="text" id={name} placeholder="Enter Name" />

    </>
)
}

export default App;