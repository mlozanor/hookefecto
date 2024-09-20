import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Mascotas from "./components/mascotas";
import Detail from "./components/Detail";


function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;