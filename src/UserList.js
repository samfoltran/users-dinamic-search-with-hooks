import User from './User.js';

import users_database from './users.json';

function UserList(props){

    const users = users_database.map((user) => {
        if(user.name.toLowerCase().match(props.filter)){
            return <User key={user.key} user={user} />
        }
    });
    
    return(
        <div>
            {users}
        </div>
    );
  
} export default UserList;