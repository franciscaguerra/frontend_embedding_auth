import Login from './Login'
import { BrowserRouter as Router, HashRouter , Routes, Route } from 'react-router-dom';
import Sheet from './Sheet';
import Signup from './Signup';

function App() {

  return (
    <HashRouter basename='/'>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/googlesheet" element={<Sheet></Sheet>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
    </HashRouter>
  );
}

export default App;
