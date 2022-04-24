import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="App">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
