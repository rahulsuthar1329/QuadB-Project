import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary/Summary";
import BookTicket from "./pages/BookTicket/BookTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/book-ticket" element={<BookTicket />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
