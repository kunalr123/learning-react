import { Link,useParams } from 'react-router';

function UserDetaile() {

    const paramsData = useParams();
    console.log(paramsData);
    return(
        <div style={{marginLeft:"20px"}}>
            <h1> Userdetailes </h1>
            <h3>params id is : {paramsData.id}</h3>
            <h3><Link to='/user'>Back</Link></h3>
        </div>
    )
}
export default UserDetaile;