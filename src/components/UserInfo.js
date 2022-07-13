const UserInfo = (props) => {
  return(
    <div className={`UserInfo ${props.classToAdd}`}>
      <img src={props.userImg} alt=""/>
      <h1>{props.userName}</h1>
    </div>
  )
}

export { UserInfo }
