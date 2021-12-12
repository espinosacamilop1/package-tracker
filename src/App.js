import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components import
import LogIn from './Components/Login'
import Home from './Components/Home'

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<LogIn/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
