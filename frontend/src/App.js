import "./App.css";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Pages/AllRoutes.jsx";

function App() {
  return (
    <div className="App">
      
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
