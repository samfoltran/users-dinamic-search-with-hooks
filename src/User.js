function User(props){

    return(
        <div className='user'>
            <img style={ {width: 50} } src={props.user.picture} />
            <p>{props.user.name} / {props.user.age}</p>
            <div className='clear' />
        </div>
    );
  
} export default User;