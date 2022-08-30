function User(props){

    return(
        <div>
            <img style={ {width: 50} } src={props.user.picture} />
            <p>{props.user.name} / {props.user.age}</p>
        </div>
    );
  
} export default User;