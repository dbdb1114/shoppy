import { Outlet } from "react-router-dom";


export default function AdminHeader(params) {
    return (
        <>
            <h1>어드민 헤더</h1>
            <Outlet/>
        </>
    )
};
