import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalPage from './components/PrincipalPage';
import Bienvenida from './components/Bienvenida';
import { ErrorProvider } from './components/ErrorContext';

function App() {
  return (
    <ErrorProvider>
      <Router>
        <Routes>
          <Route path='/Manual/*' element={<PrincipalPage />} />
          <Route path='/' element={<Bienvenida />} />
        </Routes>
      </Router>
    </ErrorProvider>
  );
}

export default App;
