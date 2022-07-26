const Login = (props) => {
  const processLoginForm = () => {

  }

  return(
    <div className="Login">
      <form className="login-form" onSubmit={processLoginForm}>
        <label>
          Email: 
          <input type="email" name="email" />
        </label>
        <label>
          Password: 
          <input type="password" name="password" />
        </label>

        <input className="login-form-submit" type="submit" value="Log in" />
      </form>
    </div>
  )
}

export { Login }
