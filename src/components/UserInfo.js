const UserInfo = (props) => {
  return(
    <div className={`UserInfo ${props.classToAdd}`}>
      <img src={props.user.avatar_url} alt=""/>
      {props.hideName ? "" : <h1>{props.user.name}</h1>}
    </div>
  )
}

export { UserInfo }
