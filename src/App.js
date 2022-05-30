import './App.css';
import Home from './componenet/Home/Home';
import Friends from './componenet/Friends/Friends';
import About from './componenet/About/About';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NotFound from './componenet/NotFound/NotFound';
import Navlink from './componenet/NavLink/Navlink';
import FriendDetails from './componenet/FriendsDetails/FriendDetails';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Navlink/>
        <Routes>
          <Route path='/home' element ={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/friend/:friendId' element={<FriendDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
