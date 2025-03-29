import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/Login";
import Singnup from "./pages/Singnup";
import VerifyEmail from "./pages/VerifyEmail";

const isLoggedIn = localStorage.getItem("token");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!isLoggedIn ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/signup" element={<Singnup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/books/create"
          element={isLoggedIn ? <CreateBook /> : <Navigate to="/" />}
        />
        <Route
          path="/books/details/:id"
          element={isLoggedIn ? <ShowBook /> : <Navigate to="/" />}
        />
        <Route
          path="/books/edit/:id"
          element={isLoggedIn ? <EditBook /> : <Navigate to="/" />}
        />
        <Route
          path="/books/delete/:id"
          element={isLoggedIn ? <DeleteBook /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
