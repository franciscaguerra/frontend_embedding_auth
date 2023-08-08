import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sheet from './Sheet';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/googlesheet" element={<Sheet></Sheet>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
