import Home from "./screens/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./screens/Login"
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import Signup from "./screens/Signup.jsx";
import { CartProvider } from "./components/ContextReducer.jsx";
import MyOrder from "./screens/MyOrder.jsx";

const App=()=>{
    return(
        <CartProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/createuser" element={<Signup/>}/>
                <Route path="/myOrder" element={<MyOrder/>}/>
            </Routes>
        </BrowserRouter>
        </CartProvider>
    )
}
export default App