import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import frFR from 'antd/es/locale/fr_FR';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



import Home from './Screen/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import WrongPage from './Others/WrongPage';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import Profile from './Screen/Profile';
import EmployeesAccording from './OthersScreen/EmployeesAccording';


function App() {
  return (
    <ConfigProvider locale={frFR} >
      <BrowserRouter>
        <div className='App'>
          {/* <Header /> */}
          <Routes>
            <Route path="*" element={<WrongPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/EmployeesAccording" element={<EmployeesAccording />} />
          </Routes>
           {/* <Footer />  */}
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
