
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BuyTicket from './Components/Pages/BuyTicket';
import TicketCategory from './Components/Pages/TicketCategory';
import Event from './Components/Pages/Event';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Footer/Footer';
import seminar_banner from './Components/assets/gaurav0002 (slider).png'
import tech_banner from './Components/assets/tech_banner.jpeg'
import cultural_banner from './Components/assets/cultural_banner.jpeg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BuyTicket/>} />
        <Route path="/Tech_Fest" element={<TicketCategory banner={tech_banner} category="Tech_Fest" />} />
        <Route path="/Cultural_Fest" element={<TicketCategory  banner={cultural_banner} category="Cultural_Fest"  />} />
        <Route path="/Workshop" element={<TicketCategory banner={seminar_banner}  category="Workshop"  />} />
        <Route path="/Event" element={<Event/>} />
        < Route path='/Event/:EventId'  element={< Event/>} />
        < Route path="/cart" element={<Cart />} />
        < Route path="/login" element={<LoginSignUp />} />
      </Routes>
       <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
