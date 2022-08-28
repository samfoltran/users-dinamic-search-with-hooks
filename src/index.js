import ReactDOM from 'react-dom/client';

function User(props){

  return(
    <div>
      <img style={ {width: 50} } src={props.user.picture} />
      <p>{props.user.name} / {props.user.age}</p>
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
  <User user={user} />
);