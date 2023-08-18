import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";


export default function Header () {

    return(
        <div>
            <div className="flex h-20 justify-between">
                <Link to='/' className="flex items-center">
                    <img src="./image/logo.png" alt="logo" className="inline-block w-16 h-16" />
                    <span className="text-5xl font-bold text-mainColor">Shoppy</span>
                </Link>
                <div className="flex items-center gap-2 pt-2">
                    <span>products</span>
                    <AiOutlineShoppingCart color="#f96263" size={33}/>
                    <button className="ml-5 bg-mainColor h-10 w-20 text-white font-bold text-base">Login</button>
                </div>
            </div>
        </div>
    )
}