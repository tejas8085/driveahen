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
import Admin from './components/school/Admin';
import Data from './components/school/Data';
import { Toaster } from "react-hot-toast";
import Failure from './Failure';
import Terms from './components/Terms/Terms';



function App() {
  return (
    <div className="App">
    <div>
          <Toaster
            position="top-center"
          />
    </div>
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
                <Route path='/terms' element={<Terms/>} />
                <Route path='/school/login' element={<Slogin/>} />
                <Route path='/school/dashboard' element={<Sprofile/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/school' element={<Data/>} />
                <Route path='/failure' element={<Failure/>} />
                
                {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
