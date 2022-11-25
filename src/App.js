import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
// import Navbar from './layout/DefaultLayout/Navbar';
// import Table from './pages/Home/Table';
// import Teachers from './pages/Home/Teachers';
import Admin from './pages/Admin/Admin';
import Listdk from './pages/Admin/Listdk';
import DefaultLayout from './layout/DefaultLayout';
import ListStudent from './components/ListStudent';

function App() {
    return (
        //setting router
        <Router>
            <div className="App">
                <ListStudent />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/listdk" element={<Listdk />} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
