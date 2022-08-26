import "./App.css";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
// import LogInPage from "./Pages/LogInPage/LogInPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
// import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <LogInPage /> */}
      {/* <SignUpPage /> */}
      <ProductsPage />
      <NavbarHeader />
      <Navbar />
      <LogInPage />
      {/* <SignUpPage /> */}
      <Footer />
    </div>
  );
}

export default App;
