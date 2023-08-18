import { Outlet } from "react-router-dom";


export default function Header () {

    return(
        <div>
            <h1>헤더</h1>
            <Outlet/>
        </div>
    )
}