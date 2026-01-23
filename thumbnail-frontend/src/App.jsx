import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About";
import Community from './pages/Community'
import Generate from "./pages/Generate";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import MyGenerations from "./pages/MyGenearations";
// import SoftBackdrop from './components/SoftBackdrop';
// import Footer from './components/Footer';
// import LenisScroll from './components/lenis';

function App() {
	return (
		<>
		 <BrowserRouter>
      <Routes>
        {/* Layout with Outlet */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/generate" element={<Generate />} />
		  <Route path="/contact" element={<Contact/>}/>
	      <Route path='/auth' element={<Auth/>}/>
        <Route path='/mygenerations'element={<MyGenerations/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
		</>
	);
}
export default App;