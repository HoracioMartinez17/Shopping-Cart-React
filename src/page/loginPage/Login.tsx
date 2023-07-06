import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const Login = () => {
  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {
    login("Horacio")
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container-login-principal">
<div className='container-login'>
      <h1>Login</h1>
      <button
        className="btn-login"
        onClick={onLogin}
      >
        Login
      </button>


</div>
    </div>
  )
}