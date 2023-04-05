import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import DrawerAppBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/Application";

function App() {
  return (
    <Router>
      {/* header */}
      <DrawerAppBar />
      {/* page setup */}
      <Routes>
        <Route exact path="/" element={<Application />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/students" element={<Students />} /> */}
        {/* <Route path="/update/:id" element={<Update />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
