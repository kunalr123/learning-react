// import { useState, useEffect } from 'react'

// function Clock({color,textcolor}) {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date().toLocaleTimeString());
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div style={{color:textcolor, padding:"10px", margin:"5px", border:"2px solid red", width:"30%"}}  >
//             <h3 style={{backgroundColor:color}}>{time}</h3>
//         </div>
//     );
// }

// export default Clock;