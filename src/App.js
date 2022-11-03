import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import frFR from 'antd/es/locale/fr_FR';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



import Home from './Screen/Home';
import Header from './Components/Header';
import WrongPage from './Others/WrongPage';

function App() {
  return (
    <ConfigProvider locale={frFR} >
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="*" element={<WrongPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
