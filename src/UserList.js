import User from './User.js';

function UserList(props){

    const users = [
        <User key={1} user={
            {
                name: "Julia",
                age: 25,
                picture: "pictures/julia.png"
            }
        } />,
        <User key={2} user={
            {
                name: "Maria",
                age: 35,
                picture: "pictures/maria.png"
            }
        } />
    ];
  
    return(
      <div>
        {users}
      </div>
    );
  
} export default UserList;