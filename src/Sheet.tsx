import Iframe from 'react-iframe';
import './Sheet.css';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Sheet() {

  const authenticatedLocalStorage = JSON.parse(localStorage.getItem("authenticated") || "[]")
  const [authenticated, setAuthenticated] = useState(authenticatedLocalStorage);

  const handleClose = () => {
    console.log("Entro al handle close")
    setAuthenticated("")
    }

  useEffect(() => {
      localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return ( 
    <div>
        {authenticated.length === 0 && <Navigate to="/"/>}
        <div className='logo-container'>
          <img src="https://www.entreprenerd.cl/wp-content/uploads/2022/03/Logo-Xepelin-JPG.jpg" alt="Xepelin Logo" width="140px" height="60px" className="img-logo" ></img>
          <button onClick={handleClose} className='button'>Cerrar sesion</button>
        </div>
        <div className='iframe-container'>
          <center>
            <Iframe url="https://docs.google.com/spreadsheets/d/1j2j_yrND6IfJUY3HSXdDODdcXxsoqt6qG8EooDr5cYw/edit?usp=sharing?&amp;rm=minimal&amp;single=true&amp" width="85%" height="550px" className='iframe'/>
          </center>
        </div>
    </div>     
  )
}

export default Sheet;
