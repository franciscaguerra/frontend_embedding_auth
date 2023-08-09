import './Signup.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState(false);
    const authenticatedLocalStorage = JSON.parse(localStorage.getItem("authenticated") || "[]")
    const [authenticated, setAuthenticated] = useState(authenticatedLocalStorage);

   

    const handleSubmit = ( e: any ) => {
        e.preventDefault()
        if (username === "" || password === ""){
            setError(true)
            return
        }
        setError(false)
        setLoginStatus("")
    }

    console.log("LENGH SIGN UO", authenticatedLocalStorage.length)

    const handleSignUp = () => {
        axios.post(process.env.POST_URL || "localhost", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.status !== 200){
                console.log("Entro al response data")
                console.log(loginStatus)
                console.log(response.data)
                setLoginStatus(response.data);
                setAuthenticated("");
            } else {
                setAuthenticated(username);
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
                <div className='form-container'>
                    <h1 className='text'>Registrate en el </h1>
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
                        <button onClick={handleSignUp} className='login-button'>Registrarme</button>
                        <Link to="/">Ya tengo cuenta</Link>
                    </form>
                    {loginStatus.length > 0 && <p className='warning'>{loginStatus}</p>}
                    {error && <p className='warning'>Te faltan campos por completar</p>}
                    {authenticated.length > 0  && <Navigate to="/googlesheet" replace={true} />}
                </div>  
            </div>  
            <div className="column">
                <div className="container-img-signup">
                    <img 
                        src="https://cdn.sanity.io/images/4n68r2aa/production/9649d3fb78f19311f2a52cddbebc0250d8f10ec3-1500x1022.png?q=75&fit=clip&auto=format" 
                        alt="Xepelin Logo" 
                        height="730px" 
                        width="100%">
                    </img>
                </div>
            </div>      
        </div>     
      </div>
  );
}

export default Signup;
