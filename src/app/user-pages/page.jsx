import { useEffect, useState } from "react";

export default function UserPages() {
  
    //const response = await fetch("http://localhost:3000/api/git-users");
    //const users = await response.json();

    const {users, setUsers} = useState([]);

        useEffect(() =>{
            fetch("http://localhost:3000/api/git-users")
            .then((response)=> response.json())
            .then((response)=> setUsers(response))
            .catch(errors=> console.error(errors))
        }, [])

        console.log(users);
         
    return (
    <div>
        <h1>User Pages</h1>
        <div>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <figure>
                                <Image
                                   src={user.avatar_url}
                                   alt="Avatar"
                                   Width={50}
                                   Height={50}/>
                                   <figcaption>{user.login}</figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
