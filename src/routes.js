import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart";


export const routes=[
    {path:"/",element:<ProductList/>},
    {path:"/product/:pid",element:<ProductDetails/>},
    {path:"/cart",element:<Cart/>}
]