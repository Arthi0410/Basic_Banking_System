import './App.css';
import HomePage from './Pages/Homepage/HomePage';
import Transaction from './Pages/Transaction/Transaction';
import { Routes, Route } from 'react-router-dom';
import Customer from './Pages/ViewCustomers/viewcuts';
import History from './Pages/History/history';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transac" element={<Transaction />} />
      <Route path="/view" element={<Customer />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
