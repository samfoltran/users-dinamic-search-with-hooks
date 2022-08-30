import User from './User.js';

import users_database from './users.json';

function UserList(props){
    console.log(props.filter);
    const users = users_database.map((user) => {
        return <User key={user.key} user={user} />
    });
    
    return(
        <div>
            {users}
        </div>
    );
  
} export default UserList;