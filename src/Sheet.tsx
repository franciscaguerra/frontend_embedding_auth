import Iframe from 'react-iframe';
import './Sheet.css';

function Sheet() {

  return ( 
    <div>
        <div className='logo-container'>
          <img src="https://www.entreprenerd.cl/wp-content/uploads/2022/03/Logo-Xepelin-JPG.jpg" alt="Xepelin Logo" width="140px" height="60px" className="img-logo" ></img>
          <button className='button'>Cerrar sesion</button>
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
