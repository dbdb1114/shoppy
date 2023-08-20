import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";


export default function Header () {

    return(
        <header>
            <div className="flex h-20 justify-between">
                <Link to='/' className="flex items-center">
                    <span alt="logo" className="inline-block w-14 h-14 md:w-16 md:h-16 bg-[url('../public/image/logo.png')] bg-cover" />
                    <span className="text-3xl md:text-5xl font-bold text-mainColor">Shoppy</span>
                </Link>
                <div className="flex items-center gap-2 pt-2">
                    <span>product</span>
                    <AiOutlineShoppingCart color="#f96263" size={33}/>
                    <button className="ml-5 bg-mainColor h-10 w-20 text-white font-bold text-base mr-3">Login</button>
                </div>
            </div>
        </header>
    )
}
