import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login/login';
import { UserTable } from './pages/UserTable/UserTable';
import { UserPage } from './pages/UserPage/UserPage';


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/tabela" element={<UserTable/>}></Route>
                <Route path="/usuario/:id" element={<UserPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}