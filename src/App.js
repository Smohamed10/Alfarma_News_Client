import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
