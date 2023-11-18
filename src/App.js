import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Order from './Pages/Order'
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/payment" element={<Order />} />   
        <Route path="/payment/*" element={<Navigate replace to="/payment" />} />  
      </Routes>
    </Router>
  );
}

export default App;