import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = ( e: any ) => {
        e.preventDefault()
        if (username === "" || password === ""){
            setError(true)
            return
        }
        setError(false)
        setLoginStatus("")
    }

    const handleAuth = () => {
        axios.post("http://127.0.0.1:4000/login/", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.status !== 200){
                console.log("Entro al response data")
                console.log(loginStatus)
                console.log(response.data)
                setLoginStatus(response.data);
                setAuthenticated(false);
            } else {
                setAuthenticated(true);
            }
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
            setLoginStatus(error.response);
            console.log(loginStatus)
          });
    }

    return (
      <div>
        <div className='logo-container'>
            <img src="https://www.entreprenerd.cl/wp-content/uploads/2022/03/Logo-Xepelin-JPG.jpg" alt="Xepelin Logo" width="140px" height="60px" className="img-logo" ></img>
        </div>
        <div className="row">
            <div className="column">
                <div className="container-img">
                    <img 
                        src="https://cdn.sanity.io/images/4n68r2aa/production/dc4d27ed32ddbfb1cb2f9500231838f5306aecd6-1500x1022.png?q=75&fit=clip&auto=format" 
                        alt="Xepelin Logo" 
                        height="70%" 
                        width="100%" 
                        className='side-image'>
                    </img>
                </div>
            </div>
            <div className="column">
                <div className='form-container'>
                    <h1 className='text'>Ingresa al </h1>
                    <h1 className='text'>Portal de Tasas </h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <label className='label'>Usuario</label>       
                        <input 
                            className='input' 
                            type="text" 
                            placeholder='Usuario' 
                            value={username}
                            onChange={e => setUsername(e.target.value)}>
                        </input>
                        <label className='label'>Contraseña</label>
                        <input 
                            className='input' 
                            type="password" 
                            placeholder='Contraseña'
                            value={password}
                            onChange={e => setPassword(e.target.value)}>  
                        </input>
                        <button onClick={handleAuth} className='login-button'>Ingresar</button>
                    </form>
                    {loginStatus.length > 0 && <p className='warning'>{loginStatus}</p>}
                    {error && <p className='warning'>Te faltan campos por completar</p>}
                    {authenticated && <Navigate to="/googlesheet" replace={true} />}
                </div>  
            </div>  
        </div>     
      </div>
  );
}

export default Login;
