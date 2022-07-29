import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const SIGN_UP_API_URL = "http://127.0.0.1:3000/api/users";

  const navigate = useNavigate();

  const processSignUp = async (event) => {
    event.preventDefault();

    let password = event.target["password"].value;
    let passwordConfirm = event.target["password-confirmation"].value;

    if(password !== passwordConfirm) {
      alert("Password confirm don't match, please try again")
    } else {
      let name = event.target["name"].value; 
      let email = event.target["email"].value;

      const response = await fetch(SIGN_UP_API_URL, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

      const data = await response.json();

      if(data.error) {
        alert("User email already exist, please try using other email");
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
  
        navigate('/');
      }
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
