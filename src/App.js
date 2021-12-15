import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components import
import LogIn from './Components/Login'
import Home from './Components/Home'
import MoreInfo from './Components/MoreInfo'
import AddPackage from './Components/AddPackage';

// admin components
import AdminLogin from './Components/Admin/Login'
import AdminHome from './Components/Admin/Home'
import AddUser from './Components/Admin/AddEmployee/index.jsx';
import EditUser from './Components/Admin/EditUser'



function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<LogIn/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/moreInfo' element={<MoreInfo/>}/>
          <Route exact path='/add-package' element={<AddPackage/>}/>
          {/* Admin Routes */}
          <Route exact path='/admin' element={<AdminLogin/>}/>
          <Route exact path='/admin-home' element={<AdminHome/>}/>
          <Route exact path='/add-employee' element={<AddUser/>}/>
          <Route exact path='/edit-user' element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
