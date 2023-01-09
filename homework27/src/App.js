import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes, Link
} from "react-router-dom";
import Users from './modules/users/components/Users';
import Form from './modules/users/components/Form';
import FormEdit from './modules/users/components/FormEdit';
const Navbar = () => (
  <>
    <ul>
      <li>
        <Link to="/">Form</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </>
); 


function App() {
  
  return (
    <div className='container'>
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/users" element={<Users />} />
    <Route path="/edit/:id" element={<FormEdit />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
