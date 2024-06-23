import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Bestsellers from "./pages/Bestsellers/Bestsellers";
import BestsellersDetails from "./pages/Bestsellers/BestsellersDetails";
import Contact from "./pages/Form/Contact";
import About from "./pages/Form/About";
import Home from "./pages/Home";
import ErrorPage from "./pages/Form/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="bestsellers" element={<Bestsellers />} />
          <Route path="bestsellers/:id" element={<BestsellersDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
