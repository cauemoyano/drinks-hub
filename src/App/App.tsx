import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../Components/Layouts/navigation/NavBar/NavBar";
import Home from "../Views/Home/Home";

function App() {
  return (
    <div className="bg-neutral-light w-screen min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
