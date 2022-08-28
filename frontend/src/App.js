import "./App.css";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Pages/AllRoutes.jsx";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <NavbarHeader />
      <Navbar />
      <AllRoutes />
      <Footer /> */}
      <HomePage/>
    </div>
  );
}

export default App;
