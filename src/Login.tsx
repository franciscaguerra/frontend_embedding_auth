import './Login.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

    const authenticatedLocalStorage = JSON.parse(localStorage.getItem("authenticated") || "[]")
    console.log(typeof(authenticatedLocalStorage))
    console.log("authenticatedLocalStorage", authenticatedLocalStorage)
    console.log(authenticatedLocalStorage.length)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState(false);
    
    const [authenticated, setAuthenticated] = useState(authenticatedLocalStorage);

    useEffect(() => {
        localStorage.setItem('authenticated', JSON.stringify(authenticated));
    }, [authenticated]);

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
        console.log(username, password)
        console.timeLog(process.env.URL)
        axios.get(process.env.URL + "/login", {params:{
        username: username,
        password: password,}
        }).then((response) => {
            if (response.data.length === 0){
                setLoginStatus("Usuario no encontrado. Intentalo de nuevo");} 
            else {setAuthenticated(username);}
        })
        .catch(function (error) {
            setLoginStatus(error.data)
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
                        height="100%" 
                        width="100%">
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
                        <Link to="/signup">No tengo cuenta</Link>
                    </form>
                    {loginStatus && <p className='warning'>{loginStatus}</p>}
                    {error && <p className='warning'>Te faltan campos por completar</p>}
                    {authenticated.length > 0 && <Navigate to="/googlesheet"/>}

                </div>  
            </div>  
        </div>     
      </div>
  );
}

export default Login;
