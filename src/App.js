import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Transactions from "./components/Transaction";
import { GlobalStyle } from "./data/globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/transactions" element={<Transactions />} />
            
          </Routes>
        </BrowserRouter>
    </>
  );
}
