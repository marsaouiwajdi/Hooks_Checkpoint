import { Routes , Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import DetailMovie from "./components/DetailMovie";


function App () {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/view/:id" element={<DetailMovie></DetailMovie>} ></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
    </Routes>

    </>
  )
}
export default App;