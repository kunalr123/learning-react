
import {Link} from 'react-router';

function UserList() {

    const userdata =[
        {id:1, name:"Rohit"},
        {id:2, name:"Rohna"},
       { id:3, name:"Kumar"},
       { id:4, name:"Manoj"},
    ]


    return(
        <div style={{marginLeft:"20px"}}>
            <h1> UserList </h1>
            {
                userdata.map((user)=>(
                <div>
                    <h4><Link to={"/user/"+user.id} >{user.name}</Link></h4>
                </div>
                ))
            }
        </div>
    )
}
export default UserList;