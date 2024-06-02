import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Index() {
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
export default Index;