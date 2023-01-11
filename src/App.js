import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Bookings from './components/Bookings/Bookings';
import Specific from './components/specific/Specific';
import PrivateRoute from './components/PrivateRoute';
import SigIn from './components/SigIn/SigIn';
import Profile from './components/Profile/Profile';
import Book from './components/Book/Book';
import Cart from './components/Cart/Cart';
import Slogin from './components/school/Slogin';
import Sprofile from './components/school/Sprofile';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/signin" element={<SigIn />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/bookings/school/:id" element={<Specific/>} />
                <Route path='/profile' element={<PrivateRoute route='/signin' />}>
                 <Route path='/profile' element={<Profile />} />
                </Route>
                <Route path='/book/:id' element={<PrivateRoute route='/signin' />}>
                <Route path='/book/:id' element={<Book/>} />
                </Route>
                <Route path='/cart' element={<PrivateRoute route='/signin' />}>
                <Route path='/cart' element={<Cart/>} />
                </Route>
                <Route path='/school/login' element={<Slogin/>} />
                <Route path='/school/login' element={<Sprofile/>} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
