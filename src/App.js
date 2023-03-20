import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import './index.css'
import React, { useContext } from "react";
import Create from "./components/Create/Create";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyPhotos from "./components/MyPhotos/MyPhotos";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { Details } from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import { AuthContext } from "./context/AuthContext";
import { Logout } from "./components/Logout/Logout";


function App() {

    const {currentUser} = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return currentUser ? (children) : <Navigate to={'/login'} />
    }
    return (

        <div className="App">
            <Header />
            <main>

                <Routes>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />

                    <Route path="/myPhotos" element={
                        <RequireAuth>
                            <MyPhotos />
                        </RequireAuth>
                    } />
                    <Route path="/create" element={
                        <RequireAuth>
                            <Create />
                        </RequireAuth>
                    } />
                    <Route path="/myPhotos/:id" element={
                        <RequireAuth>
                            <Details />
                        </RequireAuth>
                    } />
                    <Route path="/edit" element={
                        <RequireAuth>
                            <Edit />
                        </RequireAuth>
                    } />
                    <Route path="/logout" element={<Logout />} />

                </Routes>
            </main>
        </div>
    );
}

export default App;
