import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
function App() {
  const appRoute=useRoutes(routes)
  return(
    <div>
    <Header/>
    {appRoute}
    </div>
  )
}

export default App;
