
import './App.css';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { Route , Routes , } from 'react-router-dom';
import Users from './modules/users/Users';
import UsersList from './modules/users/UsersList';
import UsersForm from './modules/users/UsersForm';
import MainNavigation from './modules/common/components/MainNavigation'
import Home from './modules/home/Home';
function App() {
  return (
   <Container maxWidth="sm">
    <MainNavigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='users' element={<Users />}>
       <Route path='' element={<UsersList />} />
       <Route path=':id' element={<UsersForm />} />
      </Route>
    </Routes>
   </Container>
  );
}

export default App;
