import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const LOGIN_API_URL = "http://127.0.0.1:3000/api/sessions";

  const navigate = useNavigate();

  const processLoginForm = async (event) => {
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
      alert(data.error);
    } else {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      navigate('/');
    }
  }

  return(
    <div className="Login">
      <form className="login-form" onSubmit={processLoginForm}>
        <label>
          Email: 
          <input type="email" name="email"/>
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
