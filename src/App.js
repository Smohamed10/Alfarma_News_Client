import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import"./css/bootstrap.css" ;
import"./css/font-awesome.min.css"; 
import"./css/responsive.css"; 
import"./css/colors.css";
import "./Pages/Admin/spinner.css";


function App() {
  return (
    <div id="wrapper">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
