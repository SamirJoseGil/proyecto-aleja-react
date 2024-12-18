import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorProvider } from './components/ErrorContext.tsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
    <ErrorProvider>
        <App />
    </ErrorProvider>
)
