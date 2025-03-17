import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import BankOffers from "./pages/BankOffers";
import CalculatorSection from "./pages/CalculatorSection";
import EmiCalculator from "./pages/EmiCalculator";
import EligibilityCalculator from "./pages/EligibilityCalculator";
import ForecloseCalculator from "./pages/ForeCloseCalculator";
import About from './pages/About';
import ContactUs from './pages/ContactUs';

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="bank" element={<BankOffers />} />
            <Route path="calculator" element={<CalculatorSection />} />
            <Route path="/emicalculator" element={<EmiCalculator />} />
            <Route path="/eligibilitycalculator" element={<EligibilityCalculator/>}/>
            <Route path="/foreclosecalculator" element={<ForecloseCalculator />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />


            <Route path="/singup" element={<Signup />}></Route>
            <Route path="/singin" element={<Signin />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
