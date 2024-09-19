import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Contact from "./Pages/Contact";
import Matches from "./Pages/Matches";
import Upcomings from "./Pages/Upcomings";
import History from "./Pages/History";
import Scroll from "./Scroll";
import Ticketform from "./components/Ticketform";

function App() {
  const location = useLocation(); 

  return (
    <div>
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Scroll />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/upcoming" element={<Upcomings />} />
          <Route path="/history" element={<History />} />
          <Route path="/ticketform" element={<Ticketform/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
