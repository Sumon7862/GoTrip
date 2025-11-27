// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with NavBar and Outlet */}
        <Route path="/" element={<Layout />}/>
        {/* Outside Layout Routes (without NavBar) */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
