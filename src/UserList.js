import User from './User.js';

import users_database from './users.json';

function UserList(props){

    const users = users_database.map((user) => {
        if(user.name.toLowerCase().match(props.filter.toLowerCase())){
            return <User key={user.key} user={user} />
        }
    });
    
    return(
        <div id='usersList'>
            {users}
        </div>
    );
  
} export default UserList;