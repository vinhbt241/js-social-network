import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const LOGIN_API_URL = "https://virtuoso-social-network.herokuapp.com/api/sessions";

  const navigate = useNavigate();

  const processLogin = async (event) => {
    event.preventDefault();

    let userEmail = event.target["email"].value;
    let userPassword = event.target["password"].value;

    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: localStorage.token
      }
    })

    const data = await response.json();

    if(data.error) {
      alert("Wrong email or password, please try again");
    } else {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      navigate('/');
    }
  }

  return(
    <div className="Login">
      <form className="authentication-form" onSubmit={processLogin}>
        <label>
          Email: 
          <input type="email" name="email" required/>
        </label>
        <label>
          Password: 
          <input type="password" name="password" required/>
        </label>

        <input className="authentication-submit" type="submit" value="Log in" />
      </form>

      <Link to="/js-social-network/sign-up" className="unstyle-link authentication-link">
        New member? Click here to sign up.
      </Link>
    </div>
  )
}

export { Login }
