import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Loginpage";
import Signup from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;