const Comment = (props) => {
  return(
    <div className="Comment">
      <div className="user-info">
        <img src={props.userImg} alt=""/>
        <h1>{props.userName}</h1>
      </div>

      <p>{props.content}</p>
    </div>
  )
}

export { Comment }
