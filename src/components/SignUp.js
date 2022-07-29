import { Link } from "react-router-dom"

const SignUp = (props) => {
  const processSignUp = async (event) => {
    event.preventDefault();

    let password = event.target["password"].value;
    let passwordConfirm = event.target["password-confirmation"].value;

    if(password !== passwordConfirm) {
      alert("Password confirm don't match, please try again")
    } else {
      let name = event.target["name"].value; 
      let email = event.target["email"].value;

      console.log(name, email, password, passwordConfirm)
    }
  }

  return(
    <div className="SignUp">
      <form className="authentication-form" onSubmit={processSignUp}>
        <label>
          Name:
          <input type="text" name="name" required/>
        </label>

        <label>
          Email:
          <input type="email" name="email" required/>
        </label>

        <label>
          Password: 
          <input type="password" name="password" required/>
        </label>

        <label>
          Confirm password: 
          <input type="password" name="password-confirmation" required/>
        </label>

        <input className="authentication-submit" type="submit" value="Sign Up" />
      </form>

      <Link to="/login" className="unstyle-link authentication-link">
        Already have an account? Click here to log in.
      </Link>
    </div>
  )
}

export { SignUp }
