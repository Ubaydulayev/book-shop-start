import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";
import HomePage from "./Container/Pages/HomePage";
import ReactDOM from "react-dom/client";
import Main from "./Container/Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
