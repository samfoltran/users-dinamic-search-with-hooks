import ReactDOM from 'react-dom/client';

function User(props){

  return(
    <div>
      <img style={ {width: 50} } src={props.user.picture} />
      <p>{props.user.name} / {props.user.age}</p>
    </div>
  );

}

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
        age: 30,
        picture: "pictures/julia.png"
      }
    } />
  ];

  return(
    <div>
      {users}
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
  name: "Julia",
  age: 25,
  picture: "pictures/julia.png"
}

root.render(
  //<User user={user} />
  <UserList />
);