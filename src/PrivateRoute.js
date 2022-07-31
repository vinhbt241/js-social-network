import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  return localStorage.token ? children : <Navigate to="/js-social-network/login" />
}

export { PrivateRoute }
