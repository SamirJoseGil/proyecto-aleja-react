import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalPage from './components/PrincipalPage';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/Manual/*' element={<PrincipalPage />} />
          <Route path='/' element={<Bienvenida />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
