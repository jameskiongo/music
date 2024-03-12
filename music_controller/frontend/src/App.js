import HomePage from "./components/HomePage";
import CreateRoomPage from "./components/CreateRoomPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import RoomJoinPage from "./components/RoomJoinPage";
import Navbar from "./components/navigation/NavBar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/join" element={<RoomJoinPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
